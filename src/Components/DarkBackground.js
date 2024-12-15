import React from "react";
import DarkVideo from "../Assets/CudeSection.mp4";
import { useEffect, useState } from "react";
import "../CSS_Code/DarkBackgroundCSS.css";
import LeftSideContent from "../Components/leftSideContent"

function DarkBackground() {

    const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Smoothly update position with delay
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

    return (
        <div className="video-container">
            {/* Background Video */}
            <video className="dark-video" loop muted autoPlay>
                <source src={DarkVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Content */}
            <div className="overlay-content">
                <LeftSideContent />
            </div>

            <div
        className={`custom-cursor ${isHovered ? "hovered" : ""}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <div
        className="content"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1>Hover over this area!</h1>
      </div>
        </div>
    );
}

export default DarkBackground;
