import React, { PureComponent } from "react";
import "../styles/product.css";

class Product extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      n: 0
    };
  }
  handleChange = e => {
    // console.log(this.props);

    // console.log(e.target.value);
    this.setState({
      n: e.target.value
    });
  };

  addClick = () => {
    this.setState({
      n: this.state.n + 1
    });
  };

  reduceClick = () => {
    this.setState({
      n: this.state.n - 1
    });
  };

  render() {
    return (
      <div className="card mb-3 ">
        <div className="row no-gutters">
          <div className="col-sm-3 col-3 suit">
            <img
              className="rosepic img-fluid"
              src={require("../image/rose1.jpeg")}
              alt="加载中..."
            />
          </div>
          <div className="col-sm-8 col-8 ">
            <div className="card-body">
              <h5 className="card-title ">{this.props.name}</h5>
              <p className="intro">{this.props.brief}</p>
            </div>
          </div>
        </div>
        <div className="buy d-flex justify-content-end">
          <div className="number col-sm-6 col-6 ">
            <div className="row-price">
              <p className="price">¥ {this.props.price}</p>
            </div>
            <div className="row-stock">
              <p className="stock ">库存{this.props.stock}件</p>
            </div>
          </div>

          <div className="operate col-sm-6 col-6 ">
            <button
              type="button"
              className="button"
              onClick={this.reduceClick}
              disabled={this.state.n <= 0}
            >
              -
            </button>
            <input
              type="number"
              className="button-input"
              onChange={this.handleChange}
              value={
                this.state.n <= this.props.stock
                  ? this.state.n
                  : this.props.stock
              }
            />

            <button
              type="button"
              className="button"
              onClick={this.addClick}
              disabled={this.state.n >= this.props.stock}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
