import React from "react";
import {Activity,Bell, Box, ChevronRight, CreditCard, Edit, HelpCircle, Inbox, Lock, MoreHorizontal, Search, ToggleRight, User, Users, Layout, Sidebar, Settings, BarChart2, Home, Briefcase, FileText, List, Send, MessageCircle } from "react-feather";

const ChangePassword = () => {
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
    <div className="content">
        <div className="intro-y flex items-center mt-8">
            <h2 className="text-lg font-medium mr-auto">
                Update Profile
            </h2>
        </div>
        <div className="grid grid-cols-12 gap-6">
            {/*  BEGIN: Profile Menu */}
            <div className="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse">
                <div className="intro-y box mt-5">
                    <div className="relative flex items-center p-5">
                        <div className="w-12 h-12 image-fit">
                            <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-6.jpg"/>
                        </div>
                        <div className="ml-4 mr-auto">
                            <div className="font-medium text-base">Robert De Niro</div>
                            <div className="text-gray-600">DevOps Engineer</div>
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
                        <a className="flex items-center text-theme-1 font-medium" href=""> <Activity className="w-4 h-4 mr-2"/> Personal Information </a>
                        <a className="flex items-center mt-5" href=""> <Box className="w-4 h-4 mr-2"/> Account Settings </a>
                        <a className="flex items-center mt-5" href=""> <Lock className="w-4 h-4 mr-2"/> Change Password </a>
                        <a className="flex items-center mt-5" href=""> <Settings className="w-4 h-4 mr-2"/> User Settings </a>
                    </div>
                    <div className="p-5 border-t border-gray-200">
                        <a className="flex items-center" href=""> <Activity className="w-4 h-4 mr-2"/> Email Settings </a>
                        <a className="flex items-center mt-5" href=""> <Box className="w-4 h-4 mr-2"/> Saved Credit Cards </a>
                        <a className="flex items-center mt-5" href=""> <Lock className="w-4 h-4 mr-2"/> Social Networks </a>
                        <a className="flex items-center mt-5" href=""> <Settings className="w-4 h-4 mr-2"/> Tax Information </a>
                    </div>
                    <div className="p-5 border-t flex">
                        <button type="button" className="button button--sm block bg-theme-1 text-white">New Group</button>
                        <button type="button" className="button button--sm border text-gray-700 ml-auto">New Quick Link</button>
                    </div>
                </div>
            </div>
            {/*  END: Profile Menu */}
            <div className="col-span-12 lg:col-span-8 xxl:col-span-9">
                {/*  BEGIN: Change Password */}
                <div className="intro-y box lg:mt-5">
                    <div className="flex items-center p-5 border-b border-gray-200">
                        <h2 className="font-medium text-base mr-auto">
                            Change Password
                        </h2>
                    </div>
                    <div className="p-5">
                        <div>
                            <label>Old Password</label>
                            <input type="password" className="input w-full border mt-2" placeholder="Input text"/>
                        </div>
                        <div className="mt-3">
                            <label>New Password</label>
                            <input type="password" className="input w-full border mt-2" placeholder="Input text"/>
                        </div>
                        <div className="mt-3">
                            <label>Confirm New Password</label>
                            <input type="password" className="input w-full border mt-2" placeholder="Input text"/>
                        </div>
                        <button type="button" className="button bg-theme-1 text-white mt-4">Change Password</button>
                    </div>
                </div>
                {/*  END: Change Password */}
            </div>
        </div>
    </div>,
    {/*  END: Content */}
</div>

)
}

export default ChangePassword;