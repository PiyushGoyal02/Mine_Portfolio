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
                        I have expertise in both back-end and front-end development, crafting seamless web experiences. My skill set includes React.js, Node.js, Express.js, MongoDB, and UI/UX design using Figma. <br/>
                        I bring 6 months of professional experience with a USA-based company, where I contributed to developing innovative and user-friendly web solutions. I am passionate about delivering top-notch results and specialize in designing, building, and maintaining eco-friendly and visually appealing websites. <br/> 
                        When I’m not coding, I enjoy exploring new tools and technologies to further enhance my skills. I am always ready to embrace new challenges and find creative solutions to tackle them.  
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