import React from 'react';
import logo from './images/logo.svg';


function App() {
  return (
    <div className="App" style={{backgroundColor: "#282c34",height: "100%"}}>
      <header className="App-header">
        <img src={logo} style={{height: "40vmin", marginLeft: "50%", transform: "translateX(-50%)", marginTop: "60px"}} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
