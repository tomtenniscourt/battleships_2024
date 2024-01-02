import React, { useState, useEffect } from "react";
import "./Homepage.css"; 
import Game from "./Game.js";

const Homepage = () => {
  


  return (
    <div className="homepage">
      <h1>Battleship App</h1>
      <p>My attempt at creating the puzzle game Battleships in React.js</p>
      <Game />
    </div>
  );
};

export default Homepage;
