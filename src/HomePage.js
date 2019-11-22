import React from 'react';
import logo from './images/logo.svg';
import OAuth2 from "./scripts/OAuth2";
import GoogleButton from "react-google-button";


function HomePage() {
  return (
    <div className="App" style={{backgroundColor: "#282c34",height: "100%"}}>
      <header className="App-header">
        <img src={logo} style={{height: "40vmin", marginLeft: "50%", transform: "translateX(-50%)", marginTop: "60px"}} className="App-logo" alt="logo" />
          <GoogleButton
              style={{ marginLeft: "50%", transform: "translateX(-50%)", marginTop: "50px"}}
              type={"dark"}
              onClick={() => { OAuth2() }}
          />
      </header>
    </div>
  );
}

export default HomePage;
