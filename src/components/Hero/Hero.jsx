import React from 'react'
import "./Hero.css"
import profile from "../../assets/profileImg.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import passwordsize from "../../assets/passwordsizeprofile.png";


const Hero = () => {
  return (
    <>
    <div id='home' className="hero">
        <img src={passwordsize} alt=""/>
        <h1><span>i,m Yashrajsinh Dodiya</span>, Fullstack Developer based in INDIA.</h1>
        <p>
        Transforming ideas into interactive digital experiences with a blend of creativity and precision. Crafting visually stunning and seamless interfaces that captivate users at every click.
        </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
            <button className="hero-resume">
              <a href="../../assets/resume.pdf" download={"../../assets/resume.pdf"}>My resume</a>
            </button>
        </div>
    </div>
    </>
  )
}

export default Hero