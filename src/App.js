import React from "react"
import Topbar from "./screens/global/Topbar"
import Sidebar from "./screens/global/Sidebar";
import "../src/index.css"
// import {Routes, Route} from "react-router-dom";
// import Dashboard from "./screens/dashboard";

function App() {
    return (
        <div className="app" style={{ display: 'flex' }}>
            <Sidebar/>
            {/* <Sidebar/> */}
            <main className="content">
            
            <Topbar/>
            {/* <Routes> */}
                {/* <Route path="/" element={<Dashboard/>}/> */}
            {/* </Routes> */}
            </main>
        </div>
    );
}

export default App;