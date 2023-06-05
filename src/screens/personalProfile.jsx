import React from "react";
import { User, Activity, Book, Box, Briefcase, Calendar, Coffee, Edit, Eye, Facebook, FileText, Instagram, Layout, Linkedin, Mail, MoreHorizontal, Pocket, Share2, Sidebar, Trash2, Twitter, UserPlus, XCircle, X, Home, Users, Inbox, List, Send, MessageCircle } from "react-feather";
 const PersonalProfile = () => {
return (
    // BEGIN: Mobile Menu 
    <div className="mobile-menu md:hidden">
        <div className="mobile-menu-bar">
            <a href="" className="flex mr-auto">
                <img alt="Midone Tailwind HTML Admin Template" className="w-6" src="dist/images/logo.svg"/>
            </a>
            <a href="javascript:;" id="mobile-menu-toggler"> <i data-feather="bar-chart-2" className="w-8 h-8 text-white transform -rotate-90"/> </a>
        </div>
        <ul className="border-t border-theme-24 py-5 hidden">
            <li>
                <a href="index.html" className="side-menu">
                    <div className="side-menu__icon"> <Home/> </div>
                    <div className="side-menu__title"> Overview </div>
                </a>
            </li>
            <li>
                <a href="personal-profile.html" className="side-menu side-menu--active">
                    <div className="side-menu__icon"> <User/> </div>
                    <div className="side-menu__title"> Personal Profile </div>
                </a>
            </li>
            <li>
                <a href="company-profile.html" className="side-menu">
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
    </div>,

    {/* END: Mobile Menu  */},


    <div className="flex">
        {/* BEGIN: Side Menu  */}
        <nav className="side-nav">
            <a href="" className="intro-x flex items-center pl-5 pt-4">
                <img alt="Midone Tailwind HTML Admin Template" className="w-6" src="dist/images/logo.svg"/>
                <span className="hidden xl:block text-white text-lg ml-3"> OnThe<span className="font-medium"> Table</span> </span>
            </a>
            <div className="side-nav__devider my-6"></div>
            <ul>
                <li>
                    <a href="index.html" className="side-menu">
                        <div className="side-menu__icon"> <Home/> </div>
                        <div className="side-menu__title"> Overview </div>
                    </a>
                </li>
                <li>
                    <a href="personal-profile.html" className="side-menu side-menu--active">
                        <div className="side-menu__icon"> <User/> </div>
                        <div className="side-menu__title"> Personal Profile </div>
                    </a>
                </li>
                <li>
                    <a href="company-profile.html" className="side-menu">
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
        </nav>
    </div>,

        {/* END: Side Menu  */},
        {/* BEGIN: Content  */},



<div className="content">
<div className="intro-y flex items-center mt-8">
    <h2 className="text-lg font-medium mr-auto">
        Profile Layout
    </h2>
</div>
<div className="grid grid-cols-12 gap-6">
                    {/* BEGIN: Profile Menu  */}
                    <div className="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse">
                        <div className="intro-y box mt-5">
                            <div className="relative flex items-center p-5">
                                <div className="w-24 h-24 image-fit">
                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-14.jpg"/>
                                </div>
                                <div className="ml-4 mr-auto">
                                    <div className="font-medium text-base">John Travolta</div>
                                    <div className="text-gray-600">Software Engineer</div>
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
                                                <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"> <Layout className="w-4 h-4 text-gray-700 mr-2"/> English </a>
                                                <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"> <Sidebar className="w-4 h-4 text-gray-700 mr-2"/> Indonesia </a>
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
                                <h4 className="flex items-center text-xl text-theme-1 font-medium leading-none mt-3"><User className="w-4 h-4 mr-2"/> Detailed Information </h4>
                                <p className="pt-4">
                                    <a className="flex items-center font-bold" href=""> <Coffee className="w-4 h-4 mr-2"/> Overall experience </a>
                                    <span className="ml-6 inline-block">
                                        11 years/ 6 years remote <br />
                                        Basic English proficiency
                                    </span>
                                </p>
                                <p className="pt-4">
                                    <a className="flex items-center font-bold" href=""> <Calendar className="w-4 h-4 mr-2"/> Availability </a>
                                    <span className="ml-6 inline-block">
                                        Full Time <br />
                                        Ready to start in 1 month
                                    </span>
                                </p>
                                <p className="pt-4">
                                    <a className="flex items-center font-bold" href=""> <Pocket className="w-4 h-4 mr-2"/> Role and current salary </a>
                                    <span className="ml-6 inline-block">
                                        DevOps <br />
                                        600,000 KES / Year
                                    </span>
                                </p>
                            </div>
                            <div className="p-5 border-t border-gray-200">
                                <h4 className="flex items-center text-xl text-theme-1 font-medium leading-none mt-3"><Share2 className="w-4 h-4 mr-2"/> Social Connection</h4>
                                <div className="flex items-center mt-5"> <Mail className="w-4 h-4 mr-2"/> johntravolta@left4code.com </div>
                                <div className="flex items-center mt-5"> <Linkedin className="w-4 h-4 mr-2"/> johntravolta@left4code.com </div>
                                <div className="flex items-center mt-5"> <Instagram className="w-4 h-4 mr-2"/> Instagram John Travolta </div>
                                <div className="flex items-center mt-5"> <Facebook className="w-4 h-4 mr-2"/> Twitter John Travolta </div>
                                <div className="flex items-center mt-5"> <Twitter className="w-4 h-4 mr-2"/> Twitter John Travolta </div>
                            </div>
                            <div className="p-5 border-t border-gray-200">
                                <h4 className="flex items-center text-xl text-theme-1 font-medium leading-none mt-3"><Book className="w-4 h-4 mr-2"/> Education </h4>
                                <div className="ml-6 mr-auto mt-3">
                                    <div className="text-gray-600 text-xs">High School</div>
                                    <div className="font-medium">Al Pacino</div>
                                </div>
                                <div className="ml-6 mr-auto mt-3">
                                    <div className="text-gray-600 text-xs">College One</div>
                                    <div className="font-medium">Al Pacino</div>
                                </div>
                                <div className="ml-6 mr-auto mt-3">
                                    <div className="text-gray-600 text-xs">College Two</div>
                                    <div className="font-medium">Al Pacino</div>
                                </div>
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
                    {/* END: Profile Menu  */}
                    {/* BEGIN: Profile Info  */}
                    <div className="col-span-12 lg:col-span-8 xxl:col-span-9">
                        <div className="intro-y box flex flex-col lg:flex-row mt-5">
                            <div className="intro-y flex-1 px-5 py-5">
                                <h3 className="text-2xl font-medium text-theme-1 leading-none border-b border-gray-200 pb-4 mt-3"><Briefcase className="w-4 h-4 mr-2 inline-block"/>Your Skills</h3>
                                <p className="pt-5">
                                    <span className="report-box__indicator bg-theme-14 text-theme-10 px-3 py-1 cursor-pointer rounded-full mr-1 mb-2 inline-block"> Android</span>
                                    <span className="report-box__indicator bg-theme-14 text-theme-10 px-3 py-1 cursor-pointer rounded-full mr-1 mb-2 inline-block"> Python</span>
                                    <span className="report-box__indicator bg-theme-14 text-theme-10 px-3 py-1 cursor-pointer rounded-full mr-1 mb-2 inline-block"> Web: HTML, CSS, jQuery</span>
                                    <span className="report-box__indicator bg-theme-14 text-theme-10 px-3 py-1 cursor-pointer rounded-full mr-1 mb-2 inline-block"> Java</span>
                                </p>
                            </div>
                            <div className="intro-y border-b border-t lg:border-b-0 lg:border-t-0 border-gray-200 flex-1 p-5 lg:border-l lg:border-r border-gray-200 py-5">
                                <h3 className="text-2xl font-medium text-theme-1 leading-none border-b border-gray-200 pb-4 mt-3"><UserPlus className="w-4 h-4 mr-2 inline-block"/>Recommendantions</h3>
                                <p className="pt-5">
                                    <span className="text-center report-box__indicator bg-theme-18 text-theme-9 px-1 py-1 cursor-pointer rounded-full mr-1 mb-2 inline-block"> <a href="javascript:;" className="tooltip button" title="4/4 reference endosed you!">Laravel 4 (99%)</a> </span>
                                    <span className="text-center report-box__indicator bg-theme-18 text-theme-9 px-1 py-1 cursor-pointer rounded-full mr-1 mb-2 inline-block"> <a href="javascript:;" className="tooltip button" title="2/4 reference endosed you!">Android 2 (21%)</a> </span>
                                    <span className="text-center report-box__indicator bg-theme-18 text-theme-9 px-1 py-1 cursor-pointer rounded-full mr-1 mb-2 inline-block"> <a href="javascript:;" className="tooltip button" title="3/4 reference endosed you!">Python 3 (73%)</a> </span>
                                    <span className="text-center report-box__indicator bg-theme-18 text-theme-9 px-1 py-1 cursor-pointer rounded-full mr-1 mb-2 inline-block"> <a href="javascript:;" className="tooltip button" title="1/4 reference endosed you!">Web: HTML, CSS, jQuery 2 (33%)</a> </span>
                                </p>
                            </div>
                            <div className="intro-y flex-1 px-5 py-5">
                                <h3 className="text-2xl font-medium text-theme-1 leading-none border-b border-gray-200 pb-4 mt-3"><FileText className="w-4 h-4 mr-2 inline-block"/>Projects</h3>
                                <p className="pt-5">
                                    <span className="text-center report-box__indicator rounded-full mr-1 mb-2 border text-gray-700 px-1 py-1 cursor-pointer rounded-full mr-1 mb-2 inline-block"> <a href="javascript:;" className="tooltip button" title="1/4 reference endosed you!">Mkesho: Safaricom & Equity Bank</a> </span>
                                    <span className="text-center report-box__indicator rounded-full mr-1 mb-2 border text-gray-700 px-1 py-1 cursor-pointer rounded-full mr-1 mb-2 inline-block"> <a href="javascript:;" className="tooltip button" title="1/4 reference endosed you!">Loyalty Card: Uchumi Supermarket</a> </span>
                                </p>
                            </div>
                        </div>
                        {/* END: Profile Info  */}
                        {/* BEGIN: Recent Activities  */}
                        <div className="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-12 mt-3">
                            <div className="intro-x flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">
                                    Work history
                                </h2>
                                <a href="javascript:;" data-toggle="modal" data-target="#add_experience" className="button ml-auto mr-1 mb-2 inline-block border text-theme-1"> <Edit className="w-4 h-4 mr-2 inline-block"/> Add Work History</a>
                            </div>
                            <div className="report-timeline mt-5 relative accordion">
                                <div className="intro-x relative flex items-center mb-3">
                                    <div className="report-timeline__image">
                                        <div className="w-12 h-12 flex-none image-fit rounded-full overflow-hidden">
                                            <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-9.jpg"/>
                                        </div>
                                    </div>
                                    <div className="box p-5 ml-4 flex-1 zoom-in">

                                        <div className="accordion__pane border-b border-gray-200 pb-4">
                                            <a href="javascript:;" className="accordion__pane__toggle font-medium block">
                                                <div className="flex items-center">
                                                    <h3 className="text-2xl font-medium leading-none">Product Manager</h3>
                                                    <p className="text-xs text-gray-500 text- ml-auto button w-32 mr-2 mb-2 flex items-center justify-center border text-gray-700"><Eye className="w-4 h-4 mr-2"/> View</p>
                                                </div>
                                                <div className="text-gray-600">
                                                    <div className="mt-1">Safaricom Ltd. (2011/February - 2017/October)</div>
                                                </div>
                                            </a>
                                            <div className="accordion__pane__content mt-3 text-gray-700 leading-relaxed">
                                                <p className="mt-4">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                                <p className="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center pt-4">
                                            <div className="font-medium">Projects Implemented:  </div>
                                            <div className="text-center ml-auto w-56"> <a href="javascript:;" data-toggle="modal" data-target="#large-modal-size-preview" className="button mr-1 mb-2 inline-block border text-gray-700"> <Edit className="w-4 h-4 mr-2 inline-block"/> Edit Info</a> <a href="javascript:;" data-toggle="modal" data-target="#overlapping-modal-preview" className="button mr-1 mb-2 w-24 inline-block bg-theme-31 text-theme-6"> <Trash2 className="w-4 h-4 mr-2 inline-block"/> Delete</a> </div>
                                        </div>
                                        <div className="text-gray-600 mt-1">
                                            <a href="javascript:;" data-toggle="modal" data-target="#project_one" className="button w-24 mr-1 mb-2 border text-gray-700">Project One (HTML,CSS,jQuery)</a>
                                            <a href="javascript:;" data-toggle="modal" data-target="#project_one" className="button w-24 mr-1 mb-2 border text-gray-700">Project Two (Ptyhon)</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-x relative flex items-center mb-3">
                                    <div className="report-timeline__image">
                                        <div className="w-12 h-12 flex-none image-fit rounded-full overflow-hidden">
                                            <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-9.jpg"/>
                                        </div>
                                    </div>
                                    <div className="box p-5 ml-4 flex-1 zoom-in">

                                        <div className="accordion__pane border-b border-gray-200 pb-4">
                                            <a href="javascript:;" className="accordion__pane__toggle font-medium block">
                                                <div className="flex items-center">
                                                    <h3 className="text-2xl font-medium leading-none">Product Manager</h3>
                                                    <p className="text-xs text-gray-500 text- ml-auto button w-32 mr-2 mb-2 flex items-center justify-center border text-gray-700"><Eye className="w-4 h-4 mr-2"/> View</p>
                                                </div>
                                                <div className="text-gray-600">
                                                    <div className="mt-1">Safaricom Ltd. (2011/February - 2017/October)</div>
                                                </div>
                                            </a>
                                            <div className="accordion__pane__content mt-3 text-gray-700 leading-relaxed">
                                                <p className="mt-4">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                                <p className="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center pt-4">
                                            <div className="font-medium">Projects Implemented:  </div>
                                            <div className="text-center ml-auto w-56"> <a href="javascript:;" data-toggle="modal" data-target="#large-modal-size-preview" className="button mr-1 mb-2 inline-block border text-gray-700"> <Edit className="w-4 h-4 mr-2 inline-block"/> Edit Info</a> <a href="javascript:;" data-toggle="modal" data-target="#overlapping-modal-preview" className="button mr-1 mb-2 w-24 inline-block bg-theme-31 text-theme-6"> <Trash2 className="w-4 h-4 mr-2 inline-block"/> Delete</a> </div>
                                        </div>
                                        <div className="text-gray-600 mt-1">
                                            <a href="javascript:;" data-toggle="modal" data-target="#project_one" className="button w-24 mr-1 mb-2 border text-gray-700">Project One (HTML,CSS,jQuery)</a>
                                            <a href="javascript:;" data-toggle="modal" data-target="#project_one" className="button w-24 mr-1 mb-2 border text-gray-700">Project Two (Ptyhon)</a>
                                        </div>
                                        <div className="flex mt-5">
                                            <div className="tooltip w-8 h-8 image-fit mr-1 zoom-in" title="Apple MacBook Pro 13">
                                                <img alt="Midone Tailwind HTML Admin Template" className="rounded-md border border-white" src="dist/images/preview-8.jpg"/>
                                            </div>
                                            <div className="tooltip w-8 h-8 image-fit mr-1 zoom-in" title="Dell XPS 13">
                                                <img alt="Midone Tailwind HTML Admin Template" className="rounded-md border border-white" src="dist/images/preview-14.jpg"/>
                                            </div>
                                            <div className="tooltip w-8 h-8 image-fit mr-1 zoom-in" title="Oppo Find X2 Pro">
                                                <img alt="Midone Tailwind HTML Admin Template" className="rounded-md border border-white" src="dist/images/preview-5.jpg"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-x text-gray-500 text-xs text-center my-4">12 November</div>
                                <div className="intro-x relative flex items-center mb-3">
                                    <div className="report-timeline__image">
                                        <div className="w-12 h-12 flex-none image-fit rounded-full overflow-hidden">
                                            <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-9.jpg"/>
                                        </div>
                                    </div>
                                    <div className="box p-5 ml-4 flex-1 zoom-in">

                                        <div className="accordion__pane border-b border-gray-200 pb-4">
                                            <a href="javascript:;" className="accordion__pane__toggle font-medium block">
                                                <div className="flex items-center">
                                                    <h3 className="text-2xl font-medium leading-none">Product Manager</h3>
                                                    <p className="text-xs text-gray-500 text- ml-auto button w-32 mr-2 mb-2 flex items-center justify-center border text-gray-700"><Eye className="w-4 h-4 mr-2"/> View</p>
                                                </div>
                                                <div className="text-gray-600">
                                                    <div className="mt-1">Safaricom Ltd. (2011/February - 2017/October)</div>
                                                </div>
                                            </a>
                                            <div className="accordion__pane__content mt-3 text-gray-700 leading-relaxed">
                                                <p className="mt-4">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                                <p className="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center pt-4">
                                            <div className="font-medium">Projects Implemented:  </div>
                                            <div className="text-center ml-auto w-56"> <a href="javascript:;" data-toggle="modal" data-target="#large-modal-size-preview" className="button mr-1 mb-2 inline-block border text-gray-700"> <Edit className="w-4 h-4 mr-2 inline-block"/> Edit Info</a> <a href="javascript:;" data-toggle="modal" data-target="#overlapping-modal-preview" className="button mr-1 mb-2 w-24 inline-block bg-theme-31 text-theme-6"> <Trash2 className="w-4 h-4 mr-2 inline-block"/> Delete</a> </div>
                                        </div>
                                        <div className="text-gray-600 mt-1">
                                            <a href="javascript:;" data-toggle="modal" data-target="#project_one" className="button w-24 mr-1 mb-2 border text-gray-700">Project One (HTML,CSS,jQuery)</a>
                                            <a href="javascript:;" data-toggle="modal" data-target="#project_one" className="button w-24 mr-1 mb-2 border text-gray-700">Project Two (Ptyhon)</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-x relative flex items-center mb-3">
                                    <div className="report-timeline__image">
                                        <div className="w-12 h-12 flex-none image-fit rounded-full overflow-hidden">
                                            <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-9.jpg"/>
                                        </div>
                                    </div>
                                    <div className="box p-5 ml-4 flex-1 zoom-in">

                                        <div className="accordion__pane border-b border-gray-200 pb-4">
                                            <a href="javascript:;" className="accordion__pane__toggle font-medium block">
                                                <div className="flex items-center">
                                                    <h3 className="text-2xl font-medium leading-none">Product Manager</h3>
                                                    <p className="text-xs text-gray-500 text- ml-auto button w-32 mr-2 mb-2 flex items-center justify-center border text-gray-700"><Eye className="w-4 h-4 mr-2"/> View</p>
                                                </div>
                                                <div className="text-gray-600">
                                                    <div className="mt-1">Safaricom Ltd. (2011/February - 2017/October)</div>
                                                </div>
                                            </a>
                                            <div className="accordion__pane__content mt-3 text-gray-700 leading-relaxed">
                                                <p className="mt-4">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                                <p className="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center pt-4">
                                            <div className="font-medium">Projects Implemented:  </div>
                                            <div className="text-center ml-auto w-56"> <a href="javascript:;" data-toggle="modal" data-target="#large-modal-size-preview" className="button mr-1 mb-2 inline-block border text-gray-700"> <Edit className="w-4 h-4 mr-2 inline-block"/> Edit Info</a> <a href="javascript:;" data-toggle="modal" data-target="#overlapping-modal-preview" className="button mr-1 mb-2 w-24 inline-block bg-theme-31 text-theme-6"> <Trash2 className="w-4 h-4 mr-2 inline-block"/> Delete</a> </div>
                                        </div>
                                        <div className="text-gray-600 mt-1">
                                            <a href="javascript:;" data-toggle="modal" data-target="#project_one" className="button w-24 mr-1 mb-2 border text-gray-700">Project One (HTML,CSS,jQuery)</a>
                                            <a href="javascript:;" data-toggle="modal" data-target="#project_one" className="button w-24 mr-1 mb-2 border text-gray-700">Project Two (Ptyhon)</a>
                                        </div>
                                        <div className="flex mt-5">
                                            <div className="tooltip w-8 h-8 image-fit mr-1 zoom-in" title="Apple MacBook Pro 13">
                                                <img alt="Midone Tailwind HTML Admin Template" className="rounded-md border border-white" src="dist/images/preview-8.jpg"/>
                                            </div>
                                            <div className="tooltip w-8 h-8 image-fit mr-1 zoom-in" title="Dell XPS 13">
                                                <img alt="Midone Tailwind HTML Admin Template" className="rounded-md border border-white" src="dist/images/preview-14.jpg"/>
                                            </div>
                                            <div className="tooltip w-8 h-8 image-fit mr-1 zoom-in" title="Oppo Find X2 Pro">
                                                <img alt="Midone Tailwind HTML Admin Template" className="rounded-md border border-white" src="dist/images/preview-5.jpg"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="intro-x flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">
                                    Work history
                                </h2>
                                <a href="javascript:;" data-toggle="modal" data-target="#add_experience" className="button ml-auto mr-1 mb-2 inline-block border text-theme-1"> <Edit className="w-4 h-4 mr-2 inline-block"/> Add Work History</a>
                            </div>
                        </div>
                        {/* END: Recent Activities  */}
                    </div>
    </div>


<div className="modal" id="overlapping-modal-preview">
            <div className="modal__content px-5 py-10">
                <div className="p-5 text-center">
                    <XCircle className="w-16 h-16 text-theme-6 mx-auto mt-3"/>
                    <div className="text-3xl mt-5">Are you sure?</div>
                    <div className="text-gray-600 mt-2">Do you really want to delete these records? This process cannot be undone.</div>
                </div>
                <div className="px-5 pb-8 text-center"> <button type="button" data-dismiss="modal" className="button w-24 border text-gray-700 mr-1">Cancel</button> <a href="javascript:;" data-toggle="modal" data-target="#next-overlapping-modal-preview" className="button inline-block bg-theme-6 text-white w-48"><Trash2 className="w-4 h-4 mr-2 inline-block"/> Delete Position</a> </div>

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

        <div className="modal" id="add_experience">
            <div className="modal__content modal__content--lg">
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200"> <h3 className="text-2xl font-medium leading-none mt-3">Add Experience</h3> <button className="button border items-center text-gray-700 hidden sm:flex ml-auto"> <X className="w-4 h-4 mr-2"/> Close </button></div>
                <div className="p-5 border-b border-gray-200">
                    <div className="pb-4"><label className="font-extrabold"><span className="text-theme-6">*</span> Position / Title:</label> <input type="text" className="input w-full border mt-2" placeholder="Input text"/> </div>
                    <div className="pb-4"><label className="font-extrabold"><span className="text-theme-6">*</span> Company:</label> <input type="text" className="input w-full border mt-2" placeholder="Input text"/> </div>
                    <div className="pb-4">
                        <label className="font-extrabold"><span className="text-theme-6">*</span> Employment type:</label>
                        <select className="input w-full border mt-2">
                            <option>Contracts</option>
                            <option>Full Time</option>
                            <option>Part Time</option>
                            <option>Project</option>
                            <option>Temporary</option>
                        </select>
                    </div>
                    <div className="pb-4">
                        <div className="relative w-56 inline-block">
                            <label className="pb-2 inline-block font-extrabold"><span className="text-theme-6">*</span> Start date</label>
                            <div className="absolute rounded-l w-10 h-10 flex items-center justify-center bg-gray-100 border text-gray-600"> <Calendar className="w-4 h-4"/> </div> <input type="text" className="datepicker input pl-12 border"/>
                        </div>
                        <div className="relative w-56 inline-block">
                            <label className="pb-2 inline-block font-extrabold"><span className="text-theme-6">*</span> End date</label>
                            <div className="absolute rounded-l w-10 h-10 flex items-center justify-center bg-gray-100 border text-gray-600"> <Calendar className="w-4 h-4"/> </div> <input type="text" className="datepicker input pl-12 border"/>
                        </div>
                    </div>
                    <div className="pb-4">
                        <label className="text-theme-6">Required.</label>
                        <div className="flex items-center text-gray-700 mt-2"> <input type="checkbox" className="input border mr-2" id="vertical-checkbox-chris-evans"/> <label className="cursor-pointer select-none" for="vertical-checkbox-chris-evans">Still working here?</label> </div>
                    </div>
                    <div className="pb-4">
                        <label className="pb-2 inline-block font-extrabold"><span className="text-theme-6">*</span> Job Description: </label>
                        <textarea className="input w-full border mt-2" name="comment" placeholder="Type your comments" minlength="10" required></textarea>
                    </div>

                    <div className="pb-4">
                        <label className="pb-2 inline-block font-extrabold"><span className="text-theme-6">*</span> Media: </label>
                        <p className="text-gray-500">Add or link to external documents, photos, sites, videos, and presentations.</p>
                        <form action="/file-upload" className="dropzone mt-5 border-gray-200 border-dashed">
                            <div className="fallback"> <input name="file" type="file" multiple /> </div>
                            <div className="dz-message" data-dz-message>
                                <div className="text-lg font-medium">Drop files here or click to upload.</div>
                                <div className="text-gray-600"> Upload your specific project files or portfolio here. <br /><span className="font-medium">Helps clients understand them better!</span> </div>
                            </div>
                        </form>
                    </div> 
                </div>
                <div className="p-5">
                    <div className="text-center ml-auto w-56"><button className="button w-24 mr-1 mb-2 border text-gray-700">Cancel</button> <button className="button w-24 mr-1 mb-2 bg-theme-9 text-white">Update</button></div>
                </div>
            </div>
        </div>


        <div className="modal" id="large-modal-size-preview">
            <div className="modal__content modal__content--lg">
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200"> <h3 className="text-2xl font-medium leading-none mt-3">Edit Experience</h3> <button className="button border items-center text-gray-700 hidden sm:flex ml-auto"> <X className="w-4 h-4 mr-2"/> Close </button></div>
                <div className="p-5 border-b border-gray-200">
                    <div className="pb-4"><label className="font-extrabold"><span className="text-theme-6">*</span> Position:</label> <input type="text" className="input w-full border mt-2" placeholder="Input text" value="Senior Manager - Customer Journey Mapping"/> </div>
                    <div className="pb-4"><label className="font-extrabold"><span className="text-theme-6">*</span> Company:</label> <input type="text" className="input w-full border mt-2" placeholder="Input text" value="Senior Manager - Customer Journey Mapping"/> </div>
                    <div className="pb-4">
                        <div className="relative w-56 inline-block">
                            <label className="pb-2 inline-block font-extrabold"><span className="text-theme-6">*</span> Start date</label>
                            <div className="absolute rounded-l w-10 h-10 flex items-center justify-center bg-gray-100 border text-gray-600"> <Calendar className="w-4 h-4"/> </div> <input type="text" className="datepicker input pl-12 border"/>
                        </div>
                        <div className="relative w-56 inline-block">
                            <label className="pb-2 inline-block font-extrabold"><span className="text-theme-6">*</span> End date</label>
                            <div className="absolute rounded-l w-10 h-10 flex items-center justify-center bg-gray-100 border text-gray-600"> <Calendar className="w-4 h-4"/> </div> <input type="text" className="datepicker input pl-12 border"/>
                        </div>
                    </div>
                    <div className="pb-4">
                        <label className="text-theme-6">Required.</label>
                        <div className="flex items-center text-gray-700 mt-2"> <input type="checkbox" className="input border mr-2" id="vertical-checkbox-chris-evans"/> <label className="cursor-pointer select-none" for="vertical-checkbox-chris-evans">Still working here?</label> </div>
                    </div>
                    <div className="accordion">
                        <div className="accordion__pane active border border-gray-200 p-4">
                            <a href="javascript:;" className="accordion__pane__toggle font-medium block"><h4 className="text-xl font-medium leading-none mt-3">Product Manager - Safaricom Ltd. Kenya</h4></a>
                            <div className="accordion__pane__content mt-3 text-gray-700 leading-relaxed">
                                <div className="pb-4"><label className="font-extrabold"><span className="text-theme-6">*</span> Project:</label> <input type="text" className="input w-full border mt-2" placeholder="Input text" value="Senior Manager - Customer Journey Mapping"/> </div>
                                <strong className="block mt-1">What did you build? What was impressive about it from a technology perspective?</strong>
                                <small className="block mt-1">
                                    Your answer should include:<br />
                                    What product or infrastructure did you build?<br />
                                    What problem did you solve with it?<br />
                                    What was your role in the team? (e.g. As the Tech Lead, I led a team of 50+ Android engineers to build ...)
                                </small>
                                <div className="pt-5">
                                    <form method="post">
                                        <textarea data-feature="basic" className="summernote" name="editor">
                                        <p className="pb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    </textarea>
                                    </form>
                                </div>

                                <div className="pt-5"> <label className="font-extrabold"><span className="text-theme-6">*</span> What technologies (languages and frameworks), platform, and tools did you use?</label> <input type="text" className="input w-full border mt-2" placeholder="Input text"/> </div>

                                <div className="mt-3">
                                    <label className="pb-2 inline-block">
                                        <strong><span className="text-theme-6">*</span> What was the outcome of your project?</strong><br />
                                        <small className="ml-3 inline-block">
                                            <strong>Your answer should include:<br /></strong>
                                            What metrics did you improve? (e.g. Reduced the Instagram scroll latency by 72%.)<br />
                                            Optional: What business impact did you make? (e.g. Increased user signup by 80%)<br />
                                        </small>
                                    </label> <textarea className="input w-full border mt-2" name="comment" placeholder="Type your comments" minlength="10" required></textarea>
                                </div>

                                <div className="pt-5">
                                    <label>
                                        <span className="text-theme-6">*</span>
                                        <strong>Link to an App, a GitHub Repo, or a Portfolio:</strong><br />
                                        <small className="ml-3">(this will help you get better opportunities)</small>
                                    </label> <input type="text" className="input w-full border mt-2" placeholder="https://example.com"/>
                                </div>

                                <p className="pt-5 font-extrabold">Please upload your portfolio screenshots if applicable:</p>
                                <form action="/file-upload" className="dropzone mt-5 border-gray-200 border-dashed">
                                    <div className="fallback"> <input name="file" type="file" multiple /> </div>
                                    <div className="dz-message" data-dz-message>
                                        <div className="text-lg font-medium">Drop files here or click to upload.</div>
                                        <div className="text-gray-600"> Upload your specific project files or portfolio here. <br /><span className="font-medium">Helps clients understand them better!</span> </div>
                                    </div>
                                </form>
                                <div className="pt-5">
                                    <div className="text-center ml-auto w-56">
                                        <button className="button w-24 mr-1 mb-2 border text-gray-700">Cancel</button>
                                        <button className="button w-24 mb-2 bg-theme-9 text-white">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion__pane border border-gray-200 p-4 mt-3">
                            <a href="javascript:;" className="accordion__pane__toggle font-medium block">Understanding IP Addresses, Subnets, and CIDR Notation</a>
                            <div className="accordion__pane__content mt-3 text-gray-700 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                        </div>
                        <div className="accordion__pane border border-gray-200 p-4 mt-3">
                            <a href="javascript:;" className="accordion__pane__toggle font-medium block">How To Troubleshoot Common HTTP Error Codes</a>
                            <div className="accordion__pane__content mt-3 text-gray-700 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                        </div>
                        <div className="accordion__pane border border-gray-200 p-4 mt-3">
                            <a href="javascript:;" className="accordion__pane__toggle font-medium block">An Introduction to Securing your Linux VPS</a>
                            <div className="accordion__pane__content mt-3 text-gray-700 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                        </div>
                    </div>
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

export default PersonalProfile