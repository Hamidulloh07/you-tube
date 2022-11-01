import { useEffect, useState } from "react"
import '../scss/App.scss'
import { Link } from "react-router-dom"
import Header from "./Blocks/Header"
import SideBar from "../Components/SideBar/SideBar"
import Video from "../Components/Video/Video"

export const Home = () => {
  return(
    <div className="container1 d-flex align-items-start">
      <SideBar />
      <Video/>
    </div>
  )

}

