import React from 'react'
import Operands from './Operands'
import Operators from './Operators'

class GameBoard extends React.Component {
  constructor(props){
    super()
    this.state = {
      operationArray: [],
      correctAnswerArray: []
    }
    this.receiveClick = this.receiveClick.bind(this)
    this.findAnswer = this.findAnswer.bind(this)
    this.checkAnswer = this.checkAnswer.bind(this)
    this.resetOperation = this.resetOperation.bind(this)
    this.addToOperation = this.addToOperation.bind(this)
  }
  receiveClick(buttonClicked){

    if(!this.props.isPlaying){
      return
    }

    if(buttonClicked == "wrong"){
      this.resetOperation()
      return
    }

    if(this.state.correctAnswerArray.length > 0){
      this.checkAnswer(buttonClicked)
    }else{
      this.addToOperation(buttonClicked)
    }
  }
  checkAnswer(buttonClicked){
    if(buttonClicked == this.state.correctAnswerArray[0]){
      var newCorrectAnswerArray = this.state.correctAnswerArray
      newCorrectAnswerArray.shift()
      if(newCorrectAnswerArray.length == 0){
        console.log("Correct answer!!!")
        this.props.addToScore(1)
        this.resetOperation()
      }else{
        this.setState({
          correctAnswerArray: newCorrectAnswerArray
        })
      }
    }else{
      console.log("Wrong answer")
      this.resetOperation()
    }
  }
  addToOperation(buttonClicked){
    switch(buttonClicked){
      case "=":
        this.findAnswer()
        break
      default:
        this.setState({
          operationArray: this.state.operationArray.concat([buttonClicked])
        })
    }
  }
  findAnswer(){
    //To do: check to make sure it's a valid equation. Ex: 15=15 or 1203*0=0 are not acceptable
    var correctAnswer = eval(this.state.operationArray.join(''))
    this.setState({
      correctAnswerArray: correctAnswer.toString(10).split('')
    })
  }
  resetOperation(){
    this.setState({
      operationArray: [],
      correctAnswerArray: []
    })
  }
  componentWillReceiveProps(nextProps){
    if(!this.props.isPlaying){
      this.resetOperation()
    }
  }
  render(){
    console.log("Operation array: " + this.state.operationArray)
    console.log("Correct array: " + this.state.correctAnswerArray)
    return (
      <div>
        <Operands
          isPlaying={this.props.isPlaying}
          receiveClick={this.receiveClick}
          operationArray={this.state.operationArray} />
        <Operators
          operationArray={this.state.operationArray}
          receiveClick={this.receiveClick} />
      </div>
    )
  }
}

export default GameBoard
