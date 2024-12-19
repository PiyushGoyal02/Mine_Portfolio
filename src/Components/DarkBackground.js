import React from "react";
import DarkVideo from "../Assets/WaterBubble.mp4";
import { useEffect, useState } from "react";
import "../CSS_Code/DarkBackgroundCSS.css";
import LeftSideContent from "../Components/leftSideContent";
import AboutSectionContent from "./RightSideContent/AboutSection";
import { MdOutlinePerson4 } from "react-icons/md";
import { LuSquareMenu } from "react-icons/lu";
import { FaPaperPlane } from "react-icons/fa";

function DarkBackground() {
  return (
    <div className="video-container">


      {/* Background Video */}
      <video className="dark-video" loop muted autoPlay>
        <source src={DarkVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* <div className="Three-Icons-Div">
        <MdOutlinePerson4 />
        <LuSquareMenu/>
        <FaPaperPlane/>
      </div> */}

      {/* Left And Right Box Content */}
      <div className="LeftAndRightBoxContent">
        <div>
          <LeftSideContent />
        </div>

        <div className="RightSideContent">
          <AboutSectionContent />
        </div>
      </div>
    </div>
  );
}

export default DarkBackground;
