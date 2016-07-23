import React from 'react'

class Operands extends React.Component {
  render(){
    return (
      <div>Operands</div>
    )
  }
}

class Operators extends React.Component {
  render(){
    return (
      <div>Operators</div>
    )
  }
}

class GameBoard extends React.Component {
  render(){
    return (
      <div>
        <Operands />
        <Operators />
      </div>
    )
  }
}

export default GameBoard
