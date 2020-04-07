import React, {Component} from 'react'

class Main extends React.Component {
  constructor (props) {
        super(props)
        this.state = {
            baseURL: 'http://localhost:3000/words',
            randomWord: '',
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
  render () {
    return (
      <main>
        <button onClick={this.generateRandomWord}>Generate Word</button>
        <div className="word"><h3>{this.state.randomWord}</h3></div>
      </main>
    )
  }
}

export default Main
