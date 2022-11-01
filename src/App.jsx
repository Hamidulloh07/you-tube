import React from 'react';
import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { authContext } from './Context/AuthContextProvider';
import Header from './Pages/Blocks/Header';
import { Home } from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp.jsx';
import './scss/App.scss';
import Profile from './Pages/Profile'

const App = () => {
  const { token } = useContext(authContext)
  return (
    <React.Fragment>
    <Header/>
      <div style={{ paddingTop: "65px" }} className="App ">
          {token ? (
            <>
            <Routes>
              <Route to={'/'} element={<Home/>}></Route>
              <Route to={'/profile/:id'} element={<Profile/>}></Route>
            </Routes>
            </>
          ) : (
            <>
        <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='*' element={<Navigate to={"/login"} />} />
        </Routes>
            </>
          )}
      </div>
    </React.Fragment>

  );
}

export default App;


