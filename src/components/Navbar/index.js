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
        <span className="nav__container__item">
          <Link to="#">
            <span className="profile-icon">
              <CgProfile />
            </span>
            Sign In
          </Link>
        </span>
        <span className="nav__container__item">
          <IoSettingsSharp />
        </span>
        <span className="nav__container__item">
          <FaBell />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
