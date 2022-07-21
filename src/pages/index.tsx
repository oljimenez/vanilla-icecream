import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Box } from "components/box";

const Home: NextPage = () => {
  const router = useRouter();

  async function goToWebRTC() {
    await router.push("/webrtc");
  }

  async function goToVanillaExtract() {
    await router.push("/vanilla");
  }

  async function goToMagnify() {
    await router.push("/magnify");
  }

  async function goToInternalization() {
    await router.push("/internalization");
  }

  return (
    <Box
      height={"100%"}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <button onClick={goToWebRTC}>WebRTC</button>
      <button onClick={goToVanillaExtract}>Vanilla Extract</button>
      <button onClick={goToMagnify}>Magnify</button>
      <button onClick={goToInternalization}>Internalization</button>
    </Box>
  );
};

export default Home;
