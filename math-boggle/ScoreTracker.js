import React from 'react'

class ScoreTracker extends React.Component {
  constructor(props){
    super()
  }
  render(){
    return (
      <div>
        Score: {this.props.score}
      </div>
    )
  }
}

export default ScoreTracker
