import React from 'react';
import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { authContext } from './Context/AuthContextProvider';
import Header from './Pages/Blocks/Header';
import Login from './Pages/Login';
import './scss/App.scss';
import Profile from './Pages/VideoPage/Video'
import Main from './Pages/Main';
import Authen from './Auth/Authen';
import UnAuthen from './Auth/UnAuthen';

const App = () => {
  const { token } = useContext(authContext)
  return (
    <React.Fragment>

      <div style={{ paddingTop: "65px" }} className="App ">
        {token ? (
          <>
            <Authen/>
          </>
        ) : (
          <>
          <UnAuthen />
          </>
        )}
      </div>
    </React.Fragment>

  );
}

export default App;


