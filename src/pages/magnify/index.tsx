import type { NextPage } from "next";
import React from "react";

type IndexProps = {};
const Index: NextPage<IndexProps> = () => {
  const SLIDE_COUNT = 10;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div>
      <div
        style={{
          width: "50rem",
        }}
      ></div>
    </div>
  );
};

export default Index;
