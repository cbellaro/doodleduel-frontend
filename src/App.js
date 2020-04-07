import React from 'react';
import {SketchField, Tools} from 'react-sketch';
import Canvas from "./Components/Canvas.js";
import Main from "./Components/Main.js";
import Scoreboard from "./Components/Scoreboard.js";

class App extends React.Component {
     render() {
        return (
          <div className="container">
            <h1>Player 1</h1>
            <Scoreboard/>
            <h1>Player 2</h1>
            <Scoreboard/>
            <Main/>
            <Canvas/>
          </div>
        )
     }
}

export default App
