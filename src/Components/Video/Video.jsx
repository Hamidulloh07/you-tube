import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

   <>
        <div className="page">
          
      <ul className="card-list list-unstyled mt-4">
        {
          users.slice(0, 50).map((user, i) => (
            <li key={user.id} className='card-item mb-3'>
              <Link to={'/profile'} className='text-decoration-none'>
                
                  <img className='card-img' src="https://via.placeholder.com/150/810b14" alt={user.title} width={250} height={155}/>
                  <h3 className="card-title">{user.title.split("")}</h3>
                  <div className='d-flex align-items-center justify-content-between'>
                    <span className='card-span'>{`${i}k views`}</span>
                    <span className='card-span'>{`${user.albumId} days ago`}</span>
                    <span className='card-span'>{`Dollie Blair`}</span>
                  </div>
               
              </Link>
            </li>
          ))
        }
      </ul>
        </div>

   </>  
  )
}

export default Video