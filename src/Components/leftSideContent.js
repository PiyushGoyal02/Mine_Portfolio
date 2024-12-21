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
                        <a href="www.linkedin.com/in/piyush-goyal-570588235" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="linkdin"/>
                        </a>
                        <a href="https://www.facebook.com/piyush.goyal.52687" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="facebook" />
                        </a>
                        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="github" />
                        </a>
                        <a href="https://stackoverflow.com/users/23054479/piyush-goyal" target="_blank" rel="noopener noreferrer">
                            <FaStackOverflow className="stackflow" />
                        </a>
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
