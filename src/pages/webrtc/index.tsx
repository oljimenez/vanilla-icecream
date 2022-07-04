import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import Peer, { MediaConnection } from "peerjs";

const Home: NextPage = () => {
  const [peer, setPeer] = useState<Peer>();
  const [peerId, setPeerId] = useState<string>();
  const [remotePeerIdValue, setRemotePeerIdValue] = useState<string>();
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);
  const currentUserVideoRef = useRef<HTMLVideoElement | null>(null);
  const peerInstance = useRef<Peer | null>(null);

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
              }
            });
            call.on("close", () => {
              if (remoteVideoRef.current) {
                remoteVideoRef.current.srcObject = null;
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
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    if (currentUserVideoRef.current) {
      currentUserVideoRef.current.srcObject = mediaStream;
      await currentUserVideoRef.current.play();

      if (peerInstance.current) {
        const call = await peerInstance.current.call(remotePeerId, mediaStream);

        if (call) {
          call.on("stream", (remoteStream: MediaStream) => {
            if (remoteVideoRef.current) {
              remoteVideoRef.current.srcObject = remoteStream;
              remoteVideoRef.current.play();
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
    <div className="App">
      <h1>Current user id is {peerId}</h1>
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
    </div>
  );
};

export default Home;
