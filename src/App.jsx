import React from 'react';
import { useContext } from 'react';
import { authContext } from './Context/AuthContextProvider';
import UnAuthen from './Auth/UnAuthen';
import Authen from './Auth/Authen';

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


