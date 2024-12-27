import React from "react";
import { MdBrightness1 } from "react-icons/md";


function CarePlan (){
    return (
        <div className="BubbleGame-Section-Div">

             <div>
                <h2 className="HOne-Text"><span className="FirstAlphabetText">C</span>are Plan</h2>
                <hr className="HR-Tag"/>
            </div>

            <div className="Time-Duration-Section">
                <h5>Time Duration :-</h5>
                <span>2 Months</span>
            </div>

            <div className="Bullets-Parent-Div">

                <div className="Bullets-Div">
                    <span> <MdBrightness1 /> </span>
                    <h4>I have created a Bubble Game where bubbles contain random numbers. The game revolves around three main elements: Score, Time, and Hit Number. A Hit Number appears in a box, and the player must find and click the bubble containing the same number. For every correct match, the player earns 10 points, while clicking on a wrong bubble awards no points. The goal is to score as many points as possible within the given time limit. At the end of the game, the player with the highest score is declared the winner.</h4>
                </div>

            </div>
        </div>
    )
}

export default CarePlan;