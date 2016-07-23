import React from 'react'

class TimeTracker extends React.Component {
  constructor(){
    super()
    this.state = {
      timeRemaining: 59,
      timeLeft: true
    }
    this.countdown = this.countdown.bind(this)
    this.startCountdown = this.startCountdown.bind(this)
  }
  startCountdown(){
    var intervalID = setInterval(this.countdown, 1000)
    this.setState({
      intervalID: intervalID,
      timeLeft: true
    })
  }
  countdown(){
    var newTimeRemaining = this.state.timeRemaining - 1;
    if(newTimeRemaining <= 0){
      clearInterval(this.state.intervalID)
      this.setState({ timeLeft: false })
    }
    this.setState({ timeRemaining: newTimeRemaining })
  }
  componentDidMount(){
    this.startCountdown()
  }
  componentWillUnmount(){
    clearInterval(this.state.intervalID)
  }
  render(){
    return (
      <div>Time Remaining: {this.state.timeRemaining}</div>
    )
  }
}

export default TimeTracker
