import React, { Component } from 'react'

class IntervalClassCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  componentDidMount(){
    this.inteval = setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  tick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}

export default IntervalClassCounter
