import React, { Component } from 'react'

export class Register extends Component {
  state = {
    email_id: '',
    password: '',
  }
  render() {
    return (
      <div>
        <div className="container">
          <pre>{JSON.stringify(this.state)}</pre>
          <div className="row">
            <div className="col-md-6">
                <div className="card bg-danger text-white">
                    <div className="card-headr">
                        <label>REGISTRATION</label>
                    </div>
                    <div className="card-body">
                        <div>
                            <label>EMAIL ID   </label>
                            <input type="text"  />
                        </div><div>
                            <label>PASSWORD</label>
                            <input type="text"  />
                        </div>
                        <div>
                            <input type="submit" className='bg-success' value="LOGIN" />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
