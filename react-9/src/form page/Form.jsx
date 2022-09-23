import React, { Component } from 'react'
class Form extends Component {
  state = {
  }
  emailHandler = (event) => {
    this.setState = { email: event.target.value }
  }
  passwordlHandler = (event) => {
    this.setState = { pssword: event.target.value }
  }
  loginHandler = (event) => {
event.preventDefault()  }
  render() {
    return (
      <div>
        <h4>LOGIN DETAILS</h4>
        <pre>{JSON.stringify(this.state)}</pre>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <form onClick={this.loginHandler}>
                <div><label htmlFor="">EMAIL     ID</label>
                <input type="text" onClick={this.emailHandler}/></div>
                <div><label>PASSWORD</label>
                <input type="text" onClick={this.passwordlHandler} /></div>

                <br/>
                <input type="submit"className='btn btn-success' value="LOGIN" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Form
