import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Box } from "components/box";

const Home: NextPage = () => {
  const router = useRouter();

  async function goToWebRTC() {
    await router.push("/webrtc");
  }
  return (
    <Box
      width={"90vw"}
      height={"90vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <button onClick={goToWebRTC}>WebRTC</button>
    </Box>
  );
};

export default Home;
