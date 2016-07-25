import React from 'react'
class OperandsRow extends React.Component {
  constructor(props){
    super()
    this.handleClick = this.handleClick.bind(this)
    this.operandsButtons = []
  }
  handleClick(number, column){
    this.props.receiveClick(number, this.props.row, column)
  }
  render(){
    this.operandsButtons = this.props.rowNumbers.map(function(operand, key){
      return (
        <button
          key={key}
          className="button"
          onClick={this.handleClick.bind(this, operand, key)}
          disabled={this.props.disabledButtons[key]}
        >{operand}</button>
      )
    }, this)
    return (
      <div>
        {this.operandsButtons}
      </div>
    )
  }
}

export default OperandsRow
