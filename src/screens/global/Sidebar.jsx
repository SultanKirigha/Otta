import React from "react";
import "../../../src";
import { Briefcase, File, Home, Inbox, List, MessageCircle, Send, User, Users } from "react-feather";
const Sidebar = () => {
    return (
    <div className="flex">
        {/* BEGIN: Side Menu */}
        <nav className="side-nav">
            <a href="" className="intro-x flex items-center pl-5 pt-4">
                <img alt="Midone Tailwind HTML Admin Template" className="w-6" src="dist/images/logo.svg"/>
                <span className="hidden xl:block text-white text-lg ml-3">onthe<span className="font-medium"> table</span> </span>
            </a>
            <div className="side-nav__devider my-6"></div>
            <ul>
                <li>
                    <a href="/" className="side-menu side-menu--active">
                        <div className="side-menu__icon"> <Home/> </div>
                        <div className="side-menu__title"> Overview </div>
                    </a>
                </li>
                <li>
                    <a href="/personalProfile" className="side-menu">
                        <div className="side-menu__icon"><User/> </div>
                        <div className="side-menu__title"> Personal Profile </div>
                    </a>
                </li>
                <li>
                    <a href="/companyProfile" className="side-menu">
                        <div className="side-menu__icon"> <Users/> </div>
                        <div className="side-menu__title"> Company Profile </div>
                    </a>
                </li>
                <li className="side-nav__devider my-6"></li>
                <li>
                    <a href="/inbox" className="side-menu">
                        <div className="side-menu__icon"> <Inbox/> </div>
                        <div className="side-menu__title"> Inbox </div>
                    </a>
                </li>
                <li>
                    <a href="#" className="side-menu">
                        <div className="side-menu__icon"> <Briefcase/> </div>
                        <div className="side-menu__title"> Jobs </div>
                    </a>
                </li>
                <li>
                    <a href="/viewTalent" className="side-menu">
                        <div className="side-menu__icon"> <File/> </div>
                        <div className="side-menu__title"> View Talent </div>
                    </a>
                </li>
                <li>
                    <a href="/dataList" className="side-menu">
                        <div className="side-menu__icon"> <List/> </div>
                        <div className="side-menu__title"> Data List </div>
                    </a>
                </li>
                <li>
                    <a href="#" className="side-menu">
                        <div className="side-menu__icon"> <Send/> </div>
                        <div className="side-menu__title"> Recommend / Invite </div>
                    </a>
                </li>
                <li className="side-nav__devider my-6"></li>
                <li>
                    <a href="/chat" className="side-menu">
                        <div className="side-menu__icon"> <MessageCircle/> </div>
                        <div className="side-menu__title"> Chat </div>
                    </a>
                </li>
            </ul>
        </nav>
        {/* END: Side Menu */}
    </div>
        )
}

export default Sidebar;