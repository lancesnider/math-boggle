import React from 'react'

class Operands extends React.Component {
  constructor(){
    super()
    this.arrayOfRandomNumbers = this.arrayOfRandomNumbers.bind(this)
  }

  componentWillMount(){
    this.arrayOfRandomNumbers(5, 5)
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
          <OperandsRow rowNumbers={number} />
        </div>
      )
    })
    return (
      <div className="operands">
        {rows}
      </div>
    )
  }
}

class OperandsRow extends React.Component {
  render(){
    var operands = this.props.rowNumbers.map(function(operand, key){
      return (
        <button key={key} className="button">{operand}</button>
      )
    })
    return (
      <div>
        {operands}
      </div>
    )
  }
}


class Operators extends React.Component {
  render(){
    return (
      <div>
        <div className="operators">
          <button className="button">+</button>
          <button className="button">-</button>
          <button className="button">*</button>
          <button className="button">/</button>
          <button className="button">^</button>
        </div>
        <button className="button equals">=</button>
      </div>
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
