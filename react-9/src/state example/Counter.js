import React, { Component } from 'react'

class Counter extends React.Component{
    state={
        qty:1
    }
    incrHandler=()=>{
        this.setState({qty:this.state.qty + 1})
    }
    decrHandler=()=>{
        this.setState({qty:this.state.qty - 1})
    }
    render (){
        return (
          <div>
            <h4>Quality:{this.state.qty}</h4>
            <button onClick={this.incrHandler}>incr</button>
            <button onClick={this.decrHandler}>decr</button>
          </div>
        )
      }
        
    }
  
    

export default Counter