import React from "react";
import "../CSS_Code/FormDetailsCSS.css"
import { AiOutlineSwapRight } from "react-icons/ai";

function FormDetails (){
    return (
        <div className="form-container">
            <form>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input required type="text" id="fullName" placeholder="" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input required type="email" id="email" placeholder="" />
                    </div>

                </div>

                <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea required id="message" placeholder=""></textarea>
                </div>

                <div className="SendButton-RightIcon">
                    <button type="submit" className="send-button">SEND MESSAGE </button>
                    <div><AiOutlineSwapRight /></div>
                </div>

            </form>
        </div>
    )
}

export default FormDetails;