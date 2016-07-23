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
