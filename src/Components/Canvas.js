import React from 'react';
import {SketchField, Tools} from 'react-sketch';

// add tool options to state and create corresponding functions

class Canvas extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        canvas: true,
        color: 'rgb(0,0,0)'
      }
      this.toggleCanvas = this.toggleCanvas.bind(this);
      this.colorBlack = this.colorBlack.bind(this);
      this.colorGrey = this.colorGrey.bind(this);
      this.colorWhite = this.colorWhite.bind(this);
      this.colorRed = this.colorRed.bind(this);
      this.colorOrange = this.colorOrange.bind(this);
      this.colorYellow = this.colorYellow.bind(this);
      this.colorGreen = this.colorGreen.bind(this);
      this.colorBlue = this.colorBlue.bind(this);
      this.colorIndigo = this.colorIndigo.bind(this);
      this.colorViolet = this.colorViolet.bind(this);
    }
    toggleCanvas() {
      this.setState({canvas : !this.state.canvas})
    }
    colorBlack() {
      this.setState({color: 'rgb(0,0,0)'})
    }
    colorGrey() {
      this.setState({color: 'rgb(153,153,153)'})
    }
    colorWhite() {
      this.setState({color: 'rgb(255,255,255)'})
    }
    colorRed() {
      this.setState({color: 'rgb(255,0,0)'})
    }
    colorOrange() {
      this.setState({color: 'rgb(255,127,0)'})
    }
    colorYellow() {
      this.setState({color: 'rgb(255,255,0)'})
    }
    colorGreen() {
      this.setState({color: 'rgb(0,255,0)'})
    }
    colorBlue() {
      this.setState({color: 'rgb(0,0,255)'})
    }
    colorIndigo() {
      this.setState({color: 'rgb(75,0,130)'})
    }
    colorViolet() {
      this.setState({color: 'rgb(148,0,211)'})
    }
     render() {
        return (
          <div className="canvas">
            <div className="canvasText">
              <br/><h3>Draw your word below:</h3>
            </div>
              <img src="https://i.imgur.com/8QS5rpm.gif" onClick={this.toggleCanvas}/>
              <div className="palette">
                <button className="black" onClick={this.colorBlack}></button>
                <button className="grey" onClick={this.colorGrey}></button>
                <button className="white" onClick={this.colorWhite}></button>
                <button className="red" onClick={this.colorRed}></button>
                <button className="orange" onClick={this.colorOrange}></button>
                <button className="yellow" onClick={this.colorYellow}></button>
                <button className="green" onClick={this.colorGreen}></button>
                <button className="blue" onClick={this.colorBlue}></button>
                <button className="indigo" onClick={this.colorIndigo}></button>
                <button className="violet" onClick={this.colorViolet}></button>
              </div>
                { this.state.canvas === true ?
                <section className="newCanvas">
                  <SketchField width='480px' height='480px' tool={Tools.Pencil} lineColor={this.state.color} lineWidth={2} backgroundColor='white'/>
                </section>
                : <div className="newCanvas">
                    <SketchField width='480px' height='480px' tool={Tools.Pencil} lineColor={this.state.color} lineWidth={2} backgroundColor='white'/>
                  </div>}
           </div>
        )
     }
}

export default Canvas
