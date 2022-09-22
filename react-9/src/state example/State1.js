import React, { Component } from 'react'
class State1 extends Component {
  state = {
    msg: 'hello',
  }
  gmHandler = () => {
    this.setState({ msg: 'hey good morning' })
  }
  gnHandler = () => {
    this.setState({ msg: 'hey good night' })
  }
  render() {
    return (
      <div>
        <h4>msg:{this.state.msg}</h4>
        <button onClick={this.gmHandler}>GM</button>
        <button onClick={this.gnHandler}>GN</button>
      </div>
    )
  }
}
export default State1
