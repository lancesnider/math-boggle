import React from 'react'
import Operands from './Operands'
import Operators from './Operators'
import Feedback from './Feedback'

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
    this.findPower = this.findPower.bind(this)
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
        var points = 1
        this.props.addToScore(points)
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
    var joinedEquation = this.state.operationArray.join('')

    while(joinedEquation.indexOf("^") > -1){
      joinedEquation = this.findPower(joinedEquation)
    }


    console.log("joined:", joinedEquation)

    //To do: check to make sure it's a valid equation. Ex: 15=15 or 1203*0=0 are not acceptable
    var correctAnswer = eval(joinedEquation)
    console.log("correctAnswer:", correctAnswer)
    this.setState({
      correctAnswerArray: correctAnswer.toString(10).split('')
    })
  }

  //Make powers work Math.pow(3,2) instead of 3^2
  findPower(equationString){
    var power = equationString.match(/(\d+)\^(\d+)/)
    var powerAsString = power[0].replace(/(\d+)\^(\d+)/, "Math.pow($1,$2)")
    var powerResult = eval(powerAsString)
    var newEquation = equationString.replace(/(\d+)\^(\d+)/, powerResult)
    return newEquation
  }

  resetOperation(){
    this.setState({
      operationArray: [],
      correctAnswerArray: []
    })
  }
  componentWillReceiveProps(nextProps){
    if(!nextProps.isPlaying){
      this.resetOperation()
    }
  }
  render(){
    return (
      <div>
        <Feedback
          score={this.props.score} />
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
