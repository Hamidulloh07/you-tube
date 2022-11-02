import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import SideBar from "../Components/SideBar/SideBar";
import Video from "../Components/Video/Home";
import Header from "../Pages/Blocks/Header";
import Channels from "../Pages/Channels/Channels";
import Profile from "../Pages/VideoPage/Video";

// import Chanel from "./Pages/Chanel/Chanel";

function Authen() {
  return (
    <>
          <Header />
          <div className="container1 d-flex align-items-start">
           
          <Routes>
            <Route path="/" element={<Video />} />
            <Route path="/video/:id" element={<Profile />} />
            <Route path="/channel/:id" element={<Channels />} />
            <Route path="*" element={<Navigate to={'/'}/>} />
          </Routes> 
    </div>
    </>
  );
}

export default Authen;