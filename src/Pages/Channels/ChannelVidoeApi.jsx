import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Channel.scss';

const ChannelVideoApi = () => {
  
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
      <ul className='list-unstyled sideBar2'>
        {
          users.slice(550, 650).map((user, i) => (
            <li key={user.id} className='itemm mb-3 d-block me-4 text-start'>
              <Link className='text-decoration-none' to={'/video/' + i}>
                <img className='rounded-4' src={`https://picsum.photos/id/${user.id}/300/180/`} alt={user.title} width={300} height={180}/>
                <h3 className='text-black fs-4'>{user.title}</h3>
                <div>
                  <span>
                    {`${user.id}k views`}
                  </span>
                  <span>
                    Dollie Blair
                  </span>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
  )
}

export default ChannelVideoApi