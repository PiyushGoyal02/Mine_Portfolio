import React from "react";
import "../../CSS_Code/ProjectSectionCSS.css"
import BubbleGame from "../ProjectsBio/BubbleGame";
import CarePlan from "../ProjectsBio/CarePlan";
import HazelHealth from "../ProjectsBio/HazelHealth";

function ProjectSection(){
    return (
        <div className="Project-Main-Div">
            
            <BubbleGame/>
            <CarePlan/>
            <HazelHealth/>

            
        </div>
    )
}

export default ProjectSection