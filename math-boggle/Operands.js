import React from 'react'

class Operands extends React.Component {
  constructor(props){
    super()
    this.arrayOfRandomNumbers = this.arrayOfRandomNumbers.bind(this)
  }

  componentWillMount(){
    this.arrayOfRandomNumbers(5, 5)
  }

  componentWillReceiveProps(nextProps){
    if(!this.props.isPlaying && nextProps.isPlaying){
      this.arrayOfRandomNumbers(5, 5)
    }
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

  render(){

    var rows = this.state.randomNumbers.map(function(number, key){
      return (
        <div key={key} >
          <OperandsRow row={key} rowNumbers={number} receiveClick={this.props.receiveClick} />
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

class OperandsRow extends React.Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(number, column){
    console.log(this.props.row, column)
    this.props.receiveClick(number)
  }
  render(){
    var operandsButtons = this.props.rowNumbers.map(function(operand, key){
      return (
        <button key={key} className="button" onClick={this.handleClick.bind(this, operand, key)} >{operand}</button>
      )
    }, this)
    return (
      <div>
        {operandsButtons}
      </div>
    )
  }
}

export default Operands
