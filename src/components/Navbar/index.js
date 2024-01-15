import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="input">
          <span className="search">
            <FaSearch />
          </span>
          <input type="text" placeholder="Type here..." />
        </div>
        <span>
          <Link to="/">
            <CgProfile />
            Sign In
          </Link>
        </span>
        <span>
          <IoSettingsSharp />
        </span>
        <span>
          <FaBell />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
