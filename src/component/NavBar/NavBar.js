import React from 'react';
import { Link } from 'react-scroll';
// import Resume from "../../image/Arjun React Dev.pdf"

const NavBar = () => {

  

    return (
        <div className="navbar bg-base-100 mt-3">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li ><Link to="section1" smooth={true}><a href="#section1" >My Skill</a></Link></li>
      <li><a>Project</a></li>
      <li><a>About Me</a></li>
      <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-3xl lg:block hidden">Arjun Chandra Das</a>
    <a className="btn btn-ghost normal-case text-3xl lg:hidden block">Arjun Das</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>My Skill</a></li>
      <li><a>Project</a></li>
      <li><a>About Me</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href="https://drive.google.com/file/d/19ApryRHLmbhsGOuKyMDSACNa8KQkClN5/view?usp=sharing" target='_blank' className="btn">OPEN RESUME</a>
  </div>
</div>
    );
};

export default NavBar;