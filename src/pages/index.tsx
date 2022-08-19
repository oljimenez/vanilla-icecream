import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Box } from "components/box";
import Link from "next/link";
import { Flex } from "components/flex";

const Home: NextPage = () => {
  const router = useRouter();

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
    <Flex itemSize={"full"} placeItems={"center"} gap={"lg"}>
      <Link href={{ pathname: "/vanilla" }}>
        <button>Vanilla Extract</button>
      </Link>
      <Link href={{ pathname: "/supabase" }}>
        <button>Supabase</button>
      </Link>
    </Flex>
  );
};

export default Home;
