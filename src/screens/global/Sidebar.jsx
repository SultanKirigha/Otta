import React from "react";
import "../../../src";
import { Briefcase, File, Home, Inbox, List, MessageCircle, Send, User, Users } from "react-feather";
const Sidebar = () => {
    return (
    <div class="flex">
        {/* BEGIN: Side Menu */}
        <nav class="side-nav">
            <a href="" class="intro-x flex items-center pl-5 pt-4">
                <img alt="Midone Tailwind HTML Admin Template" class="w-6" src="dist/images/logo.svg"/>
                <span class="hidden xl:block text-white text-lg ml-3">onthe<span class="font-medium"> table</span> </span>
            </a>
            <div class="side-nav__devider my-6"></div>
            <ul>
                <li>
                    <a href="index.html" class="side-menu side-menu--active">
                        <div class="side-menu__icon"> <Home/> </div>
                        <div class="side-menu__title"> Overview </div>
                    </a>
                </li>
                <li>
                    <a href="personal-profile.html" class="side-menu">
                        <div class="side-menu__icon"><User/> </div>
                        <div class="side-menu__title"> Personal Profile </div>
                    </a>
                </li>
                <li>
                    <a href="company-profile.html" class="side-menu">
                        <div class="side-menu__icon"> <Users/> </div>
                        <div class="side-menu__title"> Company Profile </div>
                    </a>
                </li>
                <li class="side-nav__devider my-6"></li>
                <li>
                    <a href="inbox.html" class="side-menu">
                        <div class="side-menu__icon"> <Inbox/> </div>
                        <div class="side-menu__title"> Inbox </div>
                    </a>
                </li>
                <li>
                    <a href="#" class="side-menu">
                        <div class="side-menu__icon"> <Briefcase/> </div>
                        <div class="side-menu__title"> Jobs </div>
                    </a>
                </li>
                <li>
                    <a href="view-talent.html" class="side-menu">
                        <div class="side-menu__icon"> <File/> </div>
                        <div class="side-menu__title"> View Talent </div>
                    </a>
                </li>
                <li>
                    <a href="data-list.html" class="side-menu">
                        <div class="side-menu__icon"> <List/> </div>
                        <div class="side-menu__title"> Data List </div>
                    </a>
                </li>
                <li>
                    <a href="#" class="side-menu">
                        <div class="side-menu__icon"> <Send/> </div>
                        <div class="side-menu__title"> Recommend / Invite </div>
                    </a>
                </li>
                <li class="side-nav__devider my-6"></li>
                <li>
                    <a href="chat.html" class="side-menu">
                        <div class="side-menu__icon"> <MessageCircle/> </div>
                        <div class="side-menu__title"> Chat </div>
                    </a>
                </li>
            </ul>
        </nav>
        {/* END: Side Menu */}
    </div>
        )
}

export default Sidebar;