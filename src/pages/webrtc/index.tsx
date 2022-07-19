import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import Peer, { MediaConnection } from "peerjs";
import { Box } from "components/box";

const Home: NextPage = () => {
  const [peer, setPeer] = useState<Peer>();
  const [peerId, setPeerId] = useState<string>();
  const [remotePeerIdValue, setRemotePeerIdValue] = useState<string>();
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);
  const currentUserVideoRef = useRef<HTMLVideoElement | null>(null);
  const peerInstance = useRef<Peer | null>(null);
  const [haveMediaDevices, setHaveMediaDevices] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (!peer) {
        setPeer(new (await import("peerjs")).Peer());
      }

      if (peer) {
        peer.on("open", (id: string) => {
          console.log(id);
          setPeerId(id);
        });

        peer.on("call", async (call: MediaConnection) => {
          if (navigator.mediaDevices) {
            setHaveMediaDevices(true);
          }
          const mediaStream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
          });

          if (currentUserVideoRef.current) {
            currentUserVideoRef.current.srcObject = mediaStream;
            await currentUserVideoRef.current.play();
            call.answer(mediaStream);
            call.on("stream", (remoteStream: MediaStream) => {
              if (remoteVideoRef.current) {
                remoteVideoRef.current.srcObject = remoteStream;
                remoteVideoRef.current.play();
                console.log("receive video call target");
              }
            });
            call.on("close", () => {
              if (remoteVideoRef.current) {
                remoteVideoRef.current.srcObject = null;
                console.log("close video call target");
              }
            });
          }
        });

        peerInstance.current = peer;
      }
    })();

    return () => {
      if (peer) {
        peer.disconnect();
      }
    };
  }, [peer]);

  const call = async (remotePeerId: string) => {
    if (navigator.mediaDevices) {
      setHaveMediaDevices(true);
    }
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });

    if (currentUserVideoRef.current) {
      currentUserVideoRef.current.srcObject = mediaStream;
      await currentUserVideoRef.current.play();

      if (peerInstance.current) {
        const call = await peerInstance.current.call(remotePeerId, mediaStream);

        if (call) {
          console.log("start video call 1");
          call.on("stream", (remoteStream: MediaStream) => {
            if (remoteVideoRef.current) {
              remoteVideoRef.current.srcObject = remoteStream;
              remoteVideoRef.current.play();
              console.log("start video call 2");
            }
          });
        }
      }
    }
  };

  async function onPlayVideo() {
    if (currentUserVideoRef.current) {
      await currentUserVideoRef.current.play();
    }
  }

  async function onPauseVideo() {
    if (currentUserVideoRef.current) {
      await currentUserVideoRef.current.pause();
    }
  }

  return (
    <Box
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      placeItems={"center"}
    >
      <h1>Current user id is {peerId}</h1>
      <h1>{`Media devices ${haveMediaDevices}`}</h1>
      <input
        type="text"
        value={remotePeerIdValue ? remotePeerIdValue : ""}
        onChange={(e) => setRemotePeerIdValue(e.target.value)}
      />
      <button
        onClick={async () => {
          if (remotePeerIdValue) await call(remotePeerIdValue);
        }}
      >
        Call
      </button>
      <div>
        <video ref={currentUserVideoRef} />
      </div>
      <div>
        <video ref={remoteVideoRef} />
      </div>
      <button onClick={onPlayVideo}>play</button>
      <button onClick={onPauseVideo}>pause</button>
    </Box>
  );
};

export default Home;
