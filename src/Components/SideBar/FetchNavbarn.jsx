import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './_sideBar.scss'

const FetchNavbarn = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {

    fetch("https://reqres.in/api/users/?page=2")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.data)
      })
    
  }, []);


  return (
      <>

        <ul className="sid2Bar2 list-unstyled">
      {
        users.slice(0, 6).map((user, i) => (
        <li key={user.id} className="side-item mb-4">
          <Link to={'/channel/'+ user.id } className='d-flex align-items-center text-decoration-none'>
            <img className='side-item-img' src={user.avatar} alt={user.last_name} width={40} height={40}/>
            <p className="p-0">{user.first_name}</p>
          </Link>
        </li>
          )
        )
      }
  
      </ul>
      </>
 
  )
}

export default FetchNavbarn