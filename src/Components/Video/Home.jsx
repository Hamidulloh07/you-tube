import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import './Video.scss'

const Video = () => {

  let [users, setUsers] = useState([])
  let [loader, setLoader] = useState(true) 
  useEffect(() => {
    setLoader(true)
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) =>  {
        setUsers(data)
        setLoader(false)
      })
      
  }, [])
  
  if (loader) {
    return (
      <h1>Loading...</h1>
    )
  }
  

  return (

   <div className='d-flex align-items-start'>
   <SideBar />
        <div className="page">
          
      <ul className="card-list list-unstyled mt-4">
        {
           users.slice(1, 100).map((user, i) => (
            <li key={user.id} className='card-item mb-3'>
              <Link to={'/video/' + user.id} className='text-decoration-none'>
                
                  <img className='card-img' src={`https://picsum.photos/id/${user.id}/250/155/`} alt={user.title} width={250} height={155}/>
                
                  
                  <h3 className="card-title">{user.title}</h3>
                  <div className='d-flex align-items-center justify-content-between'>
                    <span className='card-span'>{`${user.id}k views`}</span>
                    <span className='card-span'>{`${user.albumId} days ago`}</span>
                    <span className='card-span'>{`Dollie Blair`}</span>
                  </div>
               
              </Link>
            </li>
          ))
        }
      </ul>
        </div>

   </div>  
  )
}

export default Video