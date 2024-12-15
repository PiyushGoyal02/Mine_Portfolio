import "../CSS_Code/leftSideContentCSS.css";
import { useEffect, useState } from "react";
import BackgroundImage from "../Assets/Backgroud-image.jpg";
import ProfileImage from "../Assets/ProfileImage.jpg";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { FaDownload } from "react-icons/fa"; // For download icons
import { FaArrowRight } from "react-icons/fa"; // For arrow icon


const sentences = [
  "FreeLancing",
  "Web Developers",
  "Full Stack Developers",
  "UI/UX Designer",
];

function LeftSideContent() {

    return (
        <div className="LeftSideContentDiv">
            <div className="Fade-Green-Box"></div>
            <div className="background-Image-Hills">
                <img src={BackgroundImage} className="Hills-Image" />
            </div>

            <div className="ContentBox">
                <div>
                    <div className="Fade-Circle"></div>
                    <img src={ProfileImage} className="ProfileImage" />

                    <h1 className="PiyushGoyal-Text">Piyush Goyal</h1>

                     {/* <div className="running-text-container">
                        <div className="running-text">
                            {sentences[currentIndex]}
                        </div>
                    </div> */}

                    <p className="WebDeveloperText">Web Developer</p>

                    {/* Social Media Icons */}
                    <div className="All-Icons">
                        <FaLinkedinIn className="linkdin" />
                        <FaFacebook className="facebook" />
                        <FaGithub className="github" />
                        <FaStackOverflow className="stackflow" />
                    </div>

                    {/* Button Section */}
                    <div className="Button-Container">
                        <div className="Button">
                            RESUME <FaDownload className="button-icon" />
                        </div>
                        <div className="Button">
                            PORTFOLIO <FaDownload className="button-icon" />
                        </div>
                        <div className="Button">
                            CONTACT ME <FaArrowRight className="button-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSideContent;
