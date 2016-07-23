import React from 'react'

class ScoreTracker extends React.Component {
  constructor(props){
    super()
    this.state = {
      score: 0
    }
  }
  updateScore(){
    this.setState({
      score: this.state.score + this.props.scoreIncrease
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
      </div>
    )
  }
}

export default ScoreTracker
