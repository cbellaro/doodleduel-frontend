import React from 'react';
import {SketchField, Tools} from 'react-sketch';
import Canvas from "./Components/Canvas.js";
import Main from "./Components/Main.js";

            // <Canvas/>

class App extends React.Component {
     render() {
        return (
          <div className="container">
            <Main/>
          </div>
        )
     }
}

export default App
