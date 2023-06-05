import React from "react";
import { BarChart2, Home, User, Users, Inbox, Briefcase, FileText, List, Send, MessageCircle, ChevronRight, Search, CreditCard, Bell, Edit, Lock, HelpCircle, ToggleRight, Edit3, Star, Bookmark, Plus, ChevronDown, Settings, RefreshCw, MoreHorizontal, ChevronLeft, Trash } from "react-feather";
const InboxPage = () => {
return (
    // BEGIN: Mobile Menu 
        <div className="mobile-menu md:hidden">
            <div className="mobile-menu-bar">
                <a href="" className="flex mr-auto">
                    <img alt="Midone Tailwind HTML Admin Template" className="w-6" src="dist/images/logo.svg"/>
                </a>
                <a href="javascript:;" id="mobile-menu-toggler"> <BarChart2 className="w-8 h-8 text-white transform -rotate-90"/> </a>
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
                    <a href="company-profile.html" className="side-menu">
                        <div className="side-menu__icon"> <Users/> </div>
                        <div className="side-menu__title"> Company Profile </div>
                    </a>
                </li>
                <li className="side-nav__devider my-6"></li>
                <li>
                    <a href="inbox.html" className="side-menu side-menu--active">
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
            {/* BEGIN: Content  */}
            <div className="content">
                <div className="grid grid-cols-12 gap-6 mt-8">
                    <div className="col-span-12 lg:col-span-3 xxl:col-span-2">
                        <h2 className="intro-y text-lg font-medium mr-auto mt-2">
                            Inbox
                        </h2>
                        {/* BEGIN: Inbox Menu  */}
                        <div className="intro-y box bg-theme-1 p-5 mt-6">
                            <button type="button" className="button button--lg flex items-center justify-center text-gray-700 w-full bg-white mt-2"> <Edit3 className="w-4 h-4 mr-2"/> Compose </button>
                            <div className="border-t border-theme-3 mt-6 pt-6 text-white">
                                <a href="" className="flex items-center px-3 py-2 rounded-md bg-theme-22 font-medium"> <Inbox className="w-4 h-4 mr-2"/> Inbox </a>
                                <a href="" className="flex items-center px-3 py-2 mt-2 rounded-md"> <Star className="w-4 h-4 mr-2"/> Marked </a>
                                <a href="" className="flex items-center px-3 py-2 mt-2 rounded-md"> <Inbox className="w-4 h-4 mr-2"/> Draft </a>
                                <a href="" className="flex items-center px-3 py-2 mt-2 rounded-md"> <Send className="w-4 h-4 mr-2"/> Sent </a>
                                <a href="" className="flex items-center px-3 py-2 mt-2 rounded-md"> <Trash className="w-4 h-4 mr-2" /> Trash </a>
                            </div>
                            <div className="border-t border-theme-3 mt-5 pt-5 text-white">
                                <a href="" className="flex items-center px-3 py-2 truncate">
                                    <div className="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
                                    Custom Work 
                                </a>
                                <a href="" className="flex items-center px-3 py-2 mt-2 rounded-md truncate">
                                    <div className="w-2 h-2 bg-theme-9 rounded-full mr-3"></div>
                                    Important Meetings 
                                </a>
                                <a href="" className="flex items-center px-3 py-2 mt-2 rounded-md truncate">
                                    <div className="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
                                    Work 
                                </a>
                                <a href="" className="flex items-center px-3 py-2 mt-2 rounded-md truncate">
                                    <div className="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
                                    Design 
                                </a>
                                <a href="" className="flex items-center px-3 py-2 mt-2 rounded-md truncate">
                                    <div className="w-2 h-2 bg-theme-6 rounded-full mr-3"></div>
                                    Next Week 
                                </a>
                                <a href="" className="flex items-center px-3 py-2 mt-2 rounded-md truncate"> <Plus className="w-4 h-4 mr-2"/> Add New Label </a>
                            </div>
                        </div>
                        {/* END: Inbox Menu  */}
                    </div>
                    <div className="col-span-12 lg:col-span-9 xxl:col-span-10">
                        {/* BEGIN: Inbox Filter  */}
                        <div className="intro-y flex flex-col-reverse sm:flex-row items-center">
                            <div className="w-full sm:w-auto relative mr-auto mt-3 sm:mt-0">
                                <Search className="w-4 h-4 absolute my-auto inset-y-0 ml-3 left-0 z-10 text-gray-700"/> 
                                <input type="text" className="input w-full sm:w-64 box px-10 text-gray-700 placeholder-theme-13" placeholder="Search mail"/>
                                <div className="inbox-filter dropdown absolute inset-y-0 mr-3 right-0 flex items-center">
                                    <ChevronDown className="dropdown-toggle w-4 h-4 cursor-pointer text-gray-700"/> 
                                    <div className="inbox-filter__dropdown-box dropdown-box mt-10 absolute top-0 left-0 z-20">
                                        <div className="dropdown-box__content box p-5">
                                            <div className="grid grid-cols-12 gap-4 row-gap-3">
                                                <div className="col-span-6">
                                                    <div className="text-xs">From</div>
                                                    <input type="text" className="input w-full border mt-2 flex-1" placeholder="example@gmail.com"/>
                                                </div>
                                                <div className="col-span-6">
                                                    <div className="text-xs">To</div>
                                                    <input type="text" className="input w-full border mt-2 flex-1" placeholder="example@gmail.com"/>
                                                </div>
                                                <div className="col-span-6">
                                                    <div className="text-xs">Subject</div>
                                                    <input type="text" className="input w-full border mt-2 flex-1" placeholder="Important Meeting"/>
                                                </div>
                                                <div className="col-span-6">
                                                    <div className="text-xs">Has the Words</div>
                                                    <input type="text" className="input w-full border mt-2 flex-1" placeholder="Job, Work, Documentation"/>
                                                </div>
                                                <div className="col-span-6">
                                                    <div className="text-xs">Doesn't Have</div>
                                                    <input type="text" className="input w-full border mt-2 flex-1" placeholder="Job, Work, Documentation"/>
                                                </div>
                                                <div className="col-span-6">
                                                    <div className="text-xs">Size</div>
                                                    <select className="input w-full border mt-2 flex-1">
                                                        <option>10</option>
                                                        <option>25</option>
                                                        <option>35</option>
                                                        <option>50</option>
                                                    </select>
                                                </div>
                                                <div className="col-span-12 flex items-center mt-3">
                                                    <button className="button w-32 justify-center block bg-gray-200 text-gray-600 ml-auto">Create Filter</button>
                                                    <button className="button w-32 justify-center block bg-theme-1 text-white ml-2">Search</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-auto flex">
                                <button className="button text-white bg-theme-1 shadow-md mr-2">Start a Video Call</button>
                                <div className="dropdown relative">
                                    <button className="dropdown-toggle button px-2 box text-gray-700">
                                        <span className="w-5 h-5 flex items-center justify-center"> <Plus className="w-4 h-4"/> </span>
                                    </button>
                                    <div className="dropdown-box mt-10 absolute w-40 top-0 right-0 z-20">
                                        <div className="dropdown-box__content box p-2">
                                            <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"> <User className="w-4 h-4 mr-2"/> Contacts </a>
                                            <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"> <Settings className="w-4 h-4 mr-2"/> Settings </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END: Inbox Filter  */}
                        {/* BEGIN: Inbox Content  */}
                        <div className="intro-y inbox box mt-5">
                            <div className="p-5 flex flex-col-reverse sm:flex-row text-gray-600 border-b border-gray-200">
                                <div className="flex items-center mt-3 sm:mt-0 border-t sm:border-0 border-gray-200 pt-5 sm:pt-0 mt-5 sm:mt-0 -mx-5 sm:mx-0 px-5 sm:px-0">
                                    <input className="input border border-gray-500" type="checkbox"/>
                                    <div className="dropdown relative ml-1">
                                        <a className="dropdown-toggle w-5 h-5 block" href="javascript:;"> <ChevronDown className="w-5 h-5"/> </a>
                                        <div className="dropdown-box mt-6 absolute w-32 top-0 left-0 z-20">
                                            <div className="dropdown-box__content box p-2"> <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md">All</a> <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md">None</a> <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md">Read</a> <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md">Unread</a> <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md">Starred</a> <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md">Unstarred</a> </div>
                                        </div>
                                    </div>
                                    <a href="javascript:;" className="w-5 h-5 ml-5 flex items-center justify-center"> <RefreshCw className="w-4 h-4"/> </a>
                                    <a href="javascript:;" className="w-5 h-5 ml-5 flex items-center justify-center"> <MoreHorizontal className="w-4 h-4"/> </a>
                                </div>
                                <div className="flex items-center sm:ml-auto">
                                    <div>1 - 50 of 5,238</div>
                                    <a href="javascript:;" className="w-5 h-5 ml-5 flex items-center justify-center"> <ChevronLeft className="w-4 h-4"/> </a>
                                    <a href="javascript:;" className="w-5 h-5 ml-5 flex items-center justify-center"> <ChevronRight className="w-4 h-4"/> </a>
                                    <a href="javascript:;" className="w-5 h-5 ml-5 flex items-center justify-center"> <Settings className="w-4 h-4"/> </a>
                                </div>
                            </div>
                            <div className="overflow-x-auto sm:overflow-x-visible">
                                <div className="intro-y">
                                    <div className="inbox__item inbox__item--active inline-block sm:block text-gray-700 bg-gray-100 border-b border-gray-200">
                                        <div className="flex px-5 py-3">
                                            <div className="w-56 flex-none flex items-center mr-10">
                                                <input className="input flex-none border border-gray-500" type="checkbox" />
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-4 flex items-center justify-center text-gray-500"> <Star className="w-4 h-4"/> </a>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-2 flex items-center justify-center text-gray-500"> <Bookmark className="w-4 h-4"/> </a>
                                                <div className="w-6 h-6 flex-none image-fit relative ml-5">
                                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-8.jpg"/>
                                                </div>
                                                <div className="inbox__item--sender truncate ml-3">Kevin Spacey</div>
                                            </div>
                                            <div className="w-64 sm:w-auto truncate"> <span className="inbox__item--highlight">There are many variations of passages of Lorem Ips</span> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi </div>
                                            <div className="inbox__item--time whitespace-no-wrap ml-auto pl-10">01:10 PM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="inbox__item inbox__item--active inline-block sm:block text-gray-700 bg-gray-100 border-b border-gray-200">
                                        <div className="flex px-5 py-3">
                                            <div className="w-56 flex-none flex items-center mr-10">
                                                <input className="input flex-none border border-gray-500" type="checkbox"/>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-4 flex items-center justify-center text-gray-500"> <Star className="w-4 h-4"/> </a>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-2 flex items-center justify-center text-gray-500"> <Bookmark className="w-4 h-4"/> </a>
                                                <div className="w-6 h-6 flex-none image-fit relative ml-5">
                                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-10.jpg"/>
                                                </div>
                                                <div className="inbox__item--sender truncate ml-3">Russell Crowe</div>
                                            </div>
                                            <div className="w-64 sm:w-auto truncate"> <span className="inbox__item--highlight">Contrary to popular belief, Lo</span> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20 </div>
                                            <div className="inbox__item--time whitespace-no-wrap ml-auto pl-10">01:10 PM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="inbox__item inbox__item--active inline-block sm:block text-gray-700 bg-gray-100 border-b border-gray-200">
                                        <div className="flex px-5 py-3">
                                            <div className="w-56 flex-none flex items-center mr-10">
                                                <input className="input flex-none border border-gray-500" type="checkbox"/>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-4 flex items-center justify-center text-gray-500"> <Star className="w-4 h-4"/> </a>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-2 flex items-center justify-center text-gray-500"> <Bookmark className="w-4 h-4"/> </a>
                                                <div className="w-6 h-6 flex-none image-fit relative ml-5">
                                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-13.jpg"/>
                                                </div>
                                                <div className="inbox__item--sender truncate ml-3">Russell Crowe</div>
                                            </div>
                                            <div className="w-64 sm:w-auto truncate"> <span className="inbox__item--highlight">Contrary to popular belief, Lo</span> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20 </div>
                                            <div className="inbox__item--time whitespace-no-wrap ml-auto pl-10">01:10 PM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="inbox__item inbox__item--active inline-block sm:block text-gray-700 bg-gray-100 border-b border-gray-200">
                                        <div className="flex px-5 py-3">
                                            <div className="w-56 flex-none flex items-center mr-10">
                                                <input className="input flex-none border border-gray-500" type="checkbox" />
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-4 flex items-center justify-center text-gray-500"> <Star className="w-4 h-4"/> </a>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-2 flex items-center justify-center text-gray-500"> <Bookmark className="w-4 h-4" /> </a>
                                                <div className="w-6 h-6 flex-none image-fit relative ml-5">
                                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-13.jpg"/>
                                                </div>
                                                <div className="inbox__item--sender truncate ml-3">Leonardo DiCaprio</div>
                                            </div>
                                            <div className="w-64 sm:w-auto truncate"> <span className="inbox__item--highlight">There are many variations of passages of Lorem Ips</span> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi </div>
                                            <div className="inbox__item--time whitespace-no-wrap ml-auto pl-10">01:10 PM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="inbox__item inbox__item--active inline-block sm:block text-gray-700 bg-gray-100 border-b border-gray-200">
                                        <div className="flex px-5 py-3">
                                            <div className="w-56 flex-none flex items-center mr-10">
                                                <input className="input flex-none border border-gray-500" type="checkbox"/>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-4 flex items-center justify-center text-gray-500"> <Star className="w-4 h-4"/> </a>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-2 flex items-center justify-center text-gray-500"> <Bookmark className="w-4 h-4" /> </a>
                                                <div className="w-6 h-6 flex-none image-fit relative ml-5">
                                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-5.jpg"/>
                                                </div>
                                                <div className="inbox__item--sender truncate ml-3">Kate Winslet</div>
                                            </div>
                                            <div className="w-64 sm:w-auto truncate"> <span className="inbox__item--highlight">There are many variations of passages of Lorem Ips</span> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi </div>
                                            <div className="inbox__item--time whitespace-no-wrap ml-auto pl-10">01:10 PM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="inbox__item inbox__item--active inline-block sm:block text-gray-700 bg-gray-100 border-b border-gray-200">
                                        <div className="flex px-5 py-3">
                                            <div className="w-56 flex-none flex items-center mr-10">
                                                <input className="input flex-none border border-gray-500" type="checkbox"/>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-4 flex items-center justify-center text-gray-500"> <Star className="w-4 h-4"/> </a>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-2 flex items-center justify-center text-gray-500"> <Bookmark className="w-4 h-4" /> </a>
                                                <div className="w-6 h-6 flex-none image-fit relative ml-5">
                                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-3.jpg"/>
                                                </div>
                                                <div className="inbox__item--sender truncate ml-3">Leonardo DiCaprio</div>
                                            </div>
                                            <div className="w-64 sm:w-auto truncate"> <span className="inbox__item--highlight">Lorem Ipsum is simply dummy te</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500 </div>
                                            <div className="inbox__item--time whitespace-no-wrap ml-auto pl-10">05:09 AM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="inbox__item inbox__item--active inline-block sm:block text-gray-700 bg-gray-100 border-b border-gray-200">
                                        <div className="flex px-5 py-3">
                                            <div className="w-56 flex-none flex items-center mr-10">
                                                <input className="input flex-none border border-gray-500" type="checkbox"/>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-4 flex items-center justify-center text-gray-500"> <Star className="w-4 h-4"/> </a>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-2 flex items-center justify-center text-gray-500"> <Bookmark className="w-4 h-4" /> </a>
                                                <div className="w-6 h-6 flex-none image-fit relative ml-5">
                                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-11.jpg"/>
                                                </div>
                                                <div className="inbox__item--sender truncate ml-3">Edward Norton</div>
                                            </div>
                                            <div className="w-64 sm:w-auto truncate"> <span className="inbox__item--highlight">There are many variations of passages of Lorem Ips</span> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi </div>
                                            <div className="inbox__item--time whitespace-no-wrap ml-auto pl-10">03:20 PM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="inbox__item inbox__item--active inline-block sm:block text-gray-700 bg-gray-100 border-b border-gray-200">
                                        <div className="flex px-5 py-3">
                                            <div className="w-56 flex-none flex items-center mr-10">
                                                <input className="input flex-none border border-gray-500" type="checkbox"/>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-4 flex items-center justify-center text-gray-500"> <Star className="w-4 h-4"/> </a>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-2 flex items-center justify-center text-gray-500"> <Bookmark className="w-4 h-4" /> </a>
                                                <div className="w-6 h-6 flex-none image-fit relative ml-5">
                                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-10.jpg"/>
                                                </div>
                                                <div className="inbox__item--sender truncate ml-3">Kevin Spacey</div>
                                            </div>
                                            <div className="w-64 sm:w-auto truncate"> <span className="inbox__item--highlight">Lorem Ipsum is simply dummy te</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500 </div>
                                            <div className="inbox__item--time whitespace-no-wrap ml-auto pl-10">05:09 AM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="inbox__item inbox__item--active inline-block sm:block text-gray-700 bg-gray-100 border-b border-gray-200">
                                        <div className="flex px-5 py-3">
                                            <div className="w-56 flex-none flex items-center mr-10">
                                                <input className="input flex-none border border-gray-500" type="checkbox"/>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-4 flex items-center justify-center text-gray-500"> <Star className="w-4 h-4"/> </a>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-2 flex items-center justify-center text-gray-500"> <Bookmark className="w-4 h-4" /> </a>
                                                <div className="w-6 h-6 flex-none image-fit relative ml-5">
                                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-3.jpg"/>
                                                </div>
                                                <div className="inbox__item--sender truncate ml-3">Denzel Washington</div>
                                            </div>
                                            <div className="w-64 sm:w-auto truncate"> <span className="inbox__item--highlight">Lorem Ipsum is simply dummy te</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500 </div>
                                            <div className="inbox__item--time whitespace-no-wrap ml-auto pl-10">01:10 PM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="inbox__item inbox__item--active inline-block sm:block text-gray-700 bg-gray-100 border-b border-gray-200">
                                        <div className="flex px-5 py-3">
                                            <div className="w-56 flex-none flex items-center mr-10">
                                                <input className="input flex-none border border-gray-500" type="checkbox"/>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-4 flex items-center justify-center text-gray-500"> <Star className="w-4 h-4"/> </a>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-2 flex items-center justify-center text-gray-500"> <Bookmark className="w-4 h-4" /> </a>
                                                <div className="w-6 h-6 flex-none image-fit relative ml-5">
                                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-6.jpg"/>
                                                </div>
                                                <div className="inbox__item--sender truncate ml-3">Robert De Niro</div>
                                            </div>
                                            <div className="w-64 sm:w-auto truncate"> <span className="inbox__item--highlight">Lorem Ipsum is simply dummy te</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500 </div>
                                            <div className="inbox__item--time whitespace-no-wrap ml-auto pl-10">01:10 PM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="inbox__item inline-block sm:block text-gray-700 bg-gray-100 border-b border-gray-200">
                                        <div className="flex px-5 py-3">
                                            <div className="w-56 flex-none flex items-center mr-10">
                                                <input className="input flex-none border border-gray-500" type="checkbox" checked/>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-4 flex items-center justify-center text-gray-500"> <Star className="w-4 h-4"/> </a>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-2 flex items-center justify-center text-gray-500"> <Bookmark className="w-4 h-4" /> </a>
                                                <div className="w-6 h-6 flex-none image-fit relative ml-5">
                                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-5.jpg"/>
                                                </div>
                                                <div className="inbox__item--sender truncate ml-3">Brad Pitt</div>
                                            </div>
                                            <div className="w-64 sm:w-auto truncate"> <span className="inbox__item--highlight">Contrary to popular belief, Lo</span> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20 </div>
                                            <div className="inbox__item--time whitespace-no-wrap ml-auto pl-10">01:10 PM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="inbox__item inbox__item--active inline-block sm:block text-gray-700 bg-gray-100 border-b border-gray-200">
                                        <div className="flex px-5 py-3">
                                            <div className="w-56 flex-none flex items-center mr-10">
                                                <input className="input flex-none border border-gray-500" type="checkbox"/>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-4 flex items-center justify-center text-gray-500"> <Star className="w-4 h-4"/> </a>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-2 flex items-center justify-center text-gray-500"> <Bookmark className="w-4 h-4" /> </a>
                                                <div className="w-6 h-6 flex-none image-fit relative ml-5">
                                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-11.jpg"/>
                                                </div>
                                                <div className="inbox__item--sender truncate ml-3">Hugh Jackman</div>
                                            </div>
                                            <div className="w-64 sm:w-auto truncate"> <span className="inbox__item--highlight">Contrary to popular belief, Lo</span> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20 </div>
                                            <div className="inbox__item--time whitespace-no-wrap ml-auto pl-10">03:20 PM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="inbox__item inbox__item--active inline-block sm:block text-gray-700 bg-gray-100 border-b border-gray-200">
                                        <div className="flex px-5 py-3">
                                            <div className="w-56 flex-none flex items-center mr-10">
                                                <input className="input flex-none border border-gray-500" type="checkbox"/>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-4 flex items-center justify-center text-gray-500"> <Star className="w-4 h-4"/> </a>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-2 flex items-center justify-center text-gray-500"> <Bookmark className="w-4 h-4" /> </a>
                                                <div className="w-6 h-6 flex-none image-fit relative ml-5">
                                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-9.jpg"/>
                                                </div>
                                                <div className="inbox__item--sender truncate ml-3">Arnold Schwarzenegger</div>
                                            </div>
                                            <div className="w-64 sm:w-auto truncate"> <span className="inbox__item--highlight">Lorem Ipsum is simply dummy te</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500 </div>
                                            <div className="inbox__item--time whitespace-no-wrap ml-auto pl-10">01:10 PM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="inbox__item inbox__item--active inline-block sm:block text-gray-700 bg-gray-100 border-b border-gray-200">
                                        <div className="flex px-5 py-3">
                                            <div className="w-56 flex-none flex items-center mr-10">
                                                <input className="input flex-none border border-gray-500" type="checkbox"/>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-4 flex items-center justify-center text-gray-500"> <Star className="w-4 h-4"/> </a>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-2 flex items-center justify-center text-gray-500"> <Bookmark className="w-4 h-4" /> </a>
                                                <div className="w-6 h-6 flex-none image-fit relative ml-5">
                                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-10.jpg"/>
                                                </div>
                                                <div className="inbox__item--sender truncate ml-3">Sylvester Stallone</div>
                                            </div>
                                            <div className="w-64 sm:w-auto truncate"> <span className="inbox__item--highlight">Lorem Ipsum is simply dummy te</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500 </div>
                                            <div className="inbox__item--time whitespace-no-wrap ml-auto pl-10">01:10 PM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="inbox__item inbox__item--active inline-block sm:block text-gray-700 bg-gray-100 border-b border-gray-200">
                                        <div className="flex px-5 py-3">
                                            <div className="w-56 flex-none flex items-center mr-10">
                                                <input className="input flex-none border border-gray-500" type="checkbox"/>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-4 flex items-center justify-center text-gray-500"> <Star className="w-4 h-4"/> </a>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-2 flex items-center justify-center text-gray-500"> <Bookmark className="w-4 h-4" /> </a>
                                                <div className="w-6 h-6 flex-none image-fit relative ml-5">
                                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-13.jpg"/>
                                                </div>
                                                <div className="inbox__item--sender truncate ml-3">Al Pacino</div>
                                            </div>
                                            <div className="w-64 sm:w-auto truncate"> <span className="inbox__item--highlight">Contrary to popular belief, Lo</span> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20 </div>
                                            <div className="inbox__item--time whitespace-no-wrap ml-auto pl-10">01:10 PM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="inbox__item inbox__item--active inline-block sm:block text-gray-700 bg-gray-100 border-b border-gray-200">
                                        <div className="flex px-5 py-3">
                                            <div className="w-56 flex-none flex items-center mr-10">
                                                <input className="input flex-none border border-gray-500" type="checkbox"/>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-4 flex items-center justify-center text-gray-500"> <Star className="w-4 h-4"/> </a>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-2 flex items-center justify-center text-gray-500"> <Bookmark className="w-4 h-4" /> </a>
                                                <div className="w-6 h-6 flex-none image-fit relative ml-5">
                                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-2.jpg"/>
                                                </div>
                                                <div className="inbox__item--sender truncate ml-3">Robert De Niro</div>
                                            </div>
                                            <div className="w-64 sm:w-auto truncate"> <span className="inbox__item--highlight">Contrary to popular belief, Lo</span> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20 </div>
                                            <div className="inbox__item--time whitespace-no-wrap ml-auto pl-10">01:10 PM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="inbox__item inline-block sm:block text-gray-700 bg-gray-100 border-b border-gray-200">
                                        <div className="flex px-5 py-3">
                                            <div className="w-56 flex-none flex items-center mr-10">
                                                <input className="input flex-none border border-gray-500" type="checkbox" checked/>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-4 flex items-center justify-center text-gray-500"> <Star className="w-4 h-4"/> </a>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-2 flex items-center justify-center text-gray-500"> <Bookmark className="w-4 h-4" /> </a>
                                                <div className="w-6 h-6 flex-none image-fit relative ml-5">
                                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-4.jpg"/>
                                                </div>
                                                <div className="inbox__item--sender truncate ml-3">Angelina Jolie</div>
                                            </div>
                                            <div className="w-64 sm:w-auto truncate"> <span className="inbox__item--highlight">There are many variations of passages of Lorem Ips</span> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi </div>
                                            <div className="inbox__item--time whitespace-no-wrap ml-auto pl-10">01:10 PM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="inbox__item inbox__item--active inline-block sm:block text-gray-700 bg-gray-100 border-b border-gray-200">
                                        <div className="flex px-5 py-3">
                                            <div className="w-56 flex-none flex items-center mr-10">
                                                <input className="input flex-none border border-gray-500" type="checkbox" />
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-4 flex items-center justify-center text-gray-500"> <Star className="w-4 h-4"/> </a>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-2 flex items-center justify-center text-gray-500"> <Bookmark className="w-4 h-4" /> </a>
                                                <div className="w-6 h-6 flex-none image-fit relative ml-5">
                                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-5.jpg"/>
                                                </div>
                                                <div className="inbox__item--sender truncate ml-3">Morgan Freeman</div>
                                            </div>
                                            <div className="w-64 sm:w-auto truncate"> <span className="inbox__item--highlight">Contrary to popular belief, Lo</span> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20 </div>
                                            <div className="inbox__item--time whitespace-no-wrap ml-auto pl-10">06:05 AM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="inbox__item inline-block sm:block text-gray-700 bg-gray-100 border-b border-gray-200">
                                        <div className="flex px-5 py-3">
                                            <div className="w-56 flex-none flex items-center mr-10">
                                                <input className="input flex-none border border-gray-500" type="checkbox" checked/>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-4 flex items-center justify-center text-gray-500"> <Star className="w-4 h-4"/> </a>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-2 flex items-center justify-center text-gray-500"> <Bookmark className="w-4 h-4"/> </a>
                                                <div className="w-6 h-6 flex-none image-fit relative ml-5">
                                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-4.jpg"/>
                                                </div>
                                                <div className="inbox__item--sender truncate ml-3">Tom Cruise</div>
                                            </div>
                                            <div className="w-64 sm:w-auto truncate"> <span className="inbox__item--highlight">Contrary to popular belief, Lo</span> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20 </div>
                                            <div className="inbox__item--time whitespace-no-wrap ml-auto pl-10">03:20 PM</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="inbox__item inline-block sm:block text-gray-700 bg-gray-100 border-b border-gray-200">
                                        <div className="flex px-5 py-3">
                                            <div className="w-56 flex-none flex items-center mr-10">
                                                <input className="input flex-none border border-gray-500" type="checkbox" checked/>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-4 flex items-center justify-center text-gray-500"> <Star className="w-4 h-4"/> </a>
                                                <a href="javascript:;" className="w-5 h-5 flex-none ml-2 flex items-center justify-center text-gray-500"> <Bookmark className="w-4 h-4"/> </a>
                                                <div className="w-6 h-6 flex-none image-fit relative ml-5">
                                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-1.jpg"/>
                                                </div>
                                                <div className="inbox__item--sender truncate ml-3">Morgan Freeman</div>
                                            </div>
                                            <div className="w-64 sm:w-auto truncate"> <span className="inbox__item--highlight">It is a long established fact </span> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                                            <div className="inbox__item--time whitespace-no-wrap ml-auto pl-10">01:10 PM</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 flex flex-col sm:flex-row items-center text-center sm:text-left text-gray-600">
                                <div>4.41 GB (25%) of 17 GB used Manage</div>
                                <div className="sm:ml-auto mt-2 sm:mt-0">Last account activity: 36 minutes ago</div>
                            </div>
                        </div>
                        {/* END: Inbox Content  */}
                    </div>
                </div>
            </div>
            {/* END: Content  */}
        </div>

)
}

export default InboxPage