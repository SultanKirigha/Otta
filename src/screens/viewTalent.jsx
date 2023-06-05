import React from "react";
import { ChevronRight, BarChart2, Home, User, Inbox, Briefcase, FileText, List, Send, MessageCircle, Search, Users, CreditCard, Edit, Lock, HelpCircle, ToggleRight, Plus, MoreHorizontal, Edit2, Trash, Coffee, Bell, Calendar, File } from "react-feather";
const ViewTalent = () => {
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
           <a href="personal-profile.html" className="side-menu ">
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
           <a href="view-talent.html" className="side-menu side-menu--active">
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
    <div class="flex">
        {/* BEGIN: Content  */}
        <div class="content">
            <h2 class="intro-y text-lg font-medium mt-10">
                Users Layout
            </h2>
            <div class="grid grid-cols-12 gap-6 mt-5">
                <div class="intro-y col-span-12 flex flex-wrap sm:flex-no-wrap items-center mt-2">
                    <button class="button text-white bg-theme-1 shadow-md mr-2">Add New User</button>
                    <div class="dropdown relative">
                        <button class="dropdown-toggle button px-2 box text-gray-700">
                            <span class="w-5 h-5 flex items-center justify-center"> <Plus class="w-4 h-4"/> </span>
                        </button>
                        <div class="dropdown-box mt-10 absolute w-40 top-0 left-0 z-20">
                            <div class="dropdown-box__content box p-2">
                                <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"> <Users class="w-4 h-4 mr-2"/> Add Group </a>
                                <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"> <MessageCircle class="w-4 h-4 mr-2"/> Send Message </a>
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:block mx-auto text-gray-600">Showing 1 to 10 of 150 entries</div>
                    <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                        <div class="w-56 relative text-gray-700">
                            <input type="text" class="input w-56 box pr-10 placeholder-theme-13" placeholder="Search..."/>
                            <Search class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"/>
                        </div>
                    </div>
                </div>
                {/* BEGIN: Users Layout  */}
                <div class="intro-y col-span-12 md:col-span-6 lg:col-span-4">
                    <div class="box">
                        <div class="flex items-start px-5 py-5 border-b border-gray-200">
                            <div class="w-full flex flex-col lg:flex-row items-center">
                                <div class="w-16 h-16 image-fit">
                                    <img alt="Midone Tailwind HTML Admin Template" class="rounded-md" src="dist/images/profile-7.jpg"/>
                                </div>
                                <div class="lg:ml-4 text-center lg:text-left mt-3 lg:mt-0">
                                    <a href="" class="font-medium">Kate Winslet</a>
                                    <div class="text-gray-600 text-xs">DevOps Engineer</div>
                                </div>
                            </div>
                            <div class="absolute right-0 top-0 dropdown relative">
                                <a class="dropdown-toggle w-5 h-5 block" href="javascript:;"> <MoreHorizontal class="w-5 h-5 text-gray-700"/> </a>
                                <div class="dropdown-box mt-5 absolute w-40 top-0 right-0 z-20">
                                    <div class="dropdown-box__content box p-2">
                                        <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"> <Edit2 class="w-4 h-4 mr-2"/> Edit </a>
                                        <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"> <Trash class="w-4 h-4 mr-2"/> Delete </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-wrap lg:flex-no-wrap items-center justify-center px-5 py-4 border-b border-gray-200">
                            <div class="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
                                <div class="flex font-medium">
                                    <p class="font-medium"><span class="w-8 h-8 rounded-full p-1 items-center text-gray-700 zoom-in justify-center border border-gray-700 inline-block mr-1"><Coffee class="inline-block"/></span> Overall Experience</p>
                                </div>
                            </div>
                            <p>
                                <strong>11 years / 6 years remote</strong><br />
                                <span>Basic English proficiency</span>
                            </p>
                        </div>

                        <div class="flex flex-wrap lg:flex-no-wrap items-center justify-center p-5 border-b border-gray-200">
                            <div class="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
                                <div class="flex font-medium">
                                    <p class="font-medium"><span class="w-8 h-8 rounded-full p-1 items-center text-gray-700 zoom-in justify-center border border-gray-700 inline-block mr-1"><Calendar class="inline-block"/></span> Availability</p>
                                </div>
                            </div>
                            <p>
                                <strong>Full Time</strong><br />
                                <span>Ready to start in 1 month</span>
                            </p>
                        </div>
                        <div class="flex flex-wrap lg:flex-no-wrap items-center justify-center p-5 border-b border-gray-200">
                            <div class="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
                                <div class="flex font-medium">
                                    <p class="font-medium"><span class="w-8 h-8 rounded-full p-1 items-center text-gray-700 zoom-in justify-center border border-gray-700 inline-block mr-1"><Briefcase class="inline-block"/></span> Role &amp; current salary</p>
                                </div>
                            </div>
                            <p>
                                <strong>DevOps</strong><br />
                                <span>600,000 KES / Year</span>
                            </p>
                        </div>

                        <div class="text-center lg:text-left p-5 border-b border-gray-200">
                            <div>
                                <p class="leading-none mb-3 font-semibold"><span class="w-8 h-8 rounded-full p-1 items-center text-gray-700 zoom-in justify-center border border-gray-700 inline-block mr-1"><File class="inline-block"/></span>Projects:</p>
                                <span class="report-box__indicator border text-gray-700 cursor-pointer mr-1 px-1 py-1 rounded-full"><a href="javascript:;" data-toggle="modal" data-target="#project_one" class="tooltip button px-3 py-1 rounded-full" title="Mkesho: Equity Bank &amp; Safaricom">Mkesho</a></span>
                                <span class="report-box__indicator border text-gray-700 cursor-pointer mr-1 px-1 py-1 rounded-full"><a href="javascript:;" data-toggle="modal" data-target="#project_one" class="tooltip button px-3 py-1 rounded-full" title="U Club: Uchumi Supermarket">U Club Loyalty</a></span>
                            </div>
                        </div>
                        <div class="flex flex-wrap lg:flex-no-wrap items-center justify-center p-5">
                            <a href="javascript:;" data-toggle="modal" data-target="#getintouch" class="button button--sm w-40 mr-2 mb-2 flex items-center justify-center bg-theme-1 text-white"> <Send class="w-4 h-4 mr-2"/>Send Message</a>
                            <a href="javascript:;" data-toggle="modal" data-target="#large-modal-size-preview" class="button button--sm w-40 mr-2 mb-2 flex items-center justify-center border text-gray-700"> <FileText class="w-4 h-4 mr-2"/>View Resume</a>
                        </div>

                    </div>
                </div>

                <div class="intro-y col-span-12 md:col-span-6 lg:col-span-4">
                    <div class="box">
                        <div class="flex items-start px-5 py-5 border-b border-gray-200">
                            <div class="w-full flex flex-col lg:flex-row items-center">
                                <div class="w-16 h-16 image-fit">
                                    <img alt="Midone Tailwind HTML Admin Template" class="rounded-md" src="dist/images/profile-7.jpg"/>
                                </div>
                                <div class="lg:ml-4 text-center lg:text-left mt-3 lg:mt-0">
                                    <a href="" class="font-medium">Kate Winslet</a>
                                    <div class="text-gray-600 text-xs">DevOps Engineer</div>
                                </div>
                            </div>
                            <div class="absolute right-0 top-0 dropdown relative">
                                <a class="dropdown-toggle w-5 h-5 block" href="javascript:;"> <MoreHorizontal class="w-5 h-5 text-gray-700"/> </a>
                                <div class="dropdown-box mt-5 absolute w-40 top-0 right-0 z-20">
                                    <div class="dropdown-box__content box p-2">
                                        <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"> <Edit2 class="w-4 h-4 mr-2"/> Edit </a>
                                        <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"> <Trash class="w-4 h-4 mr-2"/> Delete </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-wrap lg:flex-no-wrap items-center justify-center px-5 py-4 border-b border-gray-200">
                            <div class="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
                                <div class="flex font-medium">
                                    <p class="font-medium"><span class="w-8 h-8 rounded-full p-1 items-center text-gray-700 zoom-in justify-center border border-gray-700 inline-block mr-1"><Coffee class="inline-block"/></span> Overall Experience</p>
                                </div>
                            </div>
                            <p>
                                <strong>11 years / 6 years remote</strong><br />
                                <span>Basic English proficiency</span>
                            </p>
                        </div>

                        <div class="flex flex-wrap lg:flex-no-wrap items-center justify-center p-5 border-b border-gray-200">
                            <div class="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
                                <div class="flex font-medium">
                                    <p class="font-medium"><span class="w-8 h-8 rounded-full p-1 items-center text-gray-700 zoom-in justify-center border border-gray-700 inline-block mr-1"><Calendar class="inline-block" /></span> Availability</p>
                                </div>
                            </div>
                            <p>
                                <strong>Full Time</strong><br />
                                <span>Ready to start in 1 month</span>
                            </p>
                        </div>
                        <div class="flex flex-wrap lg:flex-no-wrap items-center justify-center p-5 border-b border-gray-200">
                            <div class="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
                                <div class="flex font-medium">
                                    <p class="font-medium"><span class="w-8 h-8 rounded-full p-1 items-center text-gray-700 zoom-in justify-center border border-gray-700 inline-block mr-1"><Briefcase class="inline-block" /></span> Role &amp; current salary</p>
                                </div>
                            </div>
                            <p>
                                <strong>DevOps</strong><br />
                                <span>600,000 KES / Year</span>
                            </p>
                        </div>

                        <div class="text-center lg:text-left p-5 border-b border-gray-200">
                            <div>
                                <p class="leading-none mb-3 font-semibold"><span class="w-8 h-8 rounded-full p-1 items-center text-gray-700 zoom-in justify-center border border-gray-700 inline-block mr-1"><File class="inline-block"/></span>Projects:</p>
                                <span class="report-box__indicator border text-gray-700 cursor-pointer mr-1 px-1 py-1 rounded-full"><a href="javascript:;" data-toggle="modal" data-target="#project_one" class="tooltip button px-3 py-1 rounded-full" title="Mkesho: Equity Bank &amp; Safaricom">Mkesho</a></span>
                                <span class="report-box__indicator border text-gray-700 cursor-pointer mr-1 px-1 py-1 rounded-full"><a href="javascript:;" data-toggle="modal" data-target="#project_one" class="tooltip button px-3 py-1 rounded-full" title="U Club: Uchumi Supermarket">U Club Loyalty</a></span>
                            </div>
                        </div>
                        <div class="flex flex-wrap lg:flex-no-wrap items-center justify-center p-5">
                            <a href="javascript:;" data-toggle="modal" data-target="#getintouch" class="button button--sm w-40 mr-2 mb-2 flex items-center justify-center bg-theme-1 text-white"> <i data-feather="send" class="w-4 h-4 mr-2"/>Send Message</a>
                            <a href="javascript:;" data-toggle="modal" data-target="#large-modal-size-preview" class="button button--sm w-40 mr-2 mb-2 flex items-center justify-center border text-gray-700"> <FileText class="w-4 h-4 mr-2"/>View Resume</a>
                        </div>

                    </div>
                </div>

                <div class="intro-y col-span-12 md:col-span-6 lg:col-span-4">
                    <div class="box">
                        <div class="flex items-start px-5 py-5 border-b border-gray-200">
                            <div class="w-full flex flex-col lg:flex-row items-center">
                                <div class="w-16 h-16 image-fit">
                                    <img alt="Midone Tailwind HTML Admin Template" class="rounded-md" src="dist/images/profile-7.jpg"/>
                                </div>
                                <div class="lg:ml-4 text-center lg:text-left mt-3 lg:mt-0">
                                    <a href="" class="font-medium">Kate Winslet</a>
                                    <div class="text-gray-600 text-xs">DevOps Engineer</div>
                                </div>
                            </div>
                            <div class="absolute right-0 top-0 dropdown relative">
                                <a class="dropdown-toggle w-5 h-5 block" href="javascript:;"> <MoreHorizontal class="w-5 h-5 text-gray-700"/> </a>
                                <div class="dropdown-box mt-5 absolute w-40 top-0 right-0 z-20">
                                    <div class="dropdown-box__content box p-2">
                                        <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"> <Edit2 class="w-4 h-4 mr-2"/> Edit </a>
                                        <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"> <Trash class="w-4 h-4 mr-2"/> Delete </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-wrap lg:flex-no-wrap items-center justify-center px-5 py-4 border-b border-gray-200">
                            <div class="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
                                <div class="flex font-medium">
                                    <p class="font-medium"><span class="w-8 h-8 rounded-full p-1 items-center text-gray-700 zoom-in justify-center border border-gray-700 inline-block mr-1"><Coffee class="inline-block"/></span> Overall Experience</p>
                                </div>
                            </div>
                            <p>
                                <strong>11 years / 6 years remote</strong><br />
                                <span>Basic English proficiency</span>
                            </p>
                        </div>

                        <div class="flex flex-wrap lg:flex-no-wrap items-center justify-center p-5 border-b border-gray-200">
                            <div class="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
                                <div class="flex font-medium">
                                    <p class="font-medium"><span class="w-8 h-8 rounded-full p-1 items-center text-gray-700 zoom-in justify-center border border-gray-700 inline-block mr-1"><Calendar class="inline-block" /></span> Availability</p>
                                </div>
                            </div>
                            <p>
                                <strong>Full Time</strong><br />
                                <span>Ready to start in 1 month</span>
                            </p>
                        </div>
                        <div class="flex flex-wrap lg:flex-no-wrap items-center justify-center p-5 border-b border-gray-200">
                            <div class="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
                                <div class="flex font-medium">
                                    <p class="font-medium"><span class="w-8 h-8 rounded-full p-1 items-center text-gray-700 zoom-in justify-center border border-gray-700 inline-block mr-1"><Briefcase class="inline-block" /></span> Role &amp; current salary</p>
                                </div>
                            </div>
                            <p>
                                <strong>DevOps</strong><br />
                                <span>600,000 KES / Year</span>
                            </p>
                        </div>

                        <div class="text-center lg:text-left p-5 border-b border-gray-200">
                            <div>
                                <p class="leading-none mb-3 font-semibold"><span class="w-8 h-8 rounded-full p-1 items-center text-gray-700 zoom-in justify-center border border-gray-700 inline-block mr-1"><File class="inline-block"/></span>Projects:</p>
                                <span class="report-box__indicator border text-gray-700 cursor-pointer mr-1 px-1 py-1 rounded-full"><a href="javascript:;" data-toggle="modal" data-target="#project_one" class="tooltip button px-3 py-1 rounded-full" title="Mkesho: Equity Bank &amp; Safaricom">Mkesho</a></span>
                                <span class="report-box__indicator border text-gray-700 cursor-pointer mr-1 px-1 py-1 rounded-full"><a href="javascript:;" data-toggle="modal" data-target="#project_one" class="tooltip button px-3 py-1 rounded-full" title="U Club: Uchumi Supermarket">U Club Loyalty</a></span>
                            </div>
                        </div>
                        <div class="flex flex-wrap lg:flex-no-wrap items-center justify-center p-5">
                            <a href="javascript:;" data-toggle="modal" data-target="#getintouch" class="button button--sm w-40 mr-2 mb-2 flex items-center justify-center bg-theme-1 text-white"> <i data-feather="send" class="w-4 h-4 mr-2"/>Send Message</a>
                            <a href="javascript:;" data-toggle="modal" data-target="#large-modal-size-preview" class="button button--sm w-40 mr-2 mb-2 flex items-center justify-center border text-gray-700"> <FileText class="w-4 h-4 mr-2"/>View Resume</a>
                        </div>

                    </div>
                </div>
                                                                                            
                {/* END: Users Layout  */}
                {/* BEGIN: Pagination  */}
                <div class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-no-wrap items-center">
                    <ul class="pagination">
                        <li>
                            <a class="pagination__link" href=""> <i class="w-4 h-4" data-feather="chevrons-left"/> </a>
                        </li>
                        <li>
                            <a class="pagination__link" href=""> <i class="w-4 h-4" data-feather="chevron-left"/> </a>
                        </li>
                        <li> <a class="pagination__link" href="">...</a> </li>
                        <li> <a class="pagination__link" href="">1</a> </li>
                        <li> <a class="pagination__link pagination__link--active" href="">2</a> </li>
                        <li> <a class="pagination__link" href="">3</a> </li>
                        <li> <a class="pagination__link" href="">...</a> </li>
                        <li>
                            <a class="pagination__link" href=""> <i class="w-4 h-4" data-feather="chevron-right"/> </a>
                        </li>
                        <li>
                            <a class="pagination__link" href=""> <i class="w-4 h-4" data-feather="chevrons-right"/> </a>
                        </li>
                    </ul>
                    <select class="w-20 input box mt-3 sm:mt-0">
                        <option>10</option>
                        <option>25</option>
                        <option>35</option>
                        <option>50</option>
                    </select>
                </div>
                {/* END: Pagination  */}
            </div>
        </div>
        {/* END: Content  */}

        <div class="modal" id="large-modal-size-preview">
            <div class="modal__content modal__content--lg p-10">
                <div class="accordion">
                    <div class="accordion__pane active border border-gray-200 p-4">
                        <a href="javascript:;" class="text-xl accordion__pane__toggle font-medium block text-lg">Product Manager</a>
                        <div class="accordion__pane__content mt-3 text-gray-700 leading-relaxed">
                            <p class="text-theme-10 font-medium leading-none mt-3 border-b border-gray-200 pb-4">Canterbury Securities (2019/January - 2019/June)</p>
                            <h4 class="text-xl font-medium leading-none p-2 bg-gray-200 mt-3"><i class="w-4 h-4 inline-block mb-1" data-feather="list"/> Details:</h4>
                            <p class="pt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <p class="pt-4">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p class="pt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <p class="pt-4">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <div class="pt-4">
                                <h4 class="text-xl font-medium leading-none items-center p-2 bg-gray-200 mt-3 mb-2"><i class="w-4 h-4 inline-block mb-1" data-feather="cpu"/> Technologies:</h4>
                                <div class="font-semibold inline-block mb-2">(languages and frameworks), platform, and tools</div><br />
                                <span class="report-box__indicator bg-theme-1 text-white px-3 py-1 cursor-pointer rounded-full mr-1"> Android</span>
                                <span class="report-box__indicator bg-theme-1 text-white px-3 py-1 cursor-pointer rounded-full mr-1"> Python</span>
                                <span class="report-box__indicator bg-theme-1 text-white px-3 py-1 cursor-pointer rounded-full mr-1"> Web: HTML, CSS, jQuery</span>
                                <span class="report-box__indicator bg-theme-1 text-white px-3 py-1 cursor-pointer rounded-full mr-1"> Java</span>
                            </div>
                            <div class="pt-4">
                                <h4 class="text-xl font-medium leading-none p-2 bg-gray-200 mb-2 mt-3"><i class="w-4 h-4 inline-block mb-1" data-feather="file-text"/> Projects:</h4><br />
                                <a href="javascript:;" data-toggle="modal" data-target="#project_one" class="button w-24 mr-1 mb-2 rounded-full border text-gray-700">Project One (HTML,CSS,jQuery)</a>
                                <a href="javascript:;" data-toggle="modal" data-target="#project_one" class="button w-24 mr-1 mb-2 rounded-full border text-gray-700">Project Two (Ptyhon)</a>
                            </div>
                            <div class="pt-4">
                                <div>
                                    <h4 class="text-xl font-medium leading-none p-2 bg-gray-200 mt-3"><i class="w-4 h-4 inline-block mb-1" data-feather="target"/> Outcome:</h4>
                                    <ol>
                                        <li class="pt-2">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
                                        <li class="pt-2">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
                                        <li class="pt-2">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
                                    </ol>
                                </div>
                            </div>
                            <div class="pt-4">
                                <h4 class="text-xl font-medium leading-none p-2 bg-gray-200 mt-3"><i class="w-4 h-4 inline-block mb-1" data-feather="user-check"/> Recommendations Received:</h4><br />
                                <span class="report-box__indicator bg-theme-9 text-white px-3 py-1 cursor-pointer rounded-full mr-1 inline-block"> Android - 1 (33%) </span>
                                <span class="report-box__indicator bg-theme-9 text-white px-3 py-1 cursor-pointer rounded-full mr-1 inline-block"> Python - 3 (93%) </span>
                            </div>
                        </div>
                    </div>
                    <div class="accordion__pane border border-gray-200 p-4 mt-3">
                        <a href="javascript:;" class="text-xl accordion__pane__toggle font-medium block">Creative Strategist</a>
                        <div class="accordion__pane__content mt-3 text-gray-700 leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </div>
                    </div>
                    <div class="accordion__pane border border-gray-200 p-4 mt-3">
                        <a href="javascript:;" class="text-xl accordion__pane__toggle font-medium block">Creative Strategist 2</a>
                        <div class="accordion__pane__content mt-3 text-gray-700 leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="getintouch">
            <div class="modal__content modal__content--lg p-10">
                <form class="validate-form">
                    <div class="text-xl text-theme-10 font-medium leading-none mt-3 border-b border-gray-200 pb-4 mb-5">Connect with talent</div>
                    <div class="mt-3">
                        <label class="flex flex-col sm:flex-row"> Name <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600">Required, at least 2 characters</span> </label>
                        <input type="text" name="name" class="input w-full border mt-2" placeholder="John Legend" minlength="2" value="HR KCB Bank Ltd" required/>
                    </div>
                    <div class="mt-3">
                        <label class="flex flex-col sm:flex-row"> Role <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600">Role you want to hire for</span> </label>
                        <input type="text" name="name" class="input w-full border mt-2" placeholder="John Legend" minlength="2" value="Product Manager" required/>
                    </div>
                    <div class="mt-3">
                        <label class="flex flex-col sm:flex-row"> Email <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600">You can add another email address</span> </label>
                        <input type="email" name="email" class="input w-full border mt-2" placeholder="example@gmail.com" value="info@KCBBank.com" required/>
                    </div>
                    <div class="mt-3">
                        <label class="flex flex-col sm:flex-row"> Comment <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600">Required, at least 10 characters</span> </label>
                        <textarea class="input w-full border mt-2" name="comment" placeholder="Type your comments" minlength="10" required>Hi Mr. Wales, We would like to find out your interest in working with KCB Bank Ltd on the above roles.</textarea>
                    </div>
                    <button type="submit" class="w-full button bg-theme-1 text-white mt-5"><i class="w-4 h-4 inline-block mb-1" data-feather="send"/> Send Message</button>
                </form>
            </div>
        </div>

        {/* BEGIN: project_one */}
        <div class="modal" id="project_one">
            <div class="modal__content modal__content--lg p-5">
                <h3 class="text-2xl text-theme-1 font-medium leading-none mt-3 border-b border-gray-200 pb-4">Project Names</h3>
                <p class="pt-5"><strong>Details:</strong></p>
                <div class="flex items-center mt-2 ">
                    <div class="mr-2 w-56 flex"> Performance Rate: <span class="ml-auto font-medium text-theme-9">+23%</span> </div>
                    <div class="w-24 sm:w-32 lg:w-56"> <canvas class="simple-line-chart-1" data-random="true" height="50"></canvas> </div>
                </div>
                <p class="pt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p class="pt-4">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p class="pt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p class="pt-4">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p class="pt-4">
                    <strong class="pb-2 inline-block">Technologies (languages and frameworks), platform, and tools:</strong><br />
                    <span class="report-box__indicator bg-theme-1 text-white px-3 py-1 cursor-pointer rounded-full mr-1"> Android</span>
                    <span class="report-box__indicator bg-theme-1 text-white px-3 py-1 cursor-pointer rounded-full mr-1"> Python</span>
                    <span class="report-box__indicator bg-theme-1 text-white px-3 py-1 cursor-pointer rounded-full mr-1"> Web: HTML, CSS, jQuery</span>
                    <span class="report-box__indicator bg-theme-1 text-white px-3 py-1 cursor-pointer rounded-full mr-1"> Java</span>
                </p>
                <p class="pt-4"><strong>Outcome:</strong><br />It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p class="pt-4">
                    <strong class="pb-2 inline-block">Recommendations Received:</strong><br />
                    <span class="report-box__indicator bg-theme-9 text-white px-3 py-1 cursor-pointer rounded-full mr-1"> Android - 1 (33%) </span>
                    <span class="report-box__indicator bg-theme-9 text-white px-3 py-1 cursor-pointer rounded-full mr-1"> Python - 3 (93%) </span>
                </p>
            </div>
        </div>
        {/* END: project_ones */}

    </div>
    )
}

export default ViewTalent