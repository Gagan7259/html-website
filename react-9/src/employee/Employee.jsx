import React, { Component } from 'react'
 class Employee extends Component {
    state={
        emp_Sal : 60000
    }
    btnHandler(s){
      console.log("reading button data",s);
this.setState({emp_sal:60000 + s})
    }
  render() {
    return (
      <div>
        <h1>employee sal:{this.state.emp_Sal}</h1>
        <button onClick={this.btnHandler.bind(this,5000)}>HIKE 50K</button>
        <br/> <br/><br/>
        <button onClick={this.btnHandler.bind(this,100000)}>HIKE 100K</button>
        <br/><br/><br/><br/>
        <button onClick={this.btnHandler.bind(this,150000)}>HIKE 150K</button>
        <br/>
      </div>
    )
  }
}

export default Employee