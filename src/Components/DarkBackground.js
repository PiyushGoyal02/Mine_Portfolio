import React, { useState } from "react";
import DarkVideo from "../Assets/WaterBubble.mp4";
import "../CSS_Code/DarkBackgroundCSS.css";
import LeftSideContent from "../Components/leftSideContent";
import AboutSectionContent from "./RightSideContent/AboutSection";
import ProjectSection from "../Components/RightSideContent/ProjectSection";
import ContactSection from "../Components/RightSideContent/ContactSection";
import { MdOutlinePerson4 } from "react-icons/md";
import { LuSquareMenu } from "react-icons/lu";
import { FaPaperPlane } from "react-icons/fa";

function DarkBackground() {
  const [selectedComponent, setSelectedComponent] = useState("about");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "about":
        return <AboutSectionContent />;
      case "projects":
        return <ProjectSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <AboutSectionContent />;
    }
  };

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
        <div className="RightSideContent">{renderComponent()}</div>
      </div>

      {/* Icon Section */}
      <div className="Three-Icons-Div">
        <button
          className="IconsButtons"
          onClick={() => setSelectedComponent("about")}
        >
          <MdOutlinePerson4 className="Icon" />
          <span className="custom-tooltipAbout">ABOUT</span>
        </button>
        <button
          className="IconsButtons"
          onClick={() => setSelectedComponent("projects")}
        >
          <LuSquareMenu className="Icon" />
          <span className="custom-tooltipProject">PROJECT</span>
        </button>
        <button
          className="IconsButtons"
          onClick={() => setSelectedComponent("contact")}
        >
          <FaPaperPlane className="Icon" />
          <span className="custom-tooltipContact">CONTACT</span>
        </button>
      </div>
    </div>
  );
}

export default DarkBackground;
