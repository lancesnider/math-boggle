import React from 'react'
import ScoreTracker from './math-boggle/ScoreTracker'

class TimeTracker extends React.Component {
  render(){
    return <div>Countdown Timer Goes Here</div>
  }
}

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
  render(){
    return (
      <div>
        <TimeTracker />
        <ScoreTracker />
        <NumbersBoard />
        <Operators />
      </div>
    )
  }
}

export default MathBoggle
