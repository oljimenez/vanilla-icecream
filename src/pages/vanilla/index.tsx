import type { NextPage } from "next";
import { Box, Button } from "components";

const Home: NextPage = () => {
  return (
    <Box
      itemSize={"100%"}
      fontSize={"lg"}
      color={"red"}
      display={"flex"}
      placeItems={"center"}
    >
      <Button
        variant={"primary"}
        css={{
          paddingLeft: "xl",
          fontSize: "xl",
        }}
      >
        Test
      </Button>
    </Box>
  );
};

export default Home;
