import React from 'react'
import Operands from './Operands'
import Operators from './Operators'

class GameBoard extends React.Component {
  constructor(props){
    super()
    this.receiveClick = this.receiveClick.bind(this)
  }
  receiveClick(data){
    console.log("Button clicked: " + data)
  }
  render(){
    return (
      <div>
        <Operands isPlaying={this.props.isPlaying} receiveClick={this.receiveClick} />
        <Operators receiveClick={this.receiveClick} />
      </div>
    )
  }
}

export default GameBoard
