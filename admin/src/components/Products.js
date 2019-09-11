import React, { PureComponent } from "react";
import "../styles/product.css";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import axios from "axios";

class Product extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      result: undefined,
      search: ""
    };
  }
  search = "";
  handleChange = e => {
    this.search = e.target.value;
  };

  componentDidMount() {
    axios
      .get("/admin/products")
      .then(response => {
        this.setState({
          products: response.data
        });
      })

      .catch(function(error) {
        console.log(error);
        alert(error.message);
      });
  }

  handleClick = () => {
    const result = this.state.products.filter(
      word => word.name.indexOf(this.search) !== -1
    );
    this.setState({
      result: result
    });
  };

  render() {
    return (
      <div>
        <div className="search d-flex flex-row justify-content-center">
          <input
            onChange={this.handleChange}
            className="form-control col-7 col-sm-7"
            type="search"
            placeholder="搜索产品"
            aria-label="Search"
          />
          <button
            onClick={this.handleClick}
            className="btn btn-outline-success search-btn col-sm-3 col-3 "
          >
            搜索
          </button>
        </div>
        <div className="products">
          {this.state.result == 0 ? (
            <p className="d-flex justify-content-center no-product text-primary">
              没有该产品
            </p>
          ) : (
            ""
          )}
          {this.state.result === undefined
            ? this.state.products.map((item, index) => {
                return (
                  <ProductCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    stock={item.stock}
                    price={item.price}
                    brief={item.brief}
                    picture={item.picture}
                  />
                );
              })
            : this.state.result.map((item, index) => {
                return (
                  <ProductCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    stock={item.stock}
                    price={item.price}
                    brief={item.brief}
                    picture={item.picture}
                  />
                );
              })}
        </div>
        <div className="add">
          <Link to="/products/add">
            <button
              type="button"
              className="btn btn-outline-primary btn-lg  btn-text "
            >
              添加
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Product;
