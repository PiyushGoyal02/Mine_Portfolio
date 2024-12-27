import React from "react";
import { MdBrightness1 } from "react-icons/md";
import "../../CSS_Code/HazelHealthCSS.css"
import { TbArrowRightDashed } from "react-icons/tb";

function HazelHealth (){
    return (
        <div className="BubbleGame-Section-Div">

            <div>
                <h2 className="HOne-Text"><span className="FirstAlphabetText">H</span>azel Health</h2>
                <hr className="HR-Tag"/>
            </div>

            <div className="Time-Duration-Section">
                <h5>Time Duration :-</h5>
                <span>20 Days</span>
            </div>

            <div className="Bullets-Parent-Div">

                <div className="Bullets-Div">
                    <span> <MdBrightness1 /> </span>
                    <h4>Hazel Health is a dynamic and secure platform designed for streamlined management and communication across five user roles: Students, Parents, Providers, Admin, and Coordinators. Developed using React.js, Express.js, and MongoDB, it ensures smooth functionality and data integrity for every account type.</h4>
                </div>
            </div>

            <div>
                <h4 className="Key-Features">Key Features:</h4>

                <div className="prokect-Details-Points">
                    <span><TbArrowRightDashed className='icon-RightArrow'/></span>
                    <span className="Text"> <span className="Point-Hading">Student's Portal :-</span> Showcases student details such as Name, Email, Grade, School Name, and integrates a personalized Google Calendar. All information is dynamically fetched from backend APIs and displayed on the frontend.</span>
                </div>

                <div className="prokect-Details-Points">
                    <span><TbArrowRightDashed className='icon-RightArrow'/></span>
                    <span className="Text"> <span className="Point-Hading">Parent's Portal :-</span> Provides parent profiles, linked student information, and the Parent's Calendar, with all data securely fetched through backend APIs.</span>
                </div>

                <div className="prokect-Details-Points">
                    <span><TbArrowRightDashed className='icon-RightArrow'/></span>
                    <span className="Text"> <span className="Point-Hading">Provider's Portal :-</span> Displays provider-specific details and their calendars, retrieved via backend APIs to ensure efficient coordination.</span>
                </div>

                <div className="prokect-Details-Points">
                    <span><TbArrowRightDashed className='icon-RightArrow'/></span>
                    <span className="Text"> <span className="Point-Hading">Admin Portal :-</span> Offers tools for admins to manage student appointments, update user details, optimize/reset schedules, and maintain complete operational control.</span>
                </div>

                <div className="prokect-Details-Points">
                    <span><TbArrowRightDashed className='icon-RightArrow'/></span>
                    <span className="Text"> <span className="Point-Hading">Coordinator Portal :-</span> Provides a centralized Student List, enabling coordinators to set communication preferences, schedule appointments, and efficiently manage student interactions.</span>
                </div>
            </div>
        </div>
    )
}

export default HazelHealth;