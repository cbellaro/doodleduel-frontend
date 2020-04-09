import React from 'react';
import {SketchField, Tools} from 'react-sketch';
import Canvas from "./Components/Canvas.js";
import Main from "./Components/Main.js";
import Scoreboard from "./Components/Scoreboard.js";

class App extends React.Component {
  state = {
    modal: false
  }
  toggleModal = () => {
    this.setState({modal : !this.state.modal})
  }
  render() {
    return (
      <div className="container">
      <div className="modal">
        <img src="https://i.imgur.com/qtokv1f.gif" onClick={this.toggleModal}/>
        { this.state.modal === false ?
          <div id="modal-closed"></div>
          : <div id="modal-open">
            <div id="modal-textbox">
              <img src="https://i.imgur.com/3okB45N.gif" onClick={this.toggleModal}/>
              <h1>How to Play Doodle Duel:</h1>
              <p>Doodle Duel is a competive drawing game that doubles as a battle of wits!</p>
              <p>The goal of the game is to get your teammate to guess your randomly generated word before the timer counts down to zero. The first team to ten points wins!</p>
              <p>To start the game, decide which team gets to go first. You must then decide which teammate will make a doodle this round, the other teammate will get to doodle on your team's next turn. The doodler then clicks on the DRAW! button and has a minute to have their partner successfully guess their word based on the doodle they create.</p>
              <p>If your partner guesses the word correctly then you earn a point! If they can't guess the word before the time runs out then your opponent gets a point!</p>
              <p>Earning a point for your own team or your opponent's team ends the round. The opposing team now gets their turn to pick a doodler and start the process over again.</p>
              <p>After taking a turn, the user should press the STOP TIMER button, and then the RESET TIMER button before turning it over to their opponent. This will reset the game and enable them to press the DRAW! button.</p>
              <p>If you cannot draw your randomly generated, do not generate a new word. Instead, you must skip your turn.</p>
            </div>
          </div>}
        </div>
        <img className="logo" src="https://i.imgur.com/mYtU04k.png?1"></img>
        <div className="scoreContainer">
          <div className="playerContainer">
            <h1>Team 1</h1>
            <div className="scoreboards">
              <Scoreboard/>
            </div>
          </div>
          <div className="playerContainer">
            <h1>Team 2</h1>
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
