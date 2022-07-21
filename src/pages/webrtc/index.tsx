import type { NextPage } from "next";
import { Box } from "components/box";
import { useWebRtc } from "hooks/useWebRtc";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const {
    setRemoteId,
    onInitCall,
    onCloseCall,
    onAnswerCall,
    onMutedCall,
    peerId,
    currentCall,
    isLoading,
    remotePeerId,
    remoteVideoRef,
    currentUserVideoRef,
  } = useWebRtc();

  return (
    <Box>
      <Box padding={"lg"}>
        <button
          onClick={async () => {
            await router.push("../");
          }}
        >
          {"<--"}
        </button>
      </Box>
      <Box
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        placeItems={"center"}
        gap={"1rem"}
      >
        <h1>Current user id is {peerId}</h1>
        <Box gap={"1rem"} display={"flex"} padding={"1rem"}>
          <Box itemSize={"20rem"} background={"red"} textAlign={"center"}>
            <span>Me</span>
            <video width={"100%"} height={"100%"} ref={currentUserVideoRef} />
          </Box>
          <Box itemSize={"20rem"} background={"blue"} textAlign={"center"}>
            <span>Other</span>
            <video width={"100%"} height={"100%"} ref={remoteVideoRef} />
          </Box>
        </Box>
        <Box gap={"xl"} display={"flex"}>
          <Box>
            <input
              type="text"
              value={remotePeerId ? remotePeerId : ""}
              onChange={(e) => setRemoteId(e.target.value)}
            />
            <button onClick={() => onInitCall()}>
              {isLoading ? "loading..." : "Call"}
            </button>
          </Box>
          <Box display={"flex"} gap={"1rem"}>
            {currentCall.call && !currentCall.isAnswered && (
              <span>{"Call is comming"}</span>
            )}
            <button
              onClick={async () => {
                await onAnswerCall();
              }}
            >
              {"Answer Call"}
            </button>
            <button
              onClick={async () => {
                await onMutedCall();
              }}
            >
              {"Mute Call"}
            </button>
            <button
              onClick={async () => {
                onCloseCall();
              }}
            >
              {"Stop Call"}
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
