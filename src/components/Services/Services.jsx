import React from 'react'
import "./Services.css"
import theme from "../../assets/theme.svg"
import serviceData from "../../../public/sevicesData"
import { FaArrowRight } from 'react-icons/fa'

const Services = () => {
  return (
    <>
    <div id='services' className="services">
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme} alt="" />
        </div>
        <div className="services-container">
            {serviceData.map((data , index)=>{
                return (
                    <div key={index} className="services-format">
                         <h3>{data.s_no}</h3>
                         <h2>{data.s_name}</h2>
                         <p>{data.s_desc}</p>
                         <div className="services-readmore">
                            <p>Read More</p>
                            <FaArrowRight/>    
                         </div>
                    </div>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default Services