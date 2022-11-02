import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Channel.scss';

const ChanelSingleApi = () => {
  
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
        {
          users.slice(160, 161).map((user, i) => (
            <div className="single-card d-flex align-items-start">
              <Link to={"/video/" + user.id}>
                <img className="rounded-3" src={user.thumbnailUrl} alt={user.title} width={450} height={250}/>
              </Link>
                <div className="ms-3 me-5">
                  <h3 className='mb-4 mt-3'>{user.title}</h3>
                  <p>Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups.</p>

                  <span></span>
                </div>
              </div>
          ))
        }
      </>
  )
}

export default ChanelSingleApi