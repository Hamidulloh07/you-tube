import React, { useState, useEffect } from 'react'
import './_sideBar.scss'
import Home from '../../../Assets/Images/Home.svg'
import Games from '../../../Assets/Images/Games.svg'
import Library from '../../../Assets/Images/Library.svg'
import Favourites from '../../../Assets/Images/Favourites.svg'
import History from '../../../Assets/Images/History.svg'
import Watchlater from '../../../Assets/Images/Watchlater.svg'
import Trending from '../../../Assets/Images/Trending.svg'
import Setting from '../../../Assets/Images/Setting.svg'
import Showmore from '../../../Assets/Images/Showmore.svg'
import Likedvideos from '../../../Assets/Images/Likedvideos.svg'
import Subscriptions from '../../../Assets/Images/Subscriptions.svg'
import Music from '../../../Assets/Images/Music.svg'
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

        <div >
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