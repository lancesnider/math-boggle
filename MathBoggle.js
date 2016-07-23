import React from 'react'
import ScoreTracker from './math-boggle/ScoreTracker'
import TimeTracker from './math-boggle/TimeTracker'

class NumbersBoard extends React.Component {
  render(){
    return <div>Game Board Goes Here</div>
  }
}

class Operators extends React.Component {
  render(){
    return <div>Operators go here</div>
  }
}

class MathBoggle extends React.Component {
  constructor(){
    super()
    this.state = {
      score: 0
    }
    this.addToScore = this.addToScore.bind(this)
    this.onCountdownComplete = this.onCountdownComplete.bind(this)
  }

  onCountdownComplete(){
    console.log("Countdown complete")
  }

  addToScore(scoreToAdd){
    this.setState({
      score: this.state.score + scoreToAdd
    })
  }

  render(){
    return (
      <div>
        <TimeTracker totalTime={59} onCountdownComplete={this.onCountdownComplete} />
        <ScoreTracker score={this.state.score} />
        <button onClick={() => this.addToScore(3)} />
        <NumbersBoard />
        <Operators />
      </div>
    )
  }
}

export default MathBoggle
