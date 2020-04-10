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
          <div className="canvas">
            <div className="canvasText">
              <br/><h3>Draw your word below:</h3>
            </div>
              <img src="https://i.imgur.com/8QS5rpm.gif" onClick={this.toggleCanvas}/>
                { this.state.canvas === true ?
                <section className="newCanvas">
                  <SketchField width='480px' height='480px' tool={Tools.Pencil} lineColor='black' lineWidth={2} backgroundColor='white'/>
                </section>
                : <div className="newCanvas">
                    <SketchField width='480px' height='480px' tool={Tools.Pencil} lineColor='black' lineWidth={2} backgroundColor='white'/>
                  </div>}
           </div>
        )
     }
}

export default Canvas
