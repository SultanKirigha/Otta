import React from "react";
import { BarChart2, Home, Briefcase, List, Send, MessageCircle, ChevronLeft, Bell, Book, Calendar, CheckSquare, ChevronRight, ChevronsLeft, ChevronsRight, Coffee, CreditCard, Edit, Facebook, FileText, Filter, HelpCircle, Inbox, Instagram, Linkedin, Lock, Mail, Plus, Pocket, Printer, Search, Share2, ToggleRight, Trash2, Twitter, User, UserPlus, Users, X, XCircle } from "react-feather";
const DataList = () => {
return (
    // BEGIN: Mobile Menue
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
    <div class="flex">
    {/* BEGIN: Content */}
    <div class="content">
        <h2 class="intro-y text-lg font-medium mt-10">
            Data List Layout
        </h2>
        <div class="grid grid-cols-12 gap-6 mt-5">
            <div class="intro-y col-span-12 flex flex-wrap sm:flex-no-wrap items-center">
                <div class="items-center pl-5">
                    <select class="input border mr-2">
                        <option>All Entry Type</option>
                        <option>Unread</option>
                        <option>Read</option>
                        <option>Trashed</option>
                    </select>
                </div>
                <div class="dropdown relative">
                    <button class="dropdown-toggle button px-2 box text-gray-700">
                        <span class="w-5 h-5 flex items-center justify-center"> <Plus class="w-4 h-4"/> </span>
                    </button>
                    <div class="dropdown-box mt-10 absolute w-40 top-0 left-0 z-20">
                        <div class="dropdown-box__content box p-2">
                            <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"> <Printer class="w-4 h-4 mr-2"/> Print </a>
                            <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"> <FileText class="w-4 h-4 mr-2"/> Export to Excel </a>
                            <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"> <FileText class="w-4 h-4 mr-2"/> Export to PDF </a>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block mx-auto text-gray-600">Showing 1 to 10 of 150 entries</div>
                <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                    <div class="w-40 relative text-gray-700">
                        <input type="text" class="input w-40 box pr-10 placeholder-theme-13" placeholder="Search..."/>
                        <Search class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"/>
                    </div>
                </div>
                <div class="text-center ml-3">
                    <a href="javascript:;" data-toggle="modal" data-target="#header-footer-modal-preview" class="button inline-block box border text-gray-700"> Advanced Filter <Filter class="w-4 h-4 inline-block ml-2" /> </a>
                </div>
                <div class="text-center ml-3">
                    <a href="javascript:;" data-toggle="modal" data-target="#action-filter" class="button inline-block box bg-theme-9 text-white"> Action Filter <Filter class="w-4 h-4 inline-block ml-2" /> </a>
                </div>
            </div>
            {/* BEGIN: Data List */}
            <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
                <table class="table table-report -mt-2">
                    <thead>
                        <tr>
                            <th class="whitespace-no-wrap">IMAGES</th>
                            <th class="whitespace-no-wrap">FULL NAME</th>
                            <th class="whitespace-no-wrap">JOB SECTOR</th>
                            <th class="whitespace-no-wrap">CURRENT ROLE</th>
                            <th class="whitespace-no-wrap">EXPERIENCE</th>
                            <th class="whitespace-no-wrap">SALARY (KES)</th>
                            <th class="text-center whitespace-no-wrap">STATUS</th>
                            <th class="text-center whitespace-no-wrap">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="intro-x">
                            <td class="w-40">
                                <div class="flex">
                                    <input type="checkbox" class="items-center inline-block input border mt-3 mr-5" id=""/>
                                    <div class="w-10 h-10 image-fit zoom-in">
                                        <img alt="Midone Tailwind HTML Admin Template" class="inline-block tooltip rounded-full" src="dist/images/preview-4.jpg" title="Uploaded at 17 July 2021"/>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">Michael Majajito</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">Product Manager</div>
                            </td>
                            <td>
                                <div class="flex flex-col sm:flex-row items-center">
                                    <div class="sm:mt-2">
                                        <select class="input input--sm border mr-2">
                                            <option>Design</option>
                                            <option>Development</option>
                                            <option>QA</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">Creative Desinger</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">Available</div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">10 Years</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">5 years remote</div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">100,000</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">30% increase</div>
                            </td>
                            <td class="w-40">
                                <div class="flex items-center justify-center text-theme-6"> <CheckSquare class="w-4 h-4 mr-2"/> Inactive </div>
                            </td>
                            <td class="table-report__action w-56">
                                <div class="flex justify-center items-center">
                                    <a class="flex items-center mr-3" href="javascript:;" data-toggle="modal" data-target="#specific_view"> <CheckSquare class="w-4 h-4 mr-1"/> View </a>
                                    <a class="flex items-center text-theme-6" href="javascript:;" data-toggle="modal" data-target="#delete-confirmation-modal"> <Trash2 class="w-4 h-4 mr-1"/> Delete </a>
                                </div>
                            </td>
                        </tr>
                        <tr class="intro-x">
                            <td class="w-40">
                                <div class="flex">
                                    <div class="w-10 h-10 image-fit zoom-in">
                                        <img alt="Midone Tailwind HTML Admin Template" class="tooltip rounded-full" src="dist/images/preview-4.jpg" title="Uploaded at 17 July 2021"/>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">Michael Majajito</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">Product Manager</div>
                            </td>
                            <td>
                                <div class="flex flex-col sm:flex-row items-center">
                                    <div class="sm:mt-2">
                                        <select class="input input--sm border mr-2">
                                            <option>Design</option>
                                            <option>Development</option>
                                            <option>QA</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">Creative Desinger</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">Available</div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">10 Years</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">5 years remote</div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">100,000</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">30% increase</div>
                            </td>
                            <td class="w-40">
                                <div class="flex items-center justify-center text-theme-6"> <CheckSquare class="w-4 h-4 mr-2"/> Inactive </div>
                            </td>
                            <td class="table-report__action w-56">
                                <div class="flex justify-center items-center">
                                    <a class="flex items-center mr-3" href="javascript:;"> <CheckSquare class="w-4 h-4 mr-1"/> View </a>
                                    <a class="flex items-center text-theme-6" href="javascript:;" data-toggle="modal" data-target="#delete-confirmation-modal"> <Trash2 class="w-4 h-4 mr-1"/> Delete </a>
                                </div>
                            </td>
                        </tr>
                        <tr class="intro-x">
                            <td class="w-40">
                                <div class="flex">
                                    <div class="w-10 h-10 image-fit zoom-in">
                                        <img alt="Midone Tailwind HTML Admin Template" class="tooltip rounded-full" src="dist/images/preview-4.jpg" title="Uploaded at 17 July 2021"/>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">Michael Majajito</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">Product Manager</div>
                            </td>
                            <td>
                                <div class="flex flex-col sm:flex-row items-center">
                                    <div class="sm:mt-2">
                                        <select class="input input--sm border mr-2">
                                            <option>Design</option>
                                            <option>Development</option>
                                            <option>QA</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">Creative Desinger</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">Available</div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">10 Years</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">5 years remote</div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">100,000</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">30% increase</div>
                            </td>
                            <td class="w-40">
                                <div class="flex items-center justify-center text-theme-6"> <CheckSquare class="w-4 h-4 mr-2"/> Inactive </div>
                            </td>
                            <td class="table-report__action w-56">
                                <div class="flex justify-center items-center">
                                    <a class="flex items-center mr-3" href="javascript:;"> <CheckSquare class="w-4 h-4 mr-1"/> View </a>
                                    <a class="flex items-center text-theme-6" href="javascript:;" data-toggle="modal" data-target="#delete-confirmation-modal"> <Trash2 class="w-4 h-4 mr-1"/> Delete </a>
                                </div>
                            </td>
                        </tr>

                        <tr class="intro-x">
                            <td class="w-40">
                                <div class="flex">
                                    <div class="w-10 h-10 image-fit zoom-in">
                                        <img alt="Midone Tailwind HTML Admin Template" class="tooltip rounded-full" src="dist/images/preview-4.jpg" title="Uploaded at 17 July 2021"/>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">Michael Majajito</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">Product Manager</div>
                            </td>
                            <td>
                                <div class="flex flex-col sm:flex-row items-center">
                                    <div class="sm:mt-2">
                                        <select class="input input--sm border mr-2">
                                            <option>Design</option>
                                            <option>Development</option>
                                            <option>QA</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">Creative Desinger</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">Available</div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">10 Years</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">5 years remote</div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">100,000</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">30% increase</div>
                            </td>
                            <td class="w-40">
                                <div class="flex items-center justify-center text-theme-6"> <CheckSquare class="w-4 h-4 mr-2"/> Inactive </div>
                            </td>
                            <td class="table-report__action w-56">
                                <div class="flex justify-center items-center">
                                    <a class="flex items-center mr-3" href="javascript:;"> <CheckSquare class="w-4 h-4 mr-1"/> View </a>
                                    <a class="flex items-center text-theme-6" href="javascript:;" data-toggle="modal" data-target="#delete-confirmation-modal"> <Trash2 class="w-4 h-4 mr-1"/> Delete </a>
                                </div>
                            </td>
                        </tr>
                        <tr class="intro-x">
                            <td class="w-40">
                                <div class="flex">
                                    <div class="w-10 h-10 image-fit zoom-in">
                                        <img alt="Midone Tailwind HTML Admin Template" class="tooltip rounded-full" src="dist/images/preview-4.jpg" title="Uploaded at 17 July 2021"/>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">Michael Majajito</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">Product Manager</div>
                            </td>
                            <td>
                                <div class="flex flex-col sm:flex-row items-center">
                                    <div class="sm:mt-2">
                                        <select class="input input--sm border mr-2">
                                            <option>Design</option>
                                            <option>Development</option>
                                            <option>QA</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">Creative Desinger</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">Available</div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">10 Years</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">5 years remote</div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">100,000</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">30% increase</div>
                            </td>
                            <td class="w-40">
                                <div class="flex items-center justify-center text-theme-6"> <CheckSquare class="w-4 h-4 mr-2"/> Inactive </div>
                            </td>
                            <td class="table-report__action w-56">
                                <div class="flex justify-center items-center">
                                    <a class="flex items-center mr-3" href="javascript:;"> <CheckSquare class="w-4 h-4 mr-1"/> View </a>
                                    <a class="flex items-center text-theme-6" href="javascript:;" data-toggle="modal" data-target="#delete-confirmation-modal"> <Trash2 class="w-4 h-4 mr-1"/> Delete </a>
                                </div>
                            </td>
                        </tr>

                        <tr class="intro-x">
                            <td class="w-40">
                                <div class="flex">
                                    <div class="w-10 h-10 image-fit zoom-in">
                                        <img alt="Midone Tailwind HTML Admin Template" class="tooltip rounded-full" src="dist/images/preview-4.jpg" title="Uploaded at 17 July 2021"/>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">Michael Majajito</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">Product Manager</div>
                            </td>
                            <td>
                                <div class="flex flex-col sm:flex-row items-center">
                                    <div class="sm:mt-2">
                                        <select class="input input--sm border mr-2">
                                            <option>Design</option>
                                            <option>Development</option>
                                            <option>QA</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">Creative Desinger</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">Available</div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">10 Years</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">5 years remote</div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">100,000</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">30% increase</div>
                            </td>
                            <td class="w-40">
                                <div class="flex items-center justify-center text-theme-6"> <CheckSquare class="w-4 h-4 mr-2"/> Inactive </div>
                            </td>
                            <td class="table-report__action w-56">
                                <div class="flex justify-center items-center">
                                    <a class="flex items-center mr-3" href="javascript:;"> <CheckSquare class="w-4 h-4 mr-1"/> View </a>
                                    <a class="flex items-center text-theme-6" href="javascript:;" data-toggle="modal" data-target="#delete-confirmation-modal"> <Trash2 class="w-4 h-4 mr-1"/> Delete </a>
                                </div>
                            </td>
                        </tr>
                        <tr class="intro-x">
                            <td class="w-40">
                                <div class="flex">
                                    <div class="w-10 h-10 image-fit zoom-in">
                                        <img alt="Midone Tailwind HTML Admin Template" class="tooltip rounded-full" src="dist/images/preview-4.jpg" title="Uploaded at 17 July 2021"/>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">Michael Majajito</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">Product Manager</div>
                            </td>
                            <td>
                                <div class="flex flex-col sm:flex-row items-center">
                                    <div class="sm:mt-2">
                                        <select class="input input--sm border mr-2">
                                            <option>Design</option>
                                            <option>Development</option>
                                            <option>QA</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">Creative Desinger</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">Available</div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">10 Years</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">5 years remote</div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">100,000</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">30% increase</div>
                            </td>
                            <td class="w-40">
                                <div class="flex items-center justify-center text-theme-6"> <CheckSquare class="w-4 h-4 mr-2"/> Inactive </div>
                            </td>
                            <td class="table-report__action w-56">
                                <div class="flex justify-center items-center">
                                    <a class="flex items-center mr-3" href="javascript:;"> <CheckSquare class="w-4 h-4 mr-1"/> View </a>
                                    <a class="flex items-center text-theme-6" href="javascript:;" data-toggle="modal" data-target="#delete-confirmation-modal"> <Trash2 class="w-4 h-4 mr-1"/> Delete </a>
                                </div>
                            </td>
                        </tr>
                        <tr class="intro-x">
                            <td class="w-40">
                                <div class="flex">
                                    <div class="w-10 h-10 image-fit zoom-in">
                                        <img alt="Midone Tailwind HTML Admin Template" class="tooltip rounded-full" src="dist/images/preview-4.jpg" title="Uploaded at 17 July 2021"/>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">Michael Majajito</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">Product Manager</div>
                            </td>
                            <td>
                                <div class="flex flex-col sm:flex-row items-center">
                                    <div class="sm:mt-2">
                                        <select class="input input--sm border mr-2">
                                            <option>Design</option>
                                            <option>Development</option>
                                            <option>QA</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">Creative Desinger</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">Available</div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">10 Years</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">5 years remote</div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">100,000</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">30% increase</div>
                            </td>
                            <td class="w-40">
                                <div class="flex items-center justify-center text-theme-6"> <CheckSquare class="w-4 h-4 mr-2"/> Inactive </div>
                            </td>
                            <td class="table-report__action w-56">
                                <div class="flex justify-center items-center">
                                    <a class="flex items-center mr-3" href="javascript:;"> <CheckSquare class="w-4 h-4 mr-1"/> View </a>
                                    <a class="flex items-center text-theme-6" href="javascript:;" data-toggle="modal" data-target="#delete-confirmation-modal"> <Trash2 class="w-4 h-4 mr-1"/> Delete </a>
                                </div>
                            </td>
                        </tr>
                        <tr class="intro-x">
                            <td class="w-40">
                                <div class="flex">
                                    <div class="w-10 h-10 image-fit zoom-in">
                                        <img alt="Midone Tailwind HTML Admin Template" class="tooltip rounded-full" src="dist/images/preview-4.jpg" title="Uploaded at 17 July 2021"/>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">Michael Majajito</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">Product Manager</div>
                            </td>
                            <td>
                                <div class="flex flex-col sm:flex-row items-center">
                                    <div class="sm:mt-2">
                                        <select class="input input--sm border mr-2">
                                            <option>Design</option>
                                            <option>Development</option>
                                            <option>QA</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">Creative Desinger</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">Available</div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">10 Years</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">5 years remote</div>
                            </td>
                            <td>
                                <a href="" class="font-medium whitespace-no-wrap">100,000</a>
                                <div class="text-gray-600 text-xs whitespace-no-wrap">30% increase</div>
                            </td>
                            <td class="w-40">
                                <div class="flex items-center justify-center text-theme-6"> <CheckSquare class="w-4 h-4 mr-2"/> Inactive </div>
                            </td>
                            <td class="table-report__action w-56">
                                <div class="flex justify-center items-center">
                                    <a class="flex items-center mr-3" href="javascript:;"> <CheckSquare class="w-4 h-4 mr-1"/> View </a>
                                    <a class="flex items-center text-theme-6" href="javascript:;" data-toggle="modal" data-target="#delete-confirmation-modal"> <Trash2 class="w-4 h-4 mr-1"/> Delete </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* END: Data List */}
            {/* BEGIN: Pagination */}
            <div class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-no-wrap items-center">
                <ul class="pagination">
                    <li>
                        <a class="pagination__link" href=""> <ChevronsLeft class="w-4 h-4"/> </a>
                    </li>
                    <li>
                        <a class="pagination__link" href=""> <ChevronLeft class="w-4 h-4"/> </a>
                    </li>
                    <li> <a class="pagination__link" href="">...</a> </li>
                    <li> <a class="pagination__link" href="">1</a> </li>
                    <li> <a class="pagination__link pagination__link--active" href="">2</a> </li>
                    <li> <a class="pagination__link" href="">3</a> </li>
                    <li> <a class="pagination__link" href="">...</a> </li>
                    <li>
                        <a class="pagination__link" href=""> <ChevronRight class="w-4 h-4"/> </a>
                    </li>
                    <li>
                        <a class="pagination__link" href=""> <ChevronsRight class="w-4 h-4"/> </a>
                    </li>
                </ul>
                <select class="w-20 input box mt-3 sm:mt-0">
                    <option>10</option>
                    <option>25</option>
                    <option>35</option>
                    <option>50</option>
                </select>
            </div>
            {/* END: Pagination */}
        </div>
        {/* BEGIN: Delete Confirmation Modal */}
        <div class="modal" id="delete-confirmation-modal">
            <div class="modal__content">
                <div class="p-5 text-center">
                    <XCircle class="w-16 h-16 text-theme-6 mx-auto mt-3"/>
                    <div class="text-3xl mt-5">Are you sure?</div>
                    <div class="text-gray-600 mt-2">Do you really want to delete these records? This process cannot be undone.</div>
                </div>
                <div class="px-5 pb-8 text-center">
                    <button type="button" data-dismiss="modal" class="button w-24 border text-gray-700 mr-1">Cancel</button>
                    <button type="button" class="button w-24 bg-theme-6 text-white">Delete</button>
                </div>
            </div>
        </div>
        {/* END: Delete Confirmation Modal */}
    </div>
    {/* END: Content */}

    <div class="modal" id="header-footer-modal-preview">
        <div class="modal__content">
            <div class="flex items-center px-5 py-5 sm:py-3 border-b border-gray-200">
                <h2 class="font-medium text-base mr-auto">Advanced Search</h2>
                <select data-hide-search="true" class="select2 w-40">
                    <option value="1">Select Option</option>
                    <option value="2">Talent</option>
                    <option value="3">Company</option>
                </select>
                <a data-dismiss="modal" href="javascript:;" class="ml-3"> <X class="w-8 h-8 text-gray-500"/></a>
            </div>
            <div class="p-5 grid grid-cols-12 gap-4 row-gap-3">
                <div class="col-span-12 sm:col-span-6"> <label>Date Range</label> <input data-daterange="true" class="datepicker input w-56 border block w-full border mt-2 flex-1"/>  </div>
                <div class="col-span-12 sm:col-span-6"> <label>Experience (Years)</label> <input type="text" class="input w-full border mt-2 flex-1" placeholder="eg. 3"/> </div>
                <div class="col-span-12 sm:col-span-6">
                    <label>Employment Type</label> <select class="input w-full border mt-2 flex-1">
                        <option>Select Option</option>
                        <option>Contract</option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Project</option>
                        <option>Temporary</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <label>Availability</label>
                    <select class="input w-full border mt-2 flex-1">
                        <option>Select Option</option>
                        <option>Immediately</option>
                        <option>1 Month</option>
                        <option>2 Months</option>
                        <option>3 Months</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> <label>Role</label> <input type="text" class="input w-full border mt-2 flex-1" placeholder="eg. Marketing"/> </div>
                <div class="col-span-12 sm:col-span-6"> <label>Monthly Salary (KES)</label> <input type="text" class="input w-full border mt-2 flex-1" placeholder="100,000"/> </div>
                <div class="col-span-12 sm:col-span-12">
                    <label>Skills</label>
                    <select data-placeholder="Select your favorite actors" class="select2 w-full" multiple>
                        <option value="1" selected>Design</option>
                        <option value="2">Development</option>
                        <option value="3" selected>Markerting</option>
                        <option value="4">Engeneering</option>
                        <option value="5">QA</option>
                    </select>
                </div>
            </div>
            <div class="px-5 py-3 text-right border-t border-gray-200"> <button type="button" class="button w-20 border text-gray-700 mr-1">Cancel</button> <button type="button" class="button w-20 bg-theme-1 text-white">Search</button> </div>
        </div>
    </div>

    <div class="modal" id="specific_view">
        <div class="modal__content modal__content--xl p-5">
            <div class="flex items-center mb-5 sm:py-3 border-b border-gray-200">
                <h2 class="font-medium text-base mr-auto">Entry Data Submited</h2>
                <a data-dismiss="modal" href="javascript:;" class="ml-3"> <X class="w-8 h-8 text-gray-500"/></a>
            </div>

            <div class="accordion">
                <div class="accordion__pane active border border-gray-200 p-4">
                    <a href="javascript:;" class="accordion__pane__toggle font-medium block">Detailed Information</a>
                    <div class="accordion__pane__content mt-3 text-gray-700 leading-relaxed">

                        <div class="grid grid-cols-12 gap-6 mt-5">
                            <div class="intro-y col-span-12 md:col-span-6">
                                <div class="relative flex items-center p-5 lg:border-r border-gray-200">
                                    <div class="w-24 h-24 image-fit">
                                        <img alt="Midone Tailwind HTML Admin Template" class="rounded-full" src="dist/images/profile-14.jpg"/>
                                    </div>
                                    <div class="ml-4 mr-auto text-left">
                                        <div class="font-medium text-base">John Travolta</div>
                                        <div class="text-gray-600">Software Engineer</div>
                                    </div>
                                </div>
                            </div>
                            <div class="intro-y col-span-12 md:col-span-6">
                                <div class="">
                                    <h4 class="flex items-center text-xl text-theme-1 font-medium leading-none mt-3"><UserPlus class="w-4 h-4 mr-2"/> Bio</h4>
                                    <div class="mr-auto mt-3">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-12 gap-6 mt-5">
                            <div class="intro-y col-span-12 md:col-span-4">
                                <div class="p-5 border-t border-gray-200">
                                    <h4 class="flex items-center text-xl text-theme-1 font-medium leading-none mt-3"><User class="w-4 h-4 mr-2"/> Detailed Information </h4>
                                    <p class="pt-4">
                                        <a class="flex items-center font-bold" href=""> <Coffee class="w-4 h-4 mr-2"/> Overall experience </a>
                                        <span class="ml-6 inline-block">
                                            11 years/ 6 years remote <br />
                                            Basic English proficiency
                                        </span>
                                    </p>
                                    <p class="pt-4">
                                        <a class="flex items-center font-bold" href=""> <Calendar class="w-4 h-4 mr-2"/> Availability </a>
                                        <span class="ml-6 inline-block">
                                            Full Time <br />
                                            Ready to start in 1 month
                                        </span>
                                    </p>
                                    <p class="pt-4">
                                        <a class="flex items-center font-bold" href=""> <Pocket class="w-4 h-4 mr-2"/> Role and current salary </a>
                                        <span class="ml-6 inline-block">
                                            DevOps <br />
                                            600,000 KES / Year
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div class="intro-y col-span-12 md:col-span-4">
                                <div class="p-5 border-t border-gray-200">
                                    <h4 class="flex items-center text-xl text-theme-1 font-medium leading-none mt-3"><Share2 class="w-4 h-4 mr-2"/> Social Connection</h4>
                                    <div class="flex items-center mt-5"> <Mail class="w-4 h-4 mr-2"/> johntravolta@left4code.com </div>
                                    <div class="flex items-center mt-5"> <Linkedin class="w-4 h-4 mr-2"/> johntravolta@left4code.com </div>
                                    <div class="flex items-center mt-5"> <Instagram class="w-4 h-4 mr-2"/> Instagram John Travolta </div>
                                    <div class="flex items-center mt-5"> <Facebook class="w-4 h-4 mr-2"/> Twitter John Travolta </div>
                                    <div class="flex items-center mt-5"> <Twitter class="w-4 h-4 mr-2"/> Twitter John Travolta </div>
                                </div>
                            </div>

                            <div class="intro-y col-span-12 md:col-span-4">
                                <div class="p-5 border-t border-gray-200">
                                    <h4 class="flex items-center text-xl text-theme-1 font-medium leading-none mt-3"><Book class="w-4 h-4 mr-2"/> Education </h4>
                                    <div class="ml-6 mr-auto mt-3">
                                        <div class="text-gray-600 text-xs">High School</div>
                                        <div class="font-medium">Al Pacino</div>
                                    </div>
                                    <div class="ml-6 mr-auto mt-3">
                                        <div class="text-gray-600 text-xs">College One</div>
                                        <div class="font-medium">Al Pacino</div>
                                    </div>
                                    <div class="ml-6 mr-auto mt-3">
                                        <div class="text-gray-600 text-xs">College Two</div>
                                        <div class="font-medium">Al Pacino</div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        
                    </div>
                </div>


                        <div class="accordion__pane border border-gray-200 p-4 mt-3">
                            <a href="javascript:;" class="accordion__pane__toggle font-medium block">Work History</a>
                            <div class="accordion__pane__content mt-3 text-gray-700 leading-relaxed">

                                <div class="report-timeline mt-5 relative">
                                    <div class="intro-x relative flex items-center mb-3">
                                        <div class="report-timeline__image">
                                            <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-9.jpg"/>
                                            </div>
                                        </div>
                                        <div class="box px-5 py-3 ml-4 flex-1 border border-gray-200 zoom-in">
                                            <div class="flex items-center">
                                                <div class="font-medium">Product Manager - <span class="text-gray-600">Safaricom Ltd</span></div>
                                                <div class="text-xs text-gray-500 ml-auto">2011/February - 2017/October</div>
                                            </div>
                                            <div class="text-gray-600 mt-1">Has joined the team</div>
                                        </div>
                                    </div>
                                    <div class="intro-x relative flex items-center mb-3">
                                        <div class="report-timeline__image">
                                            <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-10.jpg"/>
                                            </div>
                                        </div>
                                        <div class="box px-5 py-3 ml-4 flex-1 border border-gray-200 zoom-in">
                                            <div class="flex items-center">
                                                <div class="font-medium">Product Manager - <span class="text-gray-600">Safaricom Ltd</span></div>
                                                <div class="text-xs text-gray-500 ml-auto">2011/February - 2017/October</div>
                                            </div>
                                            <div class="text-gray-600">
                                                <div class="mt-1">Added 3 new photos</div>
                                                <div class="flex mt-2">
                                                    <div class="tooltip w-8 h-8 image-fit mr-1 zoom-in tooltipstered">
                                                        <img alt="Midone Tailwind HTML Admin Template" class="rounded-md border border-white" src="dist/images/preview-8.jpg"/>
                                                    </div>
                                                    <div class="tooltip w-8 h-8 image-fit mr-1 zoom-in tooltipstered">
                                                        <img alt="Midone Tailwind HTML Admin Template" class="rounded-md border border-white" src="dist/images/preview-14.jpg"/>
                                                    </div>
                                                    <div class="tooltip w-8 h-8 image-fit mr-1 zoom-in tooltipstered">
                                                        <img alt="Midone Tailwind HTML Admin Template" class="rounded-md border border-white" src="dist/images/preview-5.jpg"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="intro-x relative flex items-center mb-3">
                                        <div class="report-timeline__image">
                                            <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-4.jpg"/>
                                            </div>
                                        </div>
                                        <div class="box px-5 py-3 ml-4 flex-1 border border-gray-200 zoom-in">
                                            <div class="flex items-center">
                                                <div class="font-medium">Product Manager - <span class="text-gray-600">Safaricom Ltd</span></div>
                                                <div class="text-xs text-gray-500 ml-auto">2011/February - 2017/October</div>
                                            </div>
                                            <div class="text-gray-600 mt-1">Has changed <a class="text-theme-1" href="">Sony Master Series A9G</a> price and description</div>
                                        </div>
                                    </div>
                                    <div class="intro-x relative flex items-center mb-3">
                                        <div class="report-timeline__image">
                                            <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-12.jpg"/>
                                            </div>
                                        </div>
                                        <div class="box px-5 py-3 ml-4 flex-1 border border-gray-200 zoom-in">
                                            <div class="flex items-center">
                                                <div class="font-medium">Product Manager - <span class="text-gray-600">Safaricom Ltd</span></div>
                                                <div class="text-xs text-gray-500 ml-auto">2011/February - 2017/October</div>
                                            </div>
                                            <div class="text-gray-600 mt-1">Has changed <a class="text-theme-1" href="">Sony Master Series A9G</a> description</div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div class="accordion__pane border border-gray-200 p-4 mt-3">
                            <a href="javascript:;" class="accordion__pane__toggle font-medium block">Send Message</a>
                            <div class="accordion__pane__content mt-3 text-gray-700 leading-relaxed">

                                <form class="validate-form">
                                    
                                    <div class="mt-3">
                                        <label class="flex flex-col sm:flex-row">
                                            Select Type
                                            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600">Include Missing Details or Information</span>
                                        </label>
                                        <select data-placeholder="Select your favorite actors" class="select2 w-full overflow-auto" multiple>
                                            <option value="1" selected>Skills</option>
                                            <option value="2">Recommendation</option>
                                            <option value="3" selected>Bio</option>
                                            <option value="4">Interest</option>
                                            <option value="5">Projects</option>
                                            <option value="5">Detailed Information</option>
                                            <option value="5">Social Connection</option>
                                            <option value="5">Education</option>
                                            <option value="5">Projects</option>
                                            <option value="5">Work history</option>
                                        </select>
                                    </div>
                                    <div class="mt-3">
                                        <label class="flex flex-col sm:flex-row">
                                            Comment
                                            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600">Required, at least 10 characters</span>
                                        </label>
                                        <textarea class="input w-full border mt-2" name="comment" placeholder="Type your comments" minlength="10" rows="10" required>
                                            Hi Gabriel,

                                            Thank you for completing your profile! You’ve made a huge step on how companies will see you and what our matching team will analyze to find the best match for you.

                                            We would like to invite you to the next level: a Work Experience survey. Take this multiple-choice survey to see if you are considered a senior engineer in Silicon Valley standard.

                                            Based on survey results, you may be allowed to skip our interview and other tests and start getting job offers as early as next week! This step, as well as all the ones you have done so far, will be used not just to match you with your next job, but with all your future jobs at Turing.

                                            Remember: Once you are a Turing engineer, you will never have to apply for another job :)

                                            Click here to take the Work Experience survey. We can start matching you as soon as you finish your application.

                                            If you run into any difficulty with the Work Experience survey, please email us at hiring@turing.com with the subject “[Work Experience Survey]”, and our team of experts will help you out as soon as possible.

                                            All the best,

                                            Zan Doan
                                            VP of Engineering, Turing
                                            (Former Engineering Manager @ Facebook, Inc.)


                                        </textarea>
                                    </div>
                                    <button type="submit" class="button bg-theme-1 text-white mt-5">Register</button>
                                </form>


                            </div>
                        </div>
                        <div class="accordion__pane border border-gray-200 p-4 mt-3">
                            <a href="javascript:;" class="accordion__pane__toggle font-medium block">An Introduction to Securing your Linux VPS</a>
                            <div class="accordion__pane__content mt-3 text-gray-700 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                        </div>
                    
            <div class="px-5 py-3 text-right border-t border-gray-200"> <button type="button" class="button w-20 border text-gray-700 mr-1">Cancel</button> <button type="button" class="button w-20 bg-theme-1 text-white">Search</button> </div>
        </div>
    </div>

    <div class="modal" id="action-filter">
        <div class="modal__content">
            <div class="flex items-center px-5 py-5 sm:py-3 border-b border-gray-200">
                <h2 class="font-medium text-base mr-auto">Action Filter</h2>
                <select data-hide-search="true" class="select2 w-40">
                    <option value="1">Select Option</option>
                    <option value="2">Talent</option>
                    <option value="3">Company</option>
                </select>
            </div>
            <div class="p-5 grid grid-cols-12 gap-4 row-gap-3">
                <h4 class="col-span-12 sm:col-span-12 text-xl text-theme-1 font-medium leading-none">Profile with missing fields</h4>
                <div class="col-span-12 sm:col-span-6">
                    <div class="flex items-center text-gray-700 mt-2"> <input type="checkbox" class="input border mr-2" id=""/> <label class="cursor-pointer select-none" for="vertical-checkbox-role">Role</label> </div>
                    <div class="flex items-center text-gray-700 mt-2"> <input type="checkbox" class="input border mr-2" id=""/> <label class="cursor-pointer select-none" for="vertical-checkbox-skills">Bio</label> </div>
                    <div class="flex items-center text-gray-700 mt-2"> <input type="checkbox" class="input border mr-2" id=""/> <label class="cursor-pointer select-none" for="vertical-checkbox-chris-evans">Skills</label> </div>
                    <div class="flex items-center text-gray-700 mt-2"> <input type="checkbox" class="input border mr-2" id=""/> <label class="cursor-pointer select-none" for="vertical-checkbox-education">Education</label> </div>
                    <div class="flex items-center text-gray-700 mt-2"> <input type="checkbox" class="input border mr-2" id=""/> <label class="cursor-pointer select-none" for="vertical-checkbox-recommendations">Recommendations</label> </div>
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <div class="col-span-12 sm:col-span-12">
                        <label class="inline-block w-full mb-2">Detailed Info</label>
                        <select data-placeholder="Select info" class="select2 inline-block grid-cols-12 w-full" multiple>
                            <option value="1" selected>Experince</option>
                            <option value="2">Availability</option>
                            <option value="3">Current Role</option>
                            <option value="3">Current Salary</option>
                        </select>
                    </div>
                    <div class="flex items-center text-gray-700 mt-3"> <input type="checkbox" class="input border mr-2" id=""/> <label class="cursor-pointer select-none" for="vertical-checkbox-social-connections">Social Connections</label> </div>
                    <div class="flex items-center text-gray-700 mt-2"> <input type="checkbox" class="input border mr-2" id=""/> <label class="cursor-pointer select-none" for="vertical-checkbox-projects">Projects</label> </div>
                </div>
                
            </div>
            <div class="px-5 py-3 text-right border-t border-gray-200"> <button type="button" class="button w-20 border text-gray-700 mr-1">Cancel</button> <button type="button" class="button w-20 bg-theme-1 text-white">Display</button> </div>
        </div>
    </div>
</div>

</div>
)}

export default DataList;