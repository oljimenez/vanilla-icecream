import { useEffect, useRef, useState } from "react";
import Peer, { MediaConnection } from "peerjs";

type CurrentCallType = {
  call: MediaConnection | null;
  isAnswered: boolean;
  isClosed: boolean;
  isVideo: boolean;
  isAudio: boolean;
};

export const useWebRtc = () => {
  const [currentCall, setCurrentCall] = useState<CurrentCallType>({
    call: null,
    isAnswered: false,
    isClosed: false,
    isAudio: true,
    isVideo: true,
  });
  const [peer, setPeer] = useState<Peer>();
  const [localPeerId, setLocalPeerId] = useState<string>();
  const [remotePeerId, setRemotePeerId] = useState<string>();
  const [loadingStart, setLoadingStart] = useState<boolean>();
  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);

  const [example, setExample] = useState<boolean>();

  const onInitCall = async (remotePeerIdValue?: string | undefined) => {
    const remoteId = remotePeerIdValue ?? remotePeerId;
    if (remoteId && localVideoRef.current) {
      setLoadingStart(true);
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      localVideoRef.current.srcObject = mediaStream;
      await localVideoRef.current.play();
      localVideoRef.current.muted = true;

      if (peer) {
        const currentCall: MediaConnection = await peer.call(
          remoteId,
          mediaStream
        );
        if (currentCall) {
          currentCall.on("stream", (remoteStream: MediaStream) => {
            if (remoteVideoRef.current) {
              remoteVideoRef.current.srcObject = remoteStream;
              remoteVideoRef.current.play();
              setLoadingStart(false);
            }
          });
          currentCall.on("close", () => {
            if (remoteVideoRef.current) {
              remoteVideoRef.current.srcObject = null;
              remoteVideoRef.current.pause();
              setLoadingStart(false);
            }
          });
        }
        setCurrentCall((prevState) => ({
          ...prevState,
          call: currentCall,
          isAnswered: true,
        }));
      }
    }
  };

  const onAnswerCall = async () => {
    setExample(!!currentCall.call && !!localVideoRef.current);
    console.log(!!currentCall.call);
    if (localVideoRef.current && currentCall.call) {
      const localMediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      const remoteMediaStream = await navigator.mediaDevices.getUserMedia({
        video: currentCall.isVideo,
        audio: currentCall.isAudio,
      });

      localVideoRef.current.srcObject = localMediaStream;
      await localVideoRef.current.play();
      localVideoRef.current.muted = true;
      currentCall.call.answer(remoteMediaStream);
      setCurrentCall((prevState) => ({ ...prevState, isAnswered: true }));
    }
  };

  const onCloseCall = () => {
    if (currentCall.call) {
      currentCall.call.close();
    }
    if (localVideoRef.current) {
      localVideoRef.current.pause();
      localVideoRef.current.srcObject = null;
    }
  };

  const onMutedCall = () => {
    if (currentCall.call) {
      setCurrentCall((prevState) => ({ ...prevState, isAudio: false }));
    }
  };

  useEffect(() => {
    (async () => {
      if (!peer) {
        setPeer(new (await import("peerjs")).Peer());
      }

      if (peer) {
        peer.on("open", (id: string) => {
          setLocalPeerId(id);
        });

        peer.on("call", async (currentCall: MediaConnection) => {
          console.log("call");
          setCurrentCall((prevState) => ({ ...prevState, call: currentCall }));
          if (localVideoRef.current) {
            currentCall.on("stream", (remoteStream: MediaStream) => {
              if (remoteVideoRef.current) {
                remoteVideoRef.current.srcObject = remoteStream;
                remoteVideoRef.current.play();
              }
            });
            currentCall.on("close", () => {
              if (remoteVideoRef.current) {
                remoteVideoRef.current.srcObject = null;
                remoteVideoRef.current.pause();
              }
              if (localVideoRef.current) {
                localVideoRef.current.srcObject = null;
                localVideoRef.current.pause();
              }
            });
          }
        });
      }
    })();

    return () => {
      if (peer) {
        peer.destroy();
      }
    };
  }, [peer]);

  return {
    peerId: localPeerId,
    remotePeerId,
    remoteVideoRef,
    currentUserVideoRef: localVideoRef,
    isLoading: loadingStart,
    currentCall,
    onInitCall,
    onCloseCall,
    onAnswerCall,
    onMutedCall,
    setRemoteId: setRemotePeerId,
    example,
  };
};
