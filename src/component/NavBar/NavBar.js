/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const handleClick = (section) => {
    console.log(`Navigating to ${section}`);
  };
  const menuItems = (
    <>
    <li>
          <Link to="home" smooth={true} duration={500} onClick={() => handleClick("home")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="service" smooth={true} duration={500}  onClick={() => handleClick("service")}>
            My Skill
          </Link>
        </li>
        <li>
          <Link to="what" smooth={true} duration={500}>
            What I Do
          </Link>
        </li>
        <li>
          <Link to="project" smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li>
          <Link to="education" smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li>
          <Link to="aboutMe" smooth={true} duration={500}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 mt-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        {menuItems}
      </ul>
        </div>
        <a className="btn btn-ghost normal-case text-3xl lg:block hidden">
          Arjun Chandra Das
        </a>
        <a className="btn btn-ghost normal-case text-3xl lg:hidden block">
          Arjun Das
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://drive.google.com/file/d/16w87JiOjwMywKjXyrCSTzg97lcjgQxHb/view?usp=sharing"
          
          rel="noopener"
          target="_blank"
          className="btn"
          
        >
          OPEN RESUME
        </a>
      </div>
    </div>
  );
};

export default NavBar;
