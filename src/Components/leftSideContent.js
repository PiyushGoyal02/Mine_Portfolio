import "../CSS_Code/leftSideContentCSS.css";
import { useEffect, useState } from "react";
import BackgroundImage from "../Assets/Walpaper.jpg";
import ProfileImage from "../Assets/PiyushGoyalImage.jpeg";
import { FaLinkedinIn, FaFacebook, FaGithub, FaStackOverflow, FaDownload, FaArrowRight } from "react-icons/fa"; // Importing icons
import { useTypewriter, Cursor } from "react-simple-typewriter";
import PiyushResume from "../Assets/Piyush-Goyal-Resume.pdf"; // Ensure this file path is correct

function LeftSideContent() {
    // Running Text
    const [text] = useTypewriter({
        words: ["Full Stack Developer", "Freelancer", "UI/UX Designer"],
        loop: {}, // Infinite loop
        delaySpeed: 2000, // Delay between loops
        typeSpeed: 100, // Speed of typing
        deleteSpeed: 50, // Speed of deleting
    });

    // After Click button Download My Resume
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = PiyushResume; // Use the imported PDF file directly
        link.download = "Piyush_Goyal_Resume.pdf"; // Name of the downloaded file
        document.body.appendChild(link); // Append link to the document
        link.click(); // Trigger the click event
        document.body.removeChild(link); // Remove the link after download
    };

    // After Button Click Send Mail in my Email Id
    const handleEmailClick = () => {
        window.location.href = "mailto:goyalp3542@gmail.com";
    };

    return (
        <div className="LeftSideContentDiv">
            <div className="Fade-Green-Box"></div>

            <div className="background-Image-Hills">
                <img src={BackgroundImage} alt="Background Hills" className="Hills-Image" />
            </div>

            <div className="ContentBox">
                <div>
                    <div className="Fade-Circle"></div>
                    <img src={ProfileImage} alt="Profile" className="ProfileImage" />

                    <h1 className="PiyushGoyal-Text">Piyush Goyal</h1>

                    <div className="Running-Text-Div">
                        <span className="Running-Text">{text}</span>
                        <span className="Cursor-Color">
                            <Cursor cursorStyle="|" />
                        </span>
                    </div>

                    {/* Social Media Icons */}
                    <div className="All-Icons">
                        <button className="SocialMedia-Icons">
                            <a href="https://www.linkedin.com/in/piyush-goyal-570588235" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className="linkdin" />
                            </a>
                        </button>

                        <button className="SocialMedia-Icons">
                            <a href="https://www.facebook.com/piyush.goyal.52687" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="facebook" />
                            </a>
                        </button>

                        <button className="SocialMedia-Icons">
                            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="github" />
                            </a>
                        </button>

                        <button className="SocialMedia-Icons">
                            <a href="https://stackoverflow.com/users/23054479/piyush-goyal" target="_blank" rel="noopener noreferrer">
                                <FaStackOverflow className="stackflow" />
                            </a>
                        </button>
                        
                    </div>

                    {/* Button Section */}
                    <div className="Button-Container">
                        <button className="Button div">
                            <div onClick={handleDownload} className="ButtonSecondDiv">
                                <p>RESUME</p> <FaDownload className="button-icon" />
                            </div>
                        </button>
                        <button className="Button div">
                            <div onClick={handleDownload} className="ButtonSecondDiv">
                                <p>PORTFOLIO</p> <FaDownload className="button-icon" />
                            </div>
                        </button>
                        <button className="Buttonn div">
                            <div onClick={handleEmailClick} className="ButtonSecondDiv">
                                <p>CONTACT ME</p> <FaArrowRight className="button-icon" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSideContent;
