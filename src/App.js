import React from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./screens/global/Topbar";
import Sidebar from "./screens/global/Sidebar";
import "../src/index.css";
import Dashboard from "./screens/dashboard";
import PersonalProfile from "./screens/personalProfile";
import CompanyProfile from "./screens/companyProfile";
import InboxPage from "./screens/inbox";
import ViewTalent from "./screens/viewTalent";
import DataList from "./screens/dataList";
import Chat from "./screens/chat";
import ChangePassword from "./screens/changePassword";
// import Login from "./screens/login";

function App() {
  return (
    <div className="app" style={{ display: "flex" }}>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/"element={<>
              <Sidebar />
              <main className="content">
                <Topbar />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/personalProfile" element={<PersonalProfile />} />
                  <Route path="/companyProfile" element={<CompanyProfile />} />
                  <Route path="/inbox" element={<InboxPage />} />
                  <Route path="/viewTalent" element={<ViewTalent />} />
                  <Route path="/dataList" element={<DataList />} />
                  <Route path="/chat" element={<Chat />} />
                  <Route path="/changePassword" element={<ChangePassword />} />
                </Routes>
              </main>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
