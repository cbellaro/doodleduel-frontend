import React, {Component} from 'react'

class Main extends React.Component {
  constructor (props) {
    super(props)
      this.state = {
        baseURL: 'http://localhost:3000/words',
        randomWord: '',
        seconds: 60,
        maxTime: 60,
        isOn: false
      }
      this.generateRandomWord = this.generateRandomWord.bind(this)
    }
    generateRandomWord (event) {
      this.setState({
        randomWord: this.state.randomWord,
      },
      () => {
        fetch(this.state.baseURL)
        .then(response =>{
          return response.json()
        })
        .then(
          (response) => {
            this.setState({randomWord: response[(Math.floor(Math.random() * response.length))].draw})
          }
        )}
      )}
    startTimer = () => {
      this.setState({
        seconds: this.state.seconds,
        isOn: true
      })
      this.timer = setInterval(() => {
        let newTime = this.state.seconds - 1
        if(newTime >= 0){
          this.setState({
            seconds: newTime
          })
        } else{
          clearInterval(this.timer)
          this.setState({
            isOn: false
          })
        }
      }, 1000)
    }
    stopTimer = () => {
      clearInterval(this.timer)
      this.setState({
        isOn: false
    })
    }
    resetTimer = () => {
      this.setState({
        seconds: this.state.maxTime
    })
  }
  render () {
    return (
      <main>
        <div className="timer">
          <h1>{this.state.seconds<10 ?
            `0${ this.state.seconds }`
            : this.state.seconds}
            </h1>
        </div>
        <div className="buttons">
          <img src="https://i.imgur.com/Yoo0TCy.gif" onClick={(event) => {
            this.startTimer()
            this.generateRandomWord()
          }}/>
          <img src="https://i.imgur.com/6b8JfpB.gif" onClick={this.stopTimer}/>
          <img src="https://i.imgur.com/Id6G3Fv.gif" onClick={this.resetTimer}/>
          <div className="word"><h3>{this.state.randomWord}</h3></div>
          </div>
      </main>
    )
  }
}

export default Main
