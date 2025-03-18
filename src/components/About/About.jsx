import React from 'react'
import "./About.css"
import theme from "../../assets/theme.svg"
import profile_img from "../../assets/profileImg.png"

const About = () => {

 const aboutdetails= [
  {
    title: "User Experience Design - UI/UX",
    description: "Designing user-friendly interfaces that combine creativity with functionality."
  },
  {
    title: "Web & User Interface Development",
    description: "Creating responsive and visually compelling websites for seamless user engagement."
  },
  {
    title: "Frontend Development - Responsive Design",
    description: "Transforming concepts into scalable, cross-device web experiences."
  }
]

  return (
    <>
    <div id='about' className="about">
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt=""/>
            </div>
            <div className="about-right">
              <div>
                <h2>Designing meaningful experiences through <br /> creativity and innovation.</h2>
                <button className='main-skill-btn'>Main Skill</button>
                </div>
                <div className="about-details">
                  {aboutdetails.map((data , index)=>{
                    return(
                      <div key={index} className="main-details">
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                      </div>
                    )
                  })}

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About