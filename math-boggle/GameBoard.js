import React from 'react'

class Operands extends React.Component {
  render(){
    return (
      <div className="operands">
        <div>
          <button className="button">9</button>
          <button className="button">9</button>
          <button className="button">9</button>
          <button className="button">9</button>
          <button className="button">9</button>
        </div>
        <div>
          <button className="button">9</button>
          <button className="button">9</button>
          <button className="button">9</button>
          <button className="button">9</button>
          <button className="button">9</button>
        </div>
        <div>
          <button className="button">9</button>
          <button className="button">9</button>
          <button className="button">9</button>
          <button className="button">9</button>
          <button className="button">9</button>
        </div>
        <div>
          <button className="button">9</button>
          <button className="button">9</button>
          <button className="button">9</button>
          <button className="button">9</button>
          <button className="button">9</button>
        </div>
        <div>
          <button className="button">9</button>
          <button className="button">9</button>
          <button className="button">9</button>
          <button className="button">9</button>
          <button className="button">9</button>
        </div>
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
