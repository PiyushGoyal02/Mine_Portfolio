import React, { useState } from "react";
import "../CSS_Code/FormDetailsCSS.css";
import { AiOutlineSwapRight } from "react-icons/ai";

function FormDetails() {
  const [formData, setFormData] = useState({
    fullName: '',
    userEmail: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Ensure the 'name' attribute is defined
    if (name) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData, "FormData");

    // You can enable API call logic here
    /*
    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ fullName: '', userEmail: '', message: '' });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error while sending message:", error);
      alert("An error occurred. Please try again later.");
    }
    */
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              required
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="userEmail">Email Address</label>
            <input
              required
              type="email"
              id="userEmail"
              name="userEmail" 
              placeholder=""
              value={formData.userEmail}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            required
            id="message"
            name="message" 
            placeholder=""
            value={formData.message}
            onChange={handleChange}
            className="TextArea-Text"
          ></textarea>
        </div>

        <div className="SendButton-RightIcon">
          <button type="submit" className="send-button">
            SEND MESSAGE
          </button>
          <div>
            <AiOutlineSwapRight />
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormDetails;
