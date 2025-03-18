import React, { useRef, useState } from "react";
import "./Navbar.css";
import underLine from "../../assets/theme.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const handleOpenMenu = () => {
    menuRef.current.style.right = "0";
  };

  const handleCloseMenu = () => {
    menuRef.current.style.right = "-300px";
  };
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="" className="logo" />
        <FaBarsStaggered
          className="nav-mob-open"
          onClick={handleOpenMenu}
          size={25}
        />
        <ul ref={menuRef} className="nav-menu">
          <IoClose
            className="nav-mob-close"
            onClick={handleCloseMenu}
            size={30}
          />
          <li>
            <AnchorLink className="anchor-link" href="#home">
              <p onClick={() => setMenu("home")}>Home</p>
            </AnchorLink>
            {menu === "home" ? <img src={underLine} alt="" width={35} /> : ""}
          </li>

          <li>
            <AnchorLink className="anchor-link" offset={50} href="#about">
              <p onClick={() => setMenu("about")}>About Me</p>
            </AnchorLink>
            {menu === "about" ? <img src={underLine} alt="" width={35} /> : ""}
          </li>

          <li>
            <AnchorLink className="anchor-link" offset={50} href="#skills">
              <p onClick={() => setMenu("skills")}>Skills</p>
            </AnchorLink>
            {menu === "skills" ? <img src={underLine} alt="" width={35} /> : ""}
          </li>

          <li>
            <AnchorLink className="anchor-link" offset={50} href="#services">
              <p onClick={() => setMenu("services")}>Services</p>
            </AnchorLink>
            {menu === "services" ? (
              <img src={underLine} alt="" width={35} />
            ) : (
              ""
            )}
          </li>

          <li>
            <AnchorLink className="anchor-link" offset={50} href="#work">
              <p onClick={() => setMenu("work")}>Portfolio</p>
            </AnchorLink>
            {menu === "work" ? <img src={underLine} alt="" width={35} /> : ""}
          </li>

          <li>
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              <p onClick={() => setMenu("contact")}>Contact</p>
            </AnchorLink>
            {menu === "contact" ? (
              <img src={underLine} alt="" width={35} />
            ) : (
              ""
            )}
          </li>
        </ul>
        <div className="nav-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
