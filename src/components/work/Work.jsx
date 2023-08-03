import React from "react";
import Navblack from "../common/Navblack";
import Formsubmit from "../work/Formsubmit";
const Work = () => {
  return (
    <div>
      <Navblack
        bg_color="bg_green"
        text_color="text_green"
        text_change="Projects"
      />
      <Formsubmit />
    </div>
  );
};

export default Work;
