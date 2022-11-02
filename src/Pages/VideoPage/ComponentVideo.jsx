import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ComponentVideo = () => {
  
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
    <div>
      <h2 className='fs-2 ms-4 d-block mx-auto'>Next</h2>
      <ul className='list-unstyled text-center'>
        {
          users.slice(300, 350).map((user, i) => (
            <li key={user.id} className='itemm mb-3 d-block ms-4 text-start'>
              <Link className='text-decoration-none' to={'/video/' + user.id}>
                <img className='rounded-4' src={`https://picsum.photos/id/${user.id}/250/155/`} alt={user.title} width={300} height={200}/>
                <h3 className='text-black fs-4'>{user.title}</h3>
                <div>
                  <span>
                    {`${user.id}k views,  `}
                  </span>
                  
                  <span>{`  `}</span>
                  <span>
                    Dollie Blair
                  </span>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ComponentVideo