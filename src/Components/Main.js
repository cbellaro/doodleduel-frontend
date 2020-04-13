import React, {Component} from 'react'

class Main extends React.Component {
  constructor (props) {
    super(props)
      this.state = {
        baseURL: 'https://doodle-duel-backend.herokuapp.com/words',
        randomWord: '',
        showWord: true,
        seconds: 60,
        maxTime: 60,
        isOn: false
      }
      this.generateRandomWord = this.generateRandomWord.bind(this)
      this.toggleWord = this.toggleWord.bind(this)
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
      toggleWord() {
        this.setState({showWord : !this.state.showWord})
      }
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
          <h1>Time Remaining: {this.state.seconds<10 ?
            `0${ this.state.seconds }`
            : this.state.seconds}
            </h1>
        </div>
        <div className="buttons">
          <img src="https://i.imgur.com/Yoo0TCy.gif" onClick={() => {
            this.startTimer()
            this.generateRandomWord()
          }}/>
          <img src="https://i.imgur.com/6b8JfpB.gif" onClick={this.stopTimer}/>
          <img src="https://i.imgur.com/Id6G3Fv.gif" onClick={this.resetTimer}/>
          <img src="https://i.imgur.com/2hNgdbo.gif" onClick={this.toggleWord}/>
          { this.state.showWord === true ?
          <div className="word"><h3>Your word is: {this.state.randomWord}</h3></div>
          :<div className="word"><h3>Your partner's word is hidden</h3></div>}
        </div>
      </main>
    )
  }
}

export default Main
