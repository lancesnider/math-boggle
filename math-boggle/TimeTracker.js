import React from 'react'

class TimeTracker extends React.Component {
  constructor(props){
    super()
    this.state = {
      timeRemaining: props.totalTime,
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
      this.props.onCountdownComplete()
    }
    this.setState({ timeRemaining: newTimeRemaining })
  }
  componentWillUnmount(){
    clearInterval(this.state.intervalID)
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.isPlaying && !this.props.isPlaying){
      this.setState({timeRemaining: this.props.totalTime})
      this.startCountdown()
    }
  }
  render(){
    return (
      <div>Time Remaining: {this.state.timeRemaining}</div>
    )
  }
}

export default TimeTracker
