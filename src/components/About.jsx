import React from "react";
import Navblack from "./Navblack";
import Fitfive from "./Fitfive";
import { fitred } from "./common/help";
import fitfivegreen from "../assets/image/png/fitfivered.png";
const About = () => {
  return (
    <div>
      <Navblack
        bg_color="bg-danger"
        text_color="text-danger"
        text_change="All pages"
      >
        <li className="text-white">Work</li>
      </Navblack>
      <Fitfive
        fitfiveimg={fitfivegreen}
        hadingtext="The body is a fascinatingly complex machine composed of different cells, each with its particular set of functions mediated by a centralized system, which is the brain. All cells interact to maintain a controlled and stable environment within the body. Any deviation from that balanced state will trigger bodily reactions to restore equilibrium in the short term otherwise the body will find a way to compensate for its ineffective restoration, leading ultimately to dysfunction, disease and undue tensions."
        fitfive={fitred}
        hoverborder="br_hoverred"
      >
        <div className="text-center">
          <button className=" border-0 btn_gettouch text-white">
            Get in touch
          </button>
        </div>
      </Fitfive>
    </div>
  );
};

export default About;
