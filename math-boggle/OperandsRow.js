import React from 'react'
class OperandsRow extends React.Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(number, column){
    this.props.receiveClick(number, this.props.row, column)
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

export default OperandsRow
