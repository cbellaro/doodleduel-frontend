import React, {Component} from 'react'

class Scoreboard extends Component {
  constructor(props) {
    super(props)
      this.state = {
      scoreboard: 0
    }
    this.addPoint = this.addPoint.bind(this)
    this.resetScoreBoard = this.resetScoreBoard.bind(this)
  }
  addPoint() {
    this.setState(newScore => ({
      scoreboard: newScore.scoreboard + 1
    }))
  }
  resetScoreBoard() {
    this.setState(newScore => ({
      scoreboard: newScore.scoreboard = 0
    }))
    }
    render(){
      return(
        <div className="scoreboard">
          <h2>Score: {this.state.scoreboard}</h2>
          <img src="https://i.imgur.com/dMsCVI3.gif" onClick={this.addPoint}/>
          <img src="https://i.imgur.com/VbJoJts.gif" onClick={this.resetScoreBoard}/>
          <br/><br/>
        </div>
      )
    }
  }

export default Scoreboard
