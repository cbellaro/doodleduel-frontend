import React from 'react';
import {SketchField, Tools} from 'react-sketch';

class Canvas extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        canvas: true,
        color: 'rgb(0,0,0)',
        tool: Tools.Pencil
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
      this.toolPencil = this.toolPencil.bind(this);
      this.toolLine = this.toolLine.bind(this);
      this.toolRectangle = this.toolRectangle.bind(this);
      this.toolCircle = this.toolCircle.bind(this);
      this.toolSelect = this.toolSelect.bind(this);
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
    toolPencil() {
      this.setState({tool: Tools.Pencil})
    }
    toolLine() {
      this.setState({tool: Tools.Line})
    }
    toolRectangle() {
      this.setState({tool: Tools.Rectangle})
    }
    toolCircle() {
      this.setState({tool: Tools.Circle})
    }
    toolSelect() {
      this.setState({tool: Tools.Select})
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
              <div className="tools">
                <button onClick={this.toolPencil}>pencil</button>
                <button onClick={this.toolLine}>line</button>
                <button onClick={this.toolRectangle}>rectangle</button>
                <button onClick={this.toolCircle}>circle</button>
                <button onClick={this.toolSelect}>select</button>
              </div>
                { this.state.canvas === true ?
                <section className="newCanvas">
                  <SketchField width='480px' height='480px' tool={this.state.tool} lineColor={this.state.color} lineWidth={2} backgroundColor='white'/>
                </section>
                : <div className="newCanvas">
                    <SketchField width='480px' height='480px' tool={this.state.tool} lineColor={this.state.color} lineWidth={2} backgroundColor='white'/>
                  </div>}
           </div>
        )
     }
}

export default Canvas
