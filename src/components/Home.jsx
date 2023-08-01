import React from "react";
import Navblack from "./Navblack";
import Fitfive from "./Fitfive";
import fitfivegreen from "../assets/image/png/fitfivegreen.png";
import { fitgreen } from "./common/help";
const Home = () => {
  return (
    <div>
      <Navblack
        bg_color="bg-black"
        text_color="text-black"
        text_change="All pages"
      />
      <Fitfive
        fitfiveimg={fitfivegreen}
        hadingtext="What we eat impacts our health and well-being on a fundamental level."
        fitfive={fitgreen}
      />
    </div>
  );
};

export default Home;
