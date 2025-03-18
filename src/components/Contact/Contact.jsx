import React from "react";
import "./Contact.css";
import theme from "../../assets/theme.svg";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationDot, FaSquareInstagram } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "59e2998c-00f3-42df-9dea-44bbc87af862");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
     alert(res.message)
    }
  };
  
  return (
    <>
      <div id="contact" className="contact">
        <div className="contact-title">
          <h1>Get in touch</h1>
          <img src={theme} alt="" />
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's talk</h1>
            <div className="contact-details">
              <div className="contact-detail">
                <IoIosMail className="icons"/>
                <p><a href="https://mail.google.com/mail/u/0/#sent?compose=new">yashrajsinhdodiya888@gmail.com</a></p>
              
              </div>
              <div className="contact-detail">
                <IoCall className="icons"/>
                <p>9408888508</p>
              </div>
              <div className="contact-detail">
                <FaLocationDot className="icons"/>
                <p>Ahmedabad</p>
              </div>
            </div>
            <div className="contact-social">
              <h1>Find On Me</h1>
              <div className="contact-social-icons">
              <a href="https://github.com/Yashrajsinh88"><FaGithub className="icons" size={50} /></a>
              <a href="https://www.linkedin.com/in/yashrajsinh-dodiya-aa489b302/"><FaLinkedin className="icons" size={50}/></a>
              <a href="https://www.instagram.com/yashrajsinh_888_/"><FaSquareInstagram className="icons" size={50}/></a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your email" name="email" />
            <label htmlFor="">Write your message here</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Enter your message"
            ></textarea>
            <button type="submit" className="contact-submit">
              Submit now
            </button>
          </form>
          
        </div>
      </div>
    </>
  );
};

export default Contact;
