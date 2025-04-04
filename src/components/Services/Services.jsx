import React from "react";
import "./Services.css";
import theme from "../../assets/theme.svg";
import serviceData from "../../../public/sevicesData";

const Services = () => {
  return (
    <>
      <div id="services" className="services">
        <div className="services-title">
          <h1>My Services</h1>
          <img src={theme} alt="" />
        </div>
        <di v className="services-container">
          {serviceData.map((data, index) => {
            return (
              <div key={index} className="services-format">
                <h3>{data.s_no}</h3>
                <h2>{data.s_name}</h2>
                <p>{data.s_desc}</p>
              </div>
            );
          })}
        </di>
      </div>
    </>
  );
};

export default Services;
