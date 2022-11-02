import React from 'react'
import Streem from '../../../Assets/Images/streem.svg'
import Avatar from '../../../Assets/Images/avatar.svg'
import BookMark from '../../../Assets/Images/BookMark.svg'
import Menu from '../../Video/img/Menu.svg'
import Dotdot from '../../../Assets/Images/dotdot.svg'
import search from '../../../Assets/Images/search.svg'
import YouTube from '../../../Assets/Images/YouTube-Logo.wine.svg'  
import { Link } from 'react-router-dom'
import './_header.scss'


const Header = () => {
  return (
    <header className='Header'>
      <div className='container1 '>
        <div className="header d-flex align-items-center justify-content-between">
          <div className="serchDiv d-flex align-items-center w-25">
            <button style={{border:"none", backgroundColor:"transparent"}}><img src={Menu} alt="menu"/></button>
            <Link to={'/'}><img src={YouTube} alt='logo' width={156} height={65}/></Link>

            <form className="d-flex align-items-center justify-content-between position-relative">
              <input className='search-input' type="text" placeholder='Search' />
              <button className="position-absolute search-button" type="submit"><img src={search} alt="search"/></button>
            </form>
          </div>

          <nav className='navbar'>
            <ul className='header-list d-flex align-items-center justify-content-between list-unstyled mb-0'>
              <li className="header-item"><button className='border-0 bg-transparent'><img src={Streem} alt='streem'/></button></li>
              <li className="header-item ms-3"><button className='border-0 bg-transparent'><img src={Dotdot} alt='dot hamb'/></button></li>
              <li className="header-item ms-3"><button className='border-0 bg-transparent'><img src={BookMark} alt='ring'/></button></li>
              <li className="header-item ms-3"><button className='border-0 bg-transparent'><img src={Avatar} alt='avatar' width={45} height={45}/></button></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header