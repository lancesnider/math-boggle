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
    this.allEquationsNumbers = []
    this.usedPatterns = []
    this.primes = [3,5,7,11,13,17,19,23,29,31]
    this.operandsPoints = {"+": 1, "-": 2, "*": 4, "/":6, "^":8}

    this.receiveClick = this.receiveClick.bind(this)
    this.findAnswer = this.findAnswer.bind(this)
    this.checkAnswer = this.checkAnswer.bind(this)
    this.resetOperation = this.resetOperation.bind(this)
    this.addToOperation = this.addToOperation.bind(this)
    this.findPower = this.findPower.bind(this)
    this.uniqueAnswerCode = this.uniqueAnswerCode.bind(this)
    this.determinePoints = this.determinePoints.bind(this)
  }
  receiveClick(buttonClicked){

    if(!this.props.isPlaying){
      return
    }

    if(buttonClicked == "wrong"){
      this.resetOperation()
      return
    }

    if(Number.isInteger(buttonClicked)){
      this.allEquationsNumbers.push(buttonClicked)
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

        //check to see if this is a repeated pattern
        var uniqueCode = this.uniqueAnswerCode()
        if(this.usedPatterns.indexOf(uniqueCode) > -1){
          this.resetOperation()
          return
        }

        this.usedPatterns.push(uniqueCode)

        console.log("Correct answer!!!")
        var points = this.determinePoints(uniqueCode)
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

  determinePoints(uniqueCode){
    var points = this.allEquationsNumbers.length
    for (var i = 0; i < this.state.operationArray.length; i++) {
      if(this.state.operationArray[i] == "+")
        points += 1
      if(this.state.operationArray[i] == "-")
        points += 2
      if(this.state.operationArray[i] == "*")
        points += 4
      if(this.state.operationArray[i] == "/")
        points += 5
      if(this.state.operationArray[i] == "^")
        points += 8
    }
    return points
  }

  uniqueAnswerCode(){
    var uniqueCode = 1;
    for (var i = 0; i < this.allEquationsNumbers.length; i++) {
      uniqueCode *= this.primes[this.allEquationsNumbers[i]]
    };
    return uniqueCode
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
    this.allEquationsNumbers = []
  }
  componentWillReceiveProps(nextProps){
    if(!nextProps.isPlaying){
      this.usedPatterns = []
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
