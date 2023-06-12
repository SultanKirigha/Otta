import React from "react";
import { NavLink } from "react-router-dom";
import "../../App"
import { Briefcase, File, Home, Inbox, List, MessageCircle, Send, User, Users } from "react-feather";

const Sidebar = () => {
  return (
    <div className="flex">
      {/* BEGIN: Side Menu */}
      <nav className="side-nav">
        <NavLink to="/" className="intro-x flex items-center pl-5 pt-4">
          <img alt="Midone Tailwind HTML Admin Template" className="w-6" src="dist/images/logo.svg" />
          <span className="hidden xl:block text-white text-lg ml-3">onthe<span className="font-medium"> table</span> </span>
        </NavLink>
        <div className="side-nav__devider my-6"></div>
        <ul>
          <li>
            <NavLink to="/" activeClassName="side-menu--active" className="side-menu">
              <div className="side-menu__icon"> <Home /> </div>
              <div className="side-menu__title"> Overview </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/personalProfile" activeClassName="side-menu--active" className="side-menu">
              <div className="side-menu__icon"><User /> </div>
              <div className="side-menu__title"> Personal Profile </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/companyProfile" activeClassName="side-menu--active" className="side-menu">
              <div className="side-menu__icon"> <Users /> </div>
              <div className="side-menu__title"> Company Profile </div>
            </NavLink>
          </li>
          <li className="side-nav__devider my-6"></li>
          <li>
            <NavLink to="/inbox" activeClassName="side-menu--active" className="side-menu">
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
            <NavLink to="/viewTalent" activeClassName="side-menu--active" className="side-menu">
              <div className="side-menu__icon"> <File /> </div>
              <div className="side-menu__title"> View Talent </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dataList" activeClassName="side-menu--active" className="side-menu">
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
            <NavLink to="/chat" activeClassName="side-menu--active" className="side-menu">
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
