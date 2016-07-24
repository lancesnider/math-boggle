import React from 'react'

class Operators extends React.Component {
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
                    onClick={this.props.receiveClick.bind(this, symbol)}
                  >
                    {symbol}
                  </button>
                )
            }, this)
          }
        </div>
        <button
          className="button equals"
          onClick={this.props.receiveClick.bind(this, "=")}
        >=</button>
      </div>
    )
  }
}

export default Operators
