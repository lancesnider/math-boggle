import React from 'react'

class Feedback extends React.Component {
  constructor(){
    super()
    this.state = {
      points: 0,
      hidden: "hidden"
    }
    this.hideInterval = this.hideInterval.bind(this)
  }

  componentWillReceiveProps(nextProps){
    if (this.props.score === nextProps.score)
      return

    if (nextProps.score === 0){
      this.setState({
        points: 0,
        hidden: "hidden"
      })
      return
    }

    var intervalId = setInterval(this.hideInterval, 1000)
    this.setState({
      points: nextProps.score - this.props.score,
      hidden: "",
      intervalId: intervalId
    })
  }

  hideInterval(){
    this.setState({
      hidden: "hidden"
    })
    clearInterval(this.state.intervalID)
  }
  componentWillUnmount(){
    this.hideInterval()
  }
  render(){
    return (
      <div className="feedback">
        <div className={this.state.hidden} >+{this.state.points}</div>
      </div>
    )
  }
}

export default Feedback
