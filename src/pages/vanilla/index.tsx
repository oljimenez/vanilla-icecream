import type { NextPage } from "next";
import { Flex } from "components/flex";
import React from "react";
import { createComponent } from "theme/utils/createComponent";

const AvatarImage = createComponent("img");

const Home: NextPage = () => {
  return (
    <Flex
      itemSize={"fullViewport"}
      placeItems={"center"}
      color={"red"}
      gap={"lg"}
    >
      Avatar
    </Flex>
  );
};

export default Home;
