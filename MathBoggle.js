import React from 'react'
import ScoreTracker from './math-boggle/ScoreTracker'
import TimeTracker from './math-boggle/TimeTracker'
import GameBoard from './math-boggle/GameBoard'

class MathBoggle extends React.Component {
  constructor(){
    super()
    this.state = {
      score: 0,
      playing: false
    }
    this.addToScore = this.addToScore.bind(this)
    this.onCountdownComplete = this.onCountdownComplete.bind(this)
    this.playMathBoggle = this.playMathBoggle.bind(this)
  }

  onCountdownComplete(){
    this.playMathBoggle(false)
  }

  addToScore(scoreToAdd){
    this.setState({
      score: this.state.score + scoreToAdd
    })
  }

  playMathBoggle(isPlaying){
    this.setState({playing: isPlaying})
    if(isPlaying){
      this.setState({score: 0})
    }
  }

  render(){
    return (
      <div>
        <div className="math-boggle">
          <TimeTracker
            isPlaying={this.state.playing}
            totalTime={360}
            onCountdownComplete={this.onCountdownComplete}/>
          <ScoreTracker
            score={this.state.score} />
          <button
            disabled={this.state.playing}
            onClick={this.playMathBoggle.bind(this, true)} >Play</button>
          <GameBoard
            score={this.state.score}
            addToScore={this.addToScore}
            isPlaying={this.state.playing} />
        </div>
      </div>
    )
  }
}

export default MathBoggle
