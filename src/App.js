import React from "react"
import Topbar from "./screens/global/Topbar"
import Sidebar from "./screens/global/Sidebar";
import "../src/index.css"
import {Routes, Route} from "react-router-dom";
import Dashboard from "./screens/dashboard";
import PersonalProfile from "./screens/personalProfile";
import CompanyProfile from "./screens/companyProfile";
// import Inbox from "./screens/inbox";
// import Jobs from "./screens/jobs";
// import ViewTalent from "./screens/viewTalent";
// import DataList from "./screens/dataList";
// import Chats from "./screens/chats";
// import ChangePassword from "./screens/changePassword";
// import Login from "./screens/login";
// import LoginRegister from "./screens/loginRegister";
// import UpdateProfile from "./screens/updateProfile";
// import Bar from "./screens/bar";
// import Pie from "./screens/pie";
// import Line from "./screens/line";
// import Calendar from "./screens/calendar"



function App() {
    return (
        <div className="app" style={{ display: 'flex' }}>
            <Sidebar/>
            <main className="content">
            <Topbar/>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/personalProfile" element={<PersonalProfile/>}/>
                <Route path="/companyProfile" element={<CompanyProfile/>}/>
                {/* <Route path="/inbox" element={<Inbox/>}/> */}
                {/* <Route path="/jobs" element={<Jobs/>}/> */}
                {/* <Route path="/viewTalent" element={<ViewTalent/>}/> */}
                {/* <Route path="/dataList" element={<DataList/>}/> */}
                {/* <Route path="/chats" element={<Chats/>}/> */}
                {/* <Route path="/changePassword" element={<ChangePassword/>}/> */}
                {/* <Route path="/login" element={<Login/>}/> */}
                {/* <Route path="/loginRegister" element={<LoginRegister/>}/> */}
                {/* <Route path="/updateProfile" element={<UpdateProfile/>}/> */}
                {/* <Route path="/bar" element={<Bar/>}/> */}
                {/* <Route path="/line" element={<Line/>}/> */}
                {/* <Route path="/pie" element={<Pie/>}/> */}
                {/* <Route path="/calendar" element={<Calendar/>}/> */}
                
            </Routes>
            </main>
        </div>
    );
}

export default App;