import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../assets/logo.png";
import menu_icon from '../assets/menu-icon.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const [mobileMenu, setMobileMenu]=useState(false);

  const toggleMenu = () =>{
mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }


  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu ? '': 'hide-mobile-menu'}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="Campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="Testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
      
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
      <img src={menu_icon} alt=""className="menu-icon" onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
