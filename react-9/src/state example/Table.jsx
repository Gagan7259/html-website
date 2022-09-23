import React, { Component } from 'react'

class Table extends Component {
  state = {
    product_name: 'ASUS TUF Gaming A15 (2021), 15.6-inch (39.62 cm) FHD 144Hz,',
    price: 68000,
    image:'https://m.media-amazon.com/images/I/21wFxEvQx+L.jpg',
    qty: 1
  }
  incrHandler = () => {
    this.setState({ qty: this.state.qty + 1 })
  }
  decrHandler = () => {
    this.setState({ qty: this.state.qty - 1 })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-hover">
              <thead className="bg-info">
                <th>product_name</th>
                <th>image</th>
                <th>price</th>
                <th>qty</th>
                <th>total price</th>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.product_name}</td>
                  <td>
                    <img src="{this.state.image}" alt="" />
                  </td>
                  <td>{this.state.price}</td>

                  <td>
                    <i
                      className="fa fa-minus-circle"
                      onClick={this.decrHandler}
                    ></i>
                    {this.state.qty}
                    <i
                      className="fa fa-plus-circle"
                      onClick={this.incrHandler}
                    ></i>
                  </td>
                  <td>{this.state.price * this.state.qty}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Table
