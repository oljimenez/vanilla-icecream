import type { NextPage } from "next";
import Link from "next/link";
import { Flex } from "components/flex";

const Home: NextPage = () => (
  <Flex itemSize={"full"} placeItems={"center"} gap={"lg"}>
    <Link href={{ pathname: "/vanilla" }}>
      <button>Vanilla Extract</button>
    </Link>
  </Flex>
);

export default Home;
