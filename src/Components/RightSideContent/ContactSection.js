import React from "react";
import "../../CSS_Code/ContactSectionCSS.css"
import { AiOutlineSwapRight } from "react-icons/ai";
import FormDetails from "../FormDetails";
import GoogleMap from "../GoogleMap";

function ContactSection() {
    return (
        <div className="ContactSectionDiv">
            <h2 className="HOne-Text"><span className="FirstAlphabetText">R</span>each me here!</h2>
            <hr className="HR-Tag"/>
            <div>
                <GoogleMap/>
                <div className="Contact-DetailsTextDiv">
                    <div className="ContectSectionDetails">
                        <div className="DetailsText"> <h4>PHONE...</h4> <span>+91-9896787236</span> </div>
                        <div className="DetailsText"> <h4>FREELANCE...</h4> <span>Available</span> </div>
                    </div>
                    <div className="ContectSectionDetails">
                        <div className="DetailsText"> <h4>ADDRESS...</h4> <span>Fatehabad,Haryana</span> </div>
                        <div className="DetailsText"> <h4>EMAIL...</h4> <span>goyalp3542@gmail.com</span> </div>
                    </div>
                </div>
            </div>

            <div className="Ping-Me-Div">
                <h2 className="HOne-Text pingone"><span className="FirstAlphabetText">P</span>ing me!</h2>
                <hr className="HR-Tag"/>
            </div>

            <FormDetails/>

        </div>
    );
}

export default ContactSection;
