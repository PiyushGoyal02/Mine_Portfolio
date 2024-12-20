// import React, { useState } from "react";
import DarkVideo from "../Assets/WaterBubble.mp4";
import "../CSS_Code/DarkBackgroundCSS.css";
import LeftSideContent from "../Components/leftSideContent";
import AboutSectionContent from "./RightSideContent/AboutSection";
import ProjectSection from "../Components/RightSideContent/ProjectSection";
import ContactSection from "../Components/RightSideContent/ContactSection";


function DarkBackground() {

  return (
    <div className="video-container">
      {/* Background Video */}
      <video className="dark-video" loop muted autoPlay>
        <source src={DarkVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Area */}
      <div className="LeftAndRightBoxContent">
        <div>
          <LeftSideContent />
        </div>

        {/* Right-Side Content Rendering */}
        <div className="RightSideContent">
          {/* <AboutSectionContent />
          <ProjectSection /> */}
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default DarkBackground;
