import React, { useState, useEffect } from 'react'
import './_sideBar.scss'
import Home from './image/Home.svg'
import BelleBriggs from './image/BelleBriggs.svg'
import EuniceCortez from './image/EuniceCortez.svg'
import EmmaHanson from './image/EmmaHanson.svg'
import Games from './image/Games.svg'
import Library from './image/Library.svg'
import Favourites from './image/Favourites.svg'
import LeahBerry from './image/LeahBerry.svg'
import History from './image/History.svg'
import Watchlater from './image/Watchlater.svg'
import GussieSingleton from './image/GussieSingleton.svg'
import Trending from './image/Trending.svg'
import NoraFrancis from './image/NoraFrancis.svg'
import Setting from './image/Setting.svg'
import Showmore from './image/Showmore.svg'
import Likedvideos from './image/Likedvideos.svg'
import Subscriptions from './image/Subscriptions.svg'
import Music from './image/Music.svg'
import FetchNavbarn from './FetchNavbarn.jsx'
import { Link } from 'react-router-dom'


const SideBar = () => {

  return (
    <div className='sideBar pt-3'>
      <ul className="sideBarList list-unstyled">
        <li className="sideBrItem"><Link className="d-flex align-items-center text-decoration-none"><img src={Home} alt="Home" /><p>Home</p></Link></li>
        <li className="sideBrItem"><Link className="d-flex align-items-center text-decoration-none"><img src={Trending} alt="Trending" /><p>Trending</p></Link></li>
        <li className="sideBrItem"><Link className="d-flex align-items-center text-decoration-none"><img src={Subscriptions} alt="Subscriptions" /><p>Subscriptions</p></Link></li>
        <li className="sideBrItem"><Link className="d-flex align-items-center text-decoration-none"><img src={Library} alt="Library" /><p>Library</p></Link></li>
        <li className="sideBrItem"><Link className="d-flex align-items-center text-decoration-none"><img src={History} alt="History" /><p>History</p></Link></li>
        <li className="sideBrItem"><Link className="d-flex align-items-center text-decoration-none"><img src={Watchlater} alt="Watchlater" /><p>Watch later</p></Link></li>
        <li className="sideBrItem"><Link className="d-flex align-items-center text-decoration-none"><img src={Favourites} alt="Favourites" /><p>Favourites</p></Link></li>
        <li className="sideBrItem"><Link className="d-flex align-items-center text-decoration-none"><img src={Likedvideos} alt="Likedvideos" /><p>Liked videos</p></Link></li>
        <li className="sideBrItem"><Link className="d-flex align-items-center text-decoration-none"><img src={Music} alt="Music" /><p>Music</p></Link></li>
        <li className="sideBrItem"><Link className="d-flex align-items-center text-decoration-none"><img src={Games} alt="Games" /><p>Games</p></Link></li>
        <li className="sideBrItem"><Link className="d-flex align-items-center text-decoration-none"><img src={Showmore} alt="Showmore" /><p>Show more</p></Link></li>
      </ul>

      <div className='canal-div'>
        <h2 className='subTitle mb-4'>Subscriptions</h2>
       <FetchNavbarn/>

        <div className=''>
          <Link className='side-item setting d-flex align-items-center text-decoration-none'>
            <img src={Setting} alt="Setting" />
            <p className=''>
              Setting          
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SideBar