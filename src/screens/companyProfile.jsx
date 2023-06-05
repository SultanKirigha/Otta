import React from "react";
import {Activity, BarChart, Bell, Box, Briefcase, ChevronRight, ChevronsLeft, ChevronsRight, CreditCard, Edit, Eye, FileText, HelpCircle, Home, Inbox, List, Lock, Mail, MapPin, MessageCircle, Monitor, MoreHorizontal, PhoneCall, Pocket, Search, Send, ToggleRight, Trash2, User, UserPlus, Users, X, XCircle, Star } from "react-feather";
 const CompanyProfile = () => {
return (
    <div>
    <div className="mobile-menu md:hidden">
        <div className="mobile-menu-bar">
            <a href="" className="flex mr-auto">
                <img alt="Midone Tailwind HTML Admin Template" className="w-6" src="dist/images/logo.svg"/>
            </a>
            <a href="javascript:;" id="mobile-menu-toggler"> <BarChart className="w-8 h-8 text-white transform -rotate-90"/> </a>
        </div>
        <ul className="border-t border-theme-24 py-5 hidden">
            <li>
                <a href="index.html" className="side-menu">
                    <div className="side-menu__icon"> <Home/> </div>
                    <div className="side-menu__title"> Overview </div>
                </a>
            </li>
            <li>
                <a href="personal-profile.html" className="side-menu">
                    <div className="side-menu__icon"> <User/> </div>
                    <div className="side-menu__title"> Personal Profile </div>
                </a>
            </li>
            <li>
                <a href="company-profile.html" className="side-menu side-menu--active">
                    <div className="side-menu__icon"> <Users/> </div>
                    <div className="side-menu__title"> Company Profile </div>
                </a>
            </li>
            <li className="side-nav__devider my-6"></li>
            <li>
                <a href="inbox.html" className="side-menu">
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
                <a href="view-talent.html" className="side-menu">
                    <div className="side-menu__icon"> <FileText/> </div>
                    <div className="side-menu__title"> View Talent </div>
                </a>
            </li>
            <li>
                <a href="data-list.html" className="side-menu">
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
                <a href="chat.html" className="side-menu">
                    <div className="side-menu__icon"> <MessageCircle/> </div>
                    <div className="side-menu__title"> Chat </div>
                </a>
            </li>
        </ul>
    </div>
    {/*  END: Mobile Menu  */}
    <div className="flex">
        {/*  BEGIN: Content  */}
        <div className="content">
            <div className="intro-y flex items-center mt-8">
                <h2 className="text-lg font-medium mr-auto">
                    Safaricom PLC
                </h2>
            </div>
            <div className="grid grid-cols-12 gap-6">
                {/*  BEGIN: Profile Menu  */}
                <div className="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse">
                    <div className="intro-y box mt-5">
                        <div className="relative flex items-center p-5">
                            <div className="w-24 h-24 image-fit">
                                <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-14.jpg"/>
                            </div>
                            <div className="ml-4 mr-auto">
                                <div className="font-medium text-base">Safaricom Kenya</div>
                                <div className="text-gray-600">Mobile Provider</div>
                            </div>
                            <div className="dropdown relative">
                                <a className="dropdown-toggle w-5 h-5 block" href="javascript:;"> <MoreHorizontal className="w-5 h-5 text-gray-700"/> </a>
                                <div className="dropdown-box mt-5 absolute w-56 top-0 right-0 z-20">
                                    <div className="dropdown-box__content box">
                                        <div className="p-4 border-b border-gray-200 font-medium">Export Options</div>
                                        <div className="p-2">
                                            <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"> <Activity className="w-4 h-4 text-gray-700 mr-2"/> English </a>
                                            <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md">
                                                <Box className="w-4 h-4 text-gray-700 mr-2"/> Indonesia
                                                <div className="text-xs text-white px-1 rounded-full bg-theme-6 ml-auto">10</div>
                                            </a>
                                        </div>
                                        <div className="px-3 py-3 border-t border-gray-200 font-medium flex">
                                            <button type="button" className="button button--sm bg-theme-1 text-white">Settings</button>
                                            <button type="button" className="button button--sm bg-gray-200 text-gray-600 ml-auto">View Profile</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 border-t border-gray-200">
                            <h4 className="flex items-center text-xl text-theme-1 font-medium leading-none mt-3"><UserPlus className="w-4 h-4 mr-2"/> Bio</h4>
                            <div className="ml-6 mr-auto mt-3">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                        </div>
                        <div className="p-5 border-t border-gray-200">
                            <h4 className="flex items-center text-xl text-theme-1 font-medium leading-none mt-3"><User className="w-4 h-4 mr-2"/> General Information </h4>
                            <p className="pt-4">
                                <a className="flex items-center font-bold" href=""> <Home className="w-4 h-4 mr-2"/> Head Office Address </a>
                                <span className="ml-6 inline-block">
                                    11 years/ 6 years remote <br />
                                    Basic English proficiency
                                </span>
                            </p>
                            <p className="pt-4">
                                <a className="flex items-center font-bold" href=""> <PhoneCall className="w-4 h-4 mr-2"/> Phone Number </a>
                                <span className="ml-6 inline-block">
                                    Full Time <br />
                                    Ready to start in 1 month
                                </span>
                            </p>
                            <p className="pt-4">
                                <a className="flex items-center font-bold" href=""> <Monitor className="w-4 h-4 mr-2"/> Website </a>
                                <span className="ml-6 inline-block">
                                    DevOps <br />
                                    600,000 KES / Year
                                </span>
                            </p>
                            <p className="pt-4">
                                <a className="flex items-center font-bold" href=""> <Mail className="w-4 h-4 mr-2"/> Emails </a>
                                <span className="ml-6 inline-block">
                                    DevOps <br />
                                    600,000 KES / Year
                                </span>
                            </p>
                        </div>
                        <div className="p-5 border-t border-gray-200">
                            <h4 className="flex items-center text-xl text-theme-1 font-medium leading-none mt-3"><User className="w-4 h-4 mr-2"/> Person in charge Info </h4>
                            <p className="pt-4">
                                <a className="flex items-center font-bold" href=""> <User className="w-4 h-4 mr-2"/> Name </a>
                                <span className="ml-6 inline-block">
                                    11 years/ 6 years remote <br />
                                    Basic English proficiency
                                </span>
                            </p>
                            <p className="pt-4">
                                <a className="flex items-center font-bold" href=""> <Pocket className="w-4 h-4 mr-2"/> Department &amp; Position </a>
                                <span className="ml-6 inline-block">
                                    Full Time <br />
                                    Ready to start in 1 month
                                </span>
                            </p>
                            <p className="pt-4">
                                <a className="flex items-center font-bold" href=""> <PhoneCall className="w-4 h-4 mr-2"/> Phone Number </a>
                                <span className="ml-6 inline-block">
                                    DevOps <br />
                                    600,000 KES / Year
                                </span>
                            </p>
                            <p className="pt-4">
                                <a className="flex items-center font-bold" href=""> <MapPin className="w-4 h-4 mr-2"/> Address </a>
                                <span className="ml-6 inline-block">
                                    DevOps <br />
                                    600,000 KES / Year
                                </span>
                            </p>
                        </div>
                        <div className="p-5 border-t flex">
                            <button type="button" className="button button--sm block bg-theme-1 text-white">New Group</button>
                            <button type="button" className="button button--sm border text-gray-700 ml-auto">New Quick Link</button>
                        </div>
                    </div>
                    <div className="intro-y box p-5 bg-theme-1 text-white mt-5">
                        <div className="flex items-center">
                            <div className="font-medium text-lg">Important Update</div>
                            <div className="text-xs bg-white text-gray-800 px-1 rounded-md ml-auto">New</div>
                        </div>
                        <div className="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                        <div className="font-medium flex mt-5">
                            <button type="button" className="button button--sm border border-white text-white">Take Action</button>
                            <button type="button" className="button button--sm ml-auto">Dismiss</button>
                        </div>
                    </div>
                </div>
                {/*  END: Profile Menu  */}
                {/*  BEGIN: Profile Info  */}
                <div className="col-span-12 lg:col-span-8 xxl:col-span-9">
                    <div className="intro-y box flex flex-col lg:flex-row mt-5">
                        <div className="intro-y flex-1 px-5 py-5">
                            <h3 className="text-2xl font-medium text-theme-1 leading-none border-b border-gray-200 pb-4 mt-3"><Briefcase className="w-4 h-4 mr-2 inline-block"/>Areas of activities</h3>
                            <p className="pt-5">
                                <span className="report-box__indicator bg-theme-14 text-theme-10 px-3 py-1 cursor-pointer rounded-full mr-1 mb-2 inline-block"> Telecom </span>
                                <span className="report-box__indicator bg-theme-14 text-theme-10 px-3 py-1 cursor-pointer rounded-full mr-1 mb-2 inline-block"> Technology </span>
                                <span className="report-box__indicator bg-theme-14 text-theme-10 px-3 py-1 cursor-pointer rounded-full mr-1 mb-2 inline-block"> Education </span>
                                <span className="report-box__indicator bg-theme-14 text-theme-10 px-3 py-1 cursor-pointer rounded-full mr-1 mb-2 inline-block"> Community </span>
                            </p>
                        </div>
                        <div className="intro-y border-b border-t lg:border-b-0 lg:border-t-0 border-gray-200 flex-1 p-5 lg:border-l lg:border-r border-gray-200 py-5">
                            <h3 className="text-2xl font-medium text-theme-1 leading-none border-b border-gray-200 pb-4 mt-3"><UserPlus className="w-4 h-4 mr-2 inline-block"/>Community</h3>
                            <p className="pt-5">
                                <span className="text-center report-box__indicator bg-theme-18 text-theme-9 px-1 py-1 cursor-pointer rounded-full mr-1 mb-2 inline-block"> <a href="javascript:;" className="tooltip button" title="4/4 reference endosed you!">mPesa Academy</a> </span>
                                <span className="text-center report-box__indicator bg-theme-18 text-theme-9 px-1 py-1 cursor-pointer rounded-full mr-1 mb-2 inline-block"> <a href="javascript:;" className="tooltip button" title="2/4 reference endosed you!">Commputers for Schools</a> </span>
                                <span className="text-center report-box__indicator bg-theme-18 text-theme-9 px-1 py-1 cursor-pointer rounded-full mr-1 mb-2 inline-block"> <a href="javascript:;" className="tooltip button" title="3/4 reference endosed you!">Chapa Dimba</a> </span>
                                <span className="text-center report-box__indicator bg-theme-18 text-theme-9 px-1 py-1 cursor-pointer rounded-full mr-1 mb-2 inline-block"> <a href="javascript:;" className="tooltip button" title="1/4 reference endosed you!">Chapa Dimba</a> </span>
                            </p>
                        </div>
                        <div className="intro-y flex-1 px-5 py-5">
                            <h3 className="text-2xl font-medium text-theme-1 leading-none border-b border-gray-200 pb-4 mt-3"><FileText className="w-4 h-4 mr-2 inline-block"/>Products</h3>
                            <p className="pt-5">
                                <span className="text-center report-box__indicator rounded-full mr-1 mb-2 border text-gray-700 px-1 py-1 cursor-pointer rounded-full mr-1 mb-2 inline-block"> <a href="javascript:;" className="tooltip button" title="1/4 reference endosed you!">Mkesho</a> </span>
                                <span className="text-center report-box__indicator rounded-full mr-1 mb-2 border text-gray-700 px-1 py-1 cursor-pointer rounded-full mr-1 mb-2 inline-block"> <a href="javascript:;" className="tooltip button" title="1/4 reference endosed you!">Mshwari</a> </span>
                            </p>
                        </div>
                    </div>
                    {/*  END: Profile Info  */}
                    {/*  BEGIN: Recent Activities  */}
                    <div className="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-12 mt-3">
                        <div className="intro-x flex items-center h-10">
                            <h2 className="text-lg font-medium truncate mr-5">
                                Safaricom Overview
                            </h2>
                            <a href="" className="ml-auto text-theme-1 truncate">See all</a>
                        </div>
                        <div className="mt-5 relative">
                            <div className="accordion">
                                <div className="intro-x relative flex items-center mb-3">
                                    <div className="box p-5 ml-0 flex-1 zoom-in">

                                        <div className="accordion__pane border-b border-gray-200 pb-4">
                                            <a href="javascript:;" className="accordion__pane__toggle font-medium block">
                                                <div className="flex items-center">
                                                    <h3 className="text-2xl font-medium leading-none">About Safaricom</h3>
                                                    <p className="text-xs text-gray-500 text- ml-auto button w-32 mr-2 mb-2 flex items-center justify-center border text-gray-700"><Eye className="w-4 h-4 mr-2"/> View</p>
                                                </div>
                                                <div className="text-gray-600">
                                                    <div className="mt-1">Updated: 10 October 2017</div>
                                                </div>
                                            </a>
                                            <div className="accordion__pane__content mt-3 text-gray-700 leading-relaxed">
                                                <p className="mt-4">
                                                    The leading communications company in Kenya with the widest Network coverage, Best data,voice & SMS network, affordable prepaid and postpaid services<br /><br />
                                                    At Safaricom we believe in investing in the future. Working hard towards the creation of technologies that positively impact the society and most importantly transform the lives of those around us is a core value that we hold dear. Milestones in the mobile money sector in the form of M-PESA and the introduction of Sambaza are just a few of the pioneering technologies that have put Safaricom on the global map.<br /><br />
                                                    With more innovators and thinkers emerging daily, we endeavour to aid them in their road to discovery through interesting and encouraging platforms that enable them to reach their potential. This is because when they unlock their potential, they push us to ours and most importantly, the end result is solutions that better the lives of the human race.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center pt-4">
                                            <div className="text-center ml-auto w-56"> <a href="javascript:;" data-toggle="modal" data-target="#large-modal-size-preview" className="button mr-1 mb-2 inline-block border text-gray-700"> <Edit className="w-4 h-4 mr-2 inline-block"/> Edit Info</a> <a href="javascript:;" data-toggle="modal" data-target="#overlapping-modal-preview" className="button mr-1 mb-2 w-24 inline-block bg-theme-31 text-theme-6"> <Trash2 className="w-4 h-4 mr-2 inline-block"/> Delete</a> </div>
                                        </div>
                                        <div className="text-gray-600 mt-1"></div>
                                    </div>
                                </div>

                                <div className="intro-y col-span-12 flex flex-wrap sm:flex-no-wrap items-center mt-2">
                                    <h2 className="text-lg font-medium truncate mr-5">
                                        Reviews and Feedback
                                    </h2>
                                    <div className="hidden md:block mx-auto text-gray-600">Showing 1 to 4 of 300 entries</div>
                                    <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                                        <div className="w-56 relative text-gray-700">
                                            <input type="text" className="input w-56 box pr-10 placeholder-theme-13" placeholder="Search..."/>
                                            <Search className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-12 gap-6 mt-5">
                                    <div className="intro-y col-span-12 md:col-span-6 lg:col-span-6">
                                        <div className="box">
                                            <div className="flex items-start px-2 pt-5">
                                                <div className="w-full">
                                                    <h3 className="lg:ml-3 text-2xl text-theme-1 font-medium leading-none mb-3 block">Wonderful place to to work</h3>
                                                    <div className="lg:ml-3 text-center lg:text-left mt-3 lg:mt-0 block">
                                                        <a href="javascript:;" data-theme="dark" data-tooltip-content="#custom-content-tooltip" data-event="on-hover" className="tooltip button button--sm inline-block mb-2 border text-gray-700" title="This is your company rating">
                                                            <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                            <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                            <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                            <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                            <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                            <span className="inline-block">5.0 Rating</span>
                                                        </a>
                                                        <div className="tooltip-content">
                                                            <div id="custom-content-tooltip" className="relative flex items-center py-1">
                                                                <div className="ml-4 mr-auto">
                                                                    <div className="font-medium leading-relaxed">Worklife Balance</div>
                                                                    <div className="text-theme-9">
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                    </div>
                                                                    <div className="font-medium leading-relaxed">Career Opportunities</div>
                                                                    <div className="text-theme-9">
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                    </div>
                                                                    <div className="font-medium leading-relaxed">Culture and Values</div>
                                                                    <div className="text-theme-9">
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                    </div>
                                                                    <div className="font-medium leading-relaxed">Compesation and Benefits</div>
                                                                    <div className="text-theme-9">
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                    </div>
                                                                    <div className="font-medium leading-relaxed">Senior Management</div>
                                                                    <div className="text-theme-9">
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="text-gray-600 text-xs mt-0.5">Current Employee: Software Engineer</div>
                                                        <div className="text-gray-600 text-xs mt-0.5">August 30, 2020</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center lg:text-left p-5">
                                                <p>
                                                    I have been working at Amazon full-time for more than 3 years<br />
                                                    <strong>Pros</strong><br />
                                                    Challenging sometimes fun work environment Being part of a team Doing great things Great people to work with<br />
                                                    <strong>Cons</strong><br />
                                                    Organization and communication can be a challenge to maneuver around Hours can become a challenge when managing a hectic schedule<br />
                                                    <strong>Advice to Management</strong><br />
                                                    Having to be available for any shift in order to move up in certain positions Work expectations and policies can change and can be confusing
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="intro-y col-span-12 md:col-span-6 lg:col-span-6">
                                        <div className="box">
                                            <div className="flex items-start px-2 pt-5">
                                                <div className="w-full">
                                                    <h3 className="lg:ml-3 text-2xl text-theme-1 font-medium leading-none mb-3 block">Wonderful place to to work</h3>
                                                    <div className="lg:ml-3 text-center lg:text-left mt-3 lg:mt-0 block">
                                                        <a href="javascript:;" data-theme="dark" data-tooltip-content="#custom-content-tooltip" data-event="on-hover" className="tooltip button button--sm inline-block mb-2 border text-gray-700" title="This is your company rating">
                                                            <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                            <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                            <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                            <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                            <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                            <span className="inline-block">5.0 Rating</span>
                                                        </a>
                                                        <div className="tooltip-content">
                                                            <div id="custom-content-tooltip" className="relative flex items-center py-1">
                                                                <div className="ml-4 mr-auto">
                                                                    <div className="font-medium leading-relaxed">Worklife Balance</div>
                                                                    <div className="text-theme-9">
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                    </div>
                                                                    <div className="font-medium leading-relaxed">Career Opportunities</div>
                                                                    <div className="text-theme-9">
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                    </div>
                                                                    <div className="font-medium leading-relaxed">Culture and Values</div>
                                                                    <div className="text-theme-9">
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                    </div>
                                                                    <div className="font-medium leading-relaxed">Compesation and Benefits</div>
                                                                    <div className="text-theme-9">
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                    </div>
                                                                    <div className="font-medium leading-relaxed">Senior Management</div>
                                                                    <div className="text-theme-9">
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="text-gray-600 text-xs mt-0.5">Current Employee: Software Engineer</div>
                                                        <div className="text-gray-600 text-xs mt-0.5">August 30, 2020</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center lg:text-left p-5">
                                                <p>
                                                    I have been working at Amazon full-time for more than 3 years<br />
                                                    <strong>Pros</strong><br />
                                                    Challenging sometimes fun work environment Being part of a team Doing great things Great people to work with<br />
                                                    <strong>Cons</strong><br />
                                                    Organization and communication can be a challenge to maneuver around Hours can become a challenge when managing a hectic schedule<br />
                                                    <strong>Advice to Management</strong><br />
                                                    Having to be available for any shift in order to move up in certain positions Work expectations and policies can change and can be confusing
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="intro-y col-span-12 md:col-span-6 lg:col-span-6">
                                        <div className="box">
                                            <div className="flex items-start px-2 pt-5">
                                                <div className="w-full">
                                                    <h3 className="lg:ml-3 text-2xl text-theme-1 font-medium leading-none mb-3 block">Wonderful place to to work</h3>
                                                    <div className="lg:ml-3 text-center lg:text-left mt-3 lg:mt-0 block">
                                                        <a href="javascript:;" data-theme="dark" data-tooltip-content="#custom-content-tooltip" data-event="on-hover" className="tooltip button button--sm inline-block mb-2 border text-gray-700" title="This is your company rating">
                                                            <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                            <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                            <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                            <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                            <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                            <span className="inline-block">5.0 Rating</span>
                                                        </a>
                                                        <div className="tooltip-content">
                                                            <div id="custom-content-tooltip" className="relative flex items-center py-1">
                                                                <div className="ml-4 mr-auto">
                                                                    <div className="font-medium leading-relaxed">Worklife Balance</div>
                                                                    <div className="text-theme-9">
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                    </div>
                                                                    <div className="font-medium leading-relaxed">Career Opportunities</div>
                                                                    <div className="text-theme-9">
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                    </div>
                                                                    <div className="font-medium leading-relaxed">Culture and Values</div>
                                                                    <div className="text-theme-9">
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                    </div>
                                                                    <div className="font-medium leading-relaxed">Compesation and Benefits</div>
                                                                    <div className="text-theme-9">
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                    </div>
                                                                    <div className="font-medium leading-relaxed">Senior Management</div>
                                                                    <div className="text-theme-9">
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="text-gray-600 text-xs mt-0.5">Current Employee: Software Engineer</div>
                                                        <div className="text-gray-600 text-xs mt-0.5">August 30, 2020</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center lg:text-left p-5">
                                                <p>
                                                    I have been working at Amazon full-time for more than 3 years<br />
                                                    <strong>Pros</strong><br />
                                                    Challenging sometimes fun work environment Being part of a team Doing great things Great people to work with<br />
                                                    <strong>Cons</strong><br />
                                                    Organization and communication can be a challenge to maneuver around Hours can become a challenge when managing a hectic schedule<br />
                                                    <strong>Advice to Management</strong><br />
                                                    Having to be available for any shift in order to move up in certain positions Work expectations and policies can change and can be confusing
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="intro-y col-span-12 md:col-span-6 lg:col-span-6">
                                        <div className="box">
                                            <div className="flex items-start px-2 pt-5">
                                                <div className="w-full">
                                                    <h3 className="lg:ml-3 text-2xl text-theme-1 font-medium leading-none mb-3 block">Wonderful place to to work</h3>
                                                    <div className="lg:ml-3 text-center lg:text-left mt-3 lg:mt-0 block">
                                                        <a href="javascript:;" data-theme="dark" data-tooltip-content="#custom-content-tooltip" data-event="on-hover" className="tooltip button button--sm inline-block mb-2 border text-gray-700" title="This is your company rating">
                                                            <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                            <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                            <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                            <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                            <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                            <span className="inline-block">5.0 Rating</span>
                                                        </a>
                                                        <div className="tooltip-content">
                                                            <div id="custom-content-tooltip" className="relative flex items-center py-1">
                                                                <div className="ml-4 mr-auto">
                                                                    <div className="font-medium leading-relaxed">Worklife Balance</div>
                                                                    <div className="text-theme-9">
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                    </div>
                                                                    <div className="font-medium leading-relaxed">Career Opportunities</div>
                                                                    <div className="text-theme-9">
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                    </div>
                                                                    <div className="font-medium leading-relaxed">Culture and Values</div>
                                                                    <div className="text-theme-9">
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                    </div>
                                                                    <div className="font-medium leading-relaxed">Compesation and Benefits</div>
                                                                    <div className="text-theme-9">
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                    </div>
                                                                    <div className="font-medium leading-relaxed">Senior Management</div>
                                                                    <div className="text-theme-9">
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                        <span className="mr-1 inline-block text-gray-500"><Star className="w-4 h-4"/></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="text-gray-600 text-xs mt-0.5">Current Employee: Software Engineer</div>
                                                        <div className="text-gray-600 text-xs mt-0.5">August 30, 2020</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center lg:text-left p-5">
                                                <p>
                                                    I have been working at Amazon full-time for more than 3 years<br />
                                                    <strong>Pros</strong><br />
                                                    Challenging sometimes fun work environment Being part of a team Doing great things Great people to work with<br />
                                                    <strong>Cons</strong><br />
                                                    Organization and communication can be a challenge to maneuver around Hours can become a challenge when managing a hectic schedule<br />
                                                    <strong>Advice to Management</strong><br />
                                                    Having to be available for any shift in order to move up in certain positions Work expectations and policies can change and can be confusing
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/*  END: Pagination  */}
                            <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-no-wrap items-center mt-5">
                                <ul className="pagination">
                                    <li>
                                        <a className="pagination__link" href=""> <ChevronsLeft className="w-4 h-4"/> </a>
                                    </li>
                                    <li>
                                        <a className="pagination__link" href=""> <ChevronsLeft className="w-4 h-4"/> </a>
                                    </li>
                                    <li> <a className="pagination__link" href="">...</a> </li>
                                    <li> <a className="pagination__link" href="">1</a> </li>
                                    <li> <a className="pagination__link pagination__link--active" href="">2</a> </li>
                                    <li> <a className="pagination__link" href="">3</a> </li>
                                    <li> <a className="pagination__link" href="">...</a> </li>
                                    <li>
                                        <a className="pagination__link" href=""> <ChevronRight className="w-4 h-4"/> </a>
                                    </li>
                                    <li>
                                        <a className="pagination__link" href=""> <ChevronsRight className="w-4 h-4"/> </a>
                                    </li>
                                </ul>
                                <select className="w-20 input box mt-3 sm:mt-0">
                                    <option>10</option>
                                    <option>25</option>
                                    <option>35</option>
                                    <option>50</option>
                                </select>
                            </div>
                            {/*  END: Pagination  */}
                        </div>
                        {/*  END: Recent Activities  */}
                        
                    </div>
                    {/*  END: Recent Activities  */}
                </div>
            </div>
        </div>
        {/*  END: Content  */}
    </div>

    <div className="modal" id="overlapping-modal-preview">
        <div className="modal__content px-5 py-10">
            <div className="p-5 text-center">
                <XCircle className="w-16 h-16 text-theme-6 mx-auto mt-3"/>
                <div className="text-3xl mt-5">Are you sure?</div>
                <div className="text-gray-600 mt-2">Do you really want to delete these records? This process cannot be undone.</div>
            </div>
            <div className="px-5 pb-8 text-center"> <button type="button" data-dismiss="modal" className="button w-24 border text-gray-700 mr-1">Cancel</button> <a href="javascript:;" data-toggle="modal" data-target="#next-overlapping-modal-preview" className="button inline-block bg-theme-6 text-white w-48">
                <Trash2 className="w-4 h-4 mr-2 inline-block"/> Delete Position</a> </div>

            <div className="modal" id="next-overlapping-modal-preview">
                <div className="modal__content p-10 text-center">
                    <div className="mb-2">
                        <div className="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center">

                            <svg width="25" viewBox="-2 -2 42 42" xmlns="http://www.w3.org/2000/svg" stroke="rgb(45, 55, 72)" className="w-8 h-8">
                                <g fill="none" fill-rule="evenodd">
                                    <g transform="translate(1 1)" stroke-width="4">
                                        <circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle>
                                        <path d="M36 18c0-9.94-8.06-18-18-18">
                                            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform>
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        Deleting your record!
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="modal" id="large-modal-size-preview">
        <div className="modal__content modal__content--lg">
            <div className="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200"> <h3 className="text-2xl font-medium leading-none mt-3">Edit Company info</h3> <button className="button border items-center text-gray-700 hidden sm:flex ml-auto"> <X className="w-4 h-4 mr-2"/> Close </button></div>
            <div className="p-5 border-b border-gray-200">
                <div className="pb-4"><label className="font-extrabold"><span className="text-theme-6">*</span> About Company:</label> </div>
                <form method="post"> <textarea data-feature="basic" className="summernote" name="editor"></textarea> </form>
                <div className="pb-4 mt-5"><label className="font-extrabold"> Upload image:</label> </div>
                <form action="/file-upload" className="dropzone border-gray-200 border-dashed"> <div className="fallback">
                    <input name="file" type="file" multiple /> </div> <div className="dz-message" data-dz-message>
                    <div className="text-lg font-medium">Drop files here or click to upload.</div>
                    <div className="text-gray-600"> This is just a demo dropzone. Selected files are <span className="font-medium">not</span> actually uploaded. </div>
                    </div>
                </form>
            </div>
            <div className="p-5">
                <div className="text-center ml-auto w-56"><button className="button w-24 mr-1 mb-2 border text-gray-700">Cancel</button> <button className="button w-24 mr-1 mb-2 bg-theme-9 text-white">Okay</button></div>
            </div>
        </div>
    </div>

    <div className="modal" id="project_one">
        <div className="modal__content modal__content--lg p-5">
            <h3 className="text-2xl text-theme-1 font-medium leading-none mt-3 border-b border-gray-200 pb-4">Project Name</h3>
            <div className="pt-5"><strong>Details:</strong></div>
            <div className="flex items-center mt-2 ">
                <div className="mr-2 w-56 flex"> Performance Rate: <span className="ml-auto font-medium text-theme-9">+23%</span> </div>
                <div className="w-24 sm:w-32 lg:w-56"> <canvas className="simple-line-chart-1" data-random="true" height="50"></canvas> </div>
            </div>
            <p className="pt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p className="pt-4">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <p className="pt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p className="pt-4">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <p className="pt-4">
                <strong className="pb-2 inline-block">Technologies (languages and frameworks), platform, and tools:</strong><br />
                <span className="report-box__indicator bg-theme-1 text-white px-3 py-1 cursor-pointer rounded-full mr-1"> Android</span>
                <span className="report-box__indicator bg-theme-1 text-white px-3 py-1 cursor-pointer rounded-full mr-1"> Python</span>
                <span className="report-box__indicator bg-theme-1 text-white px-3 py-1 cursor-pointer rounded-full mr-1"> Web: HTML, CSS, jQuery</span>
                <span className="report-box__indicator bg-theme-1 text-white px-3 py-1 cursor-pointer rounded-full mr-1"> Java</span>
            </p>
            <p className="pt-4"><strong>Outcome:</strong><br />It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <p className="pt-4">
                <strong className="pb-2 inline-block">Recommendations Received:</strong><br />
                <span className="report-box__indicator bg-theme-9 text-white px-3 py-1 cursor-pointer rounded-full mr-1"> Android - 1 (33%) </span>
                <span className="report-box__indicator bg-theme-9 text-white px-3 py-1 cursor-pointer rounded-full mr-1"> Python - 3 (93%) </span>
            </p>
        </div>
    </div>
    </div>

)
}

export default CompanyProfile;