import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Pages/Video/Home";
import Header from "../Pages/Blocks/Header/Header";
import Video from "../Pages/Video/Video";
import Channels from "../Pages/Channels/Channels";

// import Chanel from "./Pages/Chanel/Chanel";

function Authen() {
  return (
    <>
          <Header />
          <div className="container1 d-flex align-items-start">
           
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/:id" element={<Video />} />
            <Route path="/channel/:id" element={<Channels />} />
            <Route path="*" element={<Navigate to={'/'}/>} />
          </Routes> 
    </div>
    </>
  );
}

export default Authen;