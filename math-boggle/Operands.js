import React from 'react'
import OperandsRow from './OperandsRow'

class Operands extends React.Component {
  constructor(props){
    super()

    this.arrayOfRandomNumbers = this.arrayOfRandomNumbers.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.resetOperands = this.resetOperands.bind(this)
    this.checkIfAdjacent = this.checkIfAdjacent.bind(this)

    this.previousBtnRowColumn = []
  }

  componentWillMount(){
    this.arrayOfRandomNumbers(5, 5)
  }

  componentWillReceiveProps(nextProps){
    if(!this.props.isPlaying && nextProps.isPlaying){
      this.arrayOfRandomNumbers(5, 5)
    }

    if(nextProps.operationArray.length == 0){
      this.resetOperands()
    }
  }

  resetOperands(){
    this.previousBtnRowColumn = []
  }

  arrayOfRandomNumbers(rows, columns){
    var numbersArray = []
    for (var i = 0; i < rows; i++) {
      var numbersInRow = []
      for (var j = 0; j < rows; j++) {
        var randomNumber = Math.floor(Math.random() * 10)
        numbersInRow.push(randomNumber)
      }
      numbersArray.push(numbersInRow)
    }
    this.setState({
      randomNumbers: numbersArray
    })
  }

  handleClick(number, row, column){
    if(this.checkIfAdjacent(row, column)){
      this.props.receiveClick(number)
    }else{
      this.props.receiveClick("wrong")
    }
  }

  checkIfAdjacent(row, column){
    var rowDistance = Math.abs(row - this.previousBtnRowColumn[0])
    var columnDistance = Math.abs(column - this.previousBtnRowColumn[1])
    if(rowDistance <= 1 && columnDistance <= 1 || this.previousBtnRowColumn.length == 0){
      this.previousBtnRowColumn = [row, column]
      return true
    }
    return false
  }

  render(){
    var rows = this.state.randomNumbers.map(function(number, key){
      return (
        <div key={key} >
          <OperandsRow row={key} rowNumbers={number} receiveClick={this.handleClick} />
        </div>
      )
    }, this)
    return (
      <div className="operands">
        {rows}
      </div>
    )
  }
}

export default Operands
