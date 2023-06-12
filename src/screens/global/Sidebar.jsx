import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Briefcase, File, Home, Inbox, List, MessageCircle, Send, User, Users } from "react-feather";

const Sidebar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("/");

  const handleMenuItemClick = (menuUrl) => {
    setActiveMenuItem(menuUrl);
  };

  return (
    <div className="flex">
      {/* BEGIN: Side Menu */}
      <nav className="side-nav">
        <a href="/" className="intro-x flex items-center pl-5 pt-4">
          <img alt="Midone Tailwind HTML Admin Template" className="w-6" src="dist/images/logo.svg" />
          <span className="hidden xl:block text-white text-lg ml-3">onthe<span className="font-medium"> table</span> </span>
        </a>
        <div className="side-nav__devider my-6"></div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={`side-menu ${activeMenuItem === "/" ? "side-menu--active" : ""}`}
              onClick={() => handleMenuItemClick("/")}
            >
              <div className="side-menu__icon"> <Home /> </div>
              <div className="side-menu__title"> Overview </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/personalProfile"
              className={`side-menu ${activeMenuItem === "/personalProfile" ? "side-menu--active" : ""}`}
              onClick={() => handleMenuItemClick("/personalProfile")}
            >
              <div className="side-menu__icon"><User /> </div>
              <div className="side-menu__title"> Personal Profile </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/companyProfile"
              className={`side-menu ${activeMenuItem === "/companyProfile" ? "side-menu--active" : ""}`}
              onClick={() => handleMenuItemClick("/companyProfile")}
            >
              <div className="side-menu__icon"> <Users /> </div>
              <div className="side-menu__title"> Company Profile </div>
            </NavLink>
          </li>
          <li className="side-nav__devider my-6"></li>
          <li>
            <NavLink
              to="/inbox"
              className={`side-menu ${activeMenuItem === "/inbox" ? "side-menu--active" : ""}`}
              onClick={() => handleMenuItemClick("/inbox")}
            >
              <div className="side-menu__icon"> <Inbox /> </div>
              <div className="side-menu__title"> Inbox </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="side-menu">
              <div className="side-menu__icon"> <Briefcase /> </div>
              <div className="side-menu__title"> Jobs </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/viewTalent"
              className={`side-menu ${activeMenuItem === "/viewTalent" ? "side-menu--active" : ""}`}
              onClick={() => handleMenuItemClick("/viewTalent")}
            >
              <div className="side-menu__icon"> <File /> </div>
              <div className="side-menu__title"> View Talent </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dataList"
              className={`side-menu ${activeMenuItem === "/dataList" ? "side-menu--active" : ""}`}
              onClick={() => handleMenuItemClick("/dataList")}
            >
              <div className="side-menu__icon"> <List /> </div>
              <div className="side-menu__title"> Data List </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="side-menu">
              <div className="side-menu__icon"> <Send /> </div>
              <div className="side-menu__title"> Recommend / Invite </div>
            </NavLink>
          </li>
          <li className="side-nav__devider my-6"></li>
          <li>
            <NavLink
              to="/chat"
              className={`side-menu ${activeMenuItem === "/chat" ? "side-menu--active" : ""}`}
              onClick={() => handleMenuItemClick("/chat")}
            >
              <div className="side-menu__icon"> <MessageCircle /> </div>
              <div className="side-menu__title"> Chat </div>
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* END: Side Menu */}
    </div>
  );
};

export default Sidebar;
