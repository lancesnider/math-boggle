import React from 'react'

class ScoreTracker extends React.Component {
  constructor(props){
    super()
    this.state = {
      score: props.scoreIncrease
    }
    this.updateScore = updateScore.bind(this)
  }
  updateScore(){
    console.log("asdf")
    this.setState({
      score: this.state.score + 1
    })
  }
  resetScore(){
    this.setState({
      score: 0
    })
  }
  render(){
    return (
      <div>
        Score: {this.state.score}
        <button onClick={this.updateScore}></button>
        <button onClick={this.resetScore}></button>
      </div>
    )
  }
}

export default ScoreTracker
