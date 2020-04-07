import React from 'react';
import {SketchField, Tools} from 'react-sketch';

class Canvas extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        canvas: true
      }
      this.toggleCanvas = this.toggleCanvas.bind(this);
    }
    toggleCanvas() {
      this.setState({canvas : !this.state.canvas})
    }
     render() {
        return (
          <div>
            <h3>Draw your word below:</h3>
              { this.state.canvas === true ?
              <SketchField width='500px'
                           height='500px'
                           tool={Tools.Pencil}
                           lineColor='black'
                           lineWidth={2}
                           backgroundColor='white'/>
                         : <div className="newCanvas"><SketchField width='500px'
                                      height='500px'
                                      tool={Tools.Pencil}
                                      lineColor='black'
                                      lineWidth={2}
                                      backgroundColor='white'/>
                          </div>}
             <button onClick={this.toggleCanvas}>Clear Canvas</button>
           </div>
        )
     }
}

// get component off screen then get it back on
// as long as removed from dom and added back to dom
// add a callback to setstate to run code when setstate is resolved. can chain multiple setstates together

export default Canvas
