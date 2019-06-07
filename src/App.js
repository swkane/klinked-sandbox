import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>KlinkedIn Coming Soon!</p>
      </header>
    </div>
  );
}

export default App;
