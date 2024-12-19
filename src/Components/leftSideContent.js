import "../CSS_Code/leftSideContentCSS.css";
import { useEffect, useState } from "react";
import BackgroundImage from "../Assets/Walpaper.jpg";
import ProfileImage from "../Assets/PiyushGoyalImage.jpeg";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { FaDownload } from "react-icons/fa"; // For download icons
import { FaArrowRight } from "react-icons/fa"; // For arrow icon
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { MdOutlinePerson4 } from "react-icons/md";
import { LuSquareMenu } from "react-icons/lu";
import { FaPaperPlane } from "react-icons/fa";

function LeftSideContent() {

    // Running Text
    const [text] = useTypewriter({
        words: ['Full Stack Developer', 'Freelancer', 'UI/UX Designer'],
        loop:{},
        delaySpeed: 2000, // Delay between loops
        typeSpeed: 100, // Speed of typing
        deleteSpeed: 50, // Speed of deleting
    });

    return (
        <div className="LeftSideContentDiv">
            <div className="Fade-Green-Box"></div>

            <div className="Three-Icons-Div">
                <MdOutlinePerson4 className="Icon"/>
                <LuSquareMenu className="Icon"/>
                <FaPaperPlane className="Icon"/>
            </div>

            <div className="background-Image-Hills">
                <img src={BackgroundImage} className="Hills-Image" />
            </div>

            <div className="ContentBox">
                <div>
                    <div className="Fade-Circle"></div>
                    <img src={ProfileImage} className="ProfileImage" />

                    <h1 className="PiyushGoyal-Text">Piyush Goyal</h1>

                    <div className="Running-Text-Div">
                        {/* <h1>I'm</h1> */}
                        <span className="Running-Text">
                            {text}
                        </span>

                        <span className="Cursor-Color">
                            <Cursor cursorStyle='|'/>
                        </span>
                    </div>

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
                        <div className="Buttonn">
                            CONTACT ME <FaArrowRight className="button-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSideContent;
