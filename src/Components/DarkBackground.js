import React from "react";
import DarkVideo from "../Assets/ShowFall.mp4";
import { useEffect, useState } from "react";
import "../CSS_Code/DarkBackgroundCSS.css";
import LeftSideContent from "../Components/leftSideContent";
import AboutSectionContent from "./RightSideContent/AboutSection";

function DarkBackground() {
  return (
    <div className="video-container">


      {/* Background Video */}
      <video className="dark-video" loop muted autoPlay>
        <source src={DarkVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
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
