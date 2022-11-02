import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ChanellApi = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
      fetch(`https://reqres.in/api/users/?page=1`)
      .then((res) => res.json())
      .then((data) => {
        setCards(data.data)
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
        <ul className="sid2Bar2 list-unstyled ">
                {
                  cards.slice(3, 9).map((card, i) => (
                  <li key={card.id} className="side-item mb-4">
                    <Link to={'/channel/'+ card.id } className='d-flex align-items-center text-decoration-none'>
                      <img className='side-item-img' src={card.avatar} alt={card.last_name} width={40} height={40}/>
                      <p className="p-0">{card.first_name}</p>
                    </Link>
                  </li>
                    )
                  )
                }
          </ul>
  )
}

export default ChanellApi