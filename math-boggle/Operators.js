import React from 'react'

class Operators extends React.Component {
  constructor(){
    super()
    this.receiveClick = this.receiveClick.bind(this)
  }
  receiveClick(symbol){
    var thisOpsArr = this.props.operationArray
    // An equation must start with a number or a `-`
    if(thisOpsArr.length == 0 && symbol != "-")
      return
    // The only time you can have consecutive operators is if it's [not -][-]
    var previousSymbol = thisOpsArr[thisOpsArr.length - 1]
    if(!isNaN(previousSymbol) || (previousSymbol != "-" && symbol == "-")){
      this.props.receiveClick(symbol)
      return
    }
    this.props.receiveClick("wrong")
  }

  render(){
    var operatorSymbols = ["+", "-", "*", "/", "^"]
    return (
      <div>
        <div className="operators">
          {
            operatorSymbols.map(function(symbol, key){
              return (
                  <button
                    key={key}
                    className="button"
                    onClick={this.receiveClick.bind(this, symbol)}
                  >
                    {symbol}
                  </button>
                )
            }, this)
          }
        </div>
        <button
          className="button green equals"
          onClick={this.receiveClick.bind(this, "=")}
        >=</button>
      </div>
    )
  }
}

export default Operators
