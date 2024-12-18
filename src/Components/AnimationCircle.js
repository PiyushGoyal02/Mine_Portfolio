import React from "react";
import HTML from "../Assets/html.png";
import CSS from "../Assets/css-3.png";
import JS from "../Assets/js.png";
import NodeJs from "../Assets/nodejs.png";
import MongoDb from "../Assets/mongodb.png";
import Docker from "../Assets/docker.png";
import Figma from "../Assets/figma.png";
import ReactJs from "../Assets/react.png";
import AWS from "../Assets/AWS.svg";
import Github from "../Assets/github.png";
import "../CSS_Code/AnimationCircleCSS.css";

function AnimationCircle() {
  return (
    <div className="container">
      {/* Center Circle */}
      <div className="center-circle">MS</div>

      {/* Orbiting Icons */}
      <div className="orbit orbit-1">
        <img src={NodeJs} className="icon nodejs" alt="NodeJs" />
        <img src={HTML} className="icon html" alt="HTML" />
        <img src={Docker} className="icon docker" alt="Docker" />
        <img src={Figma} className="icon figma" alt="Figma" />
        <img src={AWS} className="icon aws" alt="AWS" />
        <img src={Github} className="icon github" alt="Github" />
      </div>

      <div className="orbit orbit-2">
        <img src={ReactJs} className="icon react" alt="ReactJs" />
        <img src={JS} className="icon javascript" alt="JavaScript" />
        <img src={MongoDb} className="icon mongodb" alt="MongoDb" />
        <img src={CSS} className="icon css" alt="CSS" />
      </div>
    </div>
  );
}

export default AnimationCircle;
