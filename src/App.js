import React from 'react';
import {SketchField, Tools} from 'react-sketch';
import Canvas from "./Components/Canvas.js";
import Main from "./Components/Main.js";
import Scoreboard from "./Components/Scoreboard.js";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <img className="logo" src="https://i.imgur.com/mYtU04k.png?1"></img>
        <div className="scoreContainer">
          <div className="playerContainer">
            <h1>Player 1</h1>
            <div className="scoreboards">
              <Scoreboard/>
            </div>
          </div>
          <div className="playerContainer">
            <h1>Player 2</h1>
            <div className="scoreboards">
              <Scoreboard/>
            </div>
          </div>
        </div>
        <Main/>
        <Canvas/>
      </div>
    )
  }
}

export default App
