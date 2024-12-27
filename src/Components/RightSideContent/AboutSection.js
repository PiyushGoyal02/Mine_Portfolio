import React from "react";
import "../../CSS_Code/AboutSectionContentCSS.css"
import AnimationCircle from "../AnimationCircle";

function AboutSectionContent (){
    return (
        <div>
            <div className="AboutSectionSecondDiv">
                <h2 className="HOne-Text"><span className="FirstAlphabetText">A</span>bout</h2>
                <hr className="HR-Tag"/>

                <div>
                    <p className="AboutUs-Text"> <span className="Hello-Piyush-Line">Hello! I’m Piyush Goyal, a Full Stack Developer from India.</span> <br/>
                        I specialize in React.js, Node.js, Express.js, MongoDB, and UI/UX design using Figma, crafting seamless and visually appealing web solutions. With 6 months of professional experience at a USA-based company, I’ve honed my skills in building eco-friendly and user-friendly websites.
                        Passionate about innovation, I enjoy exploring new tools and solving challenges with creative solutions. Let’s build something amazing together!  
                    </p>
                    <div className="HFourTag-Span-Div">
                        <div className="HFourTag-SpanTag"> <h4 className="HFour-Text">AGE...</h4> <span className="SpanTag-Text">22</span> </div>
                        <div className="HFourTag-SpanTag"> <h className="HFour-Text">COMPANY...</h> <span className="SpanTag-Text">Healee</span> </div>
                    </div>
                    <div className="HFourTag-Span-Div">
                        <div className="HFourTag-SpanTag"> <h4 className="HFour-Text">FREELANCE...</h4> <span className="SpanTag-Text">Available</span> </div>
                        <div className="HFourTag-SpanTag"> <h4 className="HFour-Text">ADDRESS...</h4> <span className="SpanTag-Text">Fatehabad,Haryana</span> </div>
                    </div>
                </div>

                <div className="Skill-Div">
                    <h2 className="HOne-Text"><span className="FirstAlphabetText">S</span>kill</h2>
                    <hr className="HR-Tag"/>
                </div>

                <AnimationCircle/>
            </div>

        </div>
    )
}

export default AboutSectionContent