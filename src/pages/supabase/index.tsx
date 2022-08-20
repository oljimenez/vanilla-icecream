import React from "react";
import type { NextPage } from "next";
import { Flex } from "components/flex";
import { useQuery } from "@tanstack/react-query";
import { supabaseGet } from "hooks/supabase/supabaseGet";

const Index: NextPage = () => {
  const { data: realtimeData } = useQuery(
    ["room_profiles"],
    () => supabaseGet("room_profiles", "*"),
    {
      onError: (error: TypeError) => {
        console.log(error.message);
      },
    }
  );

  console.log({ realtimeData });

  return <Flex itemSize={"full"} placeItems={"center"} gap={"lg"}></Flex>;
};

export default Index;
