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
      search: ""
    };
  }
  search = "";
  handleChange = e => {
    this.search = e.target.value;
  };

  handleClick = () => {
    // debugger;
    const result = this.state.products.filter(
      word => word.name === this.search
    );

    this.setState({
      products: result
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
            placeholder="Search"
            aria-label="Search"
          />
          <button
            onClick={this.handleClick}
            className="btn btn-outline-success search-btn col-sm-3 col-3 "
          >
            Search
          </button>
        </div>
        <div className="products">
          {this.state.products.map((item, index) => {
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
          <button
            type="button"
            className="btn btn-outline-primary btn-lg  btn-text "
          >
            <Link to="/products/add">添加</Link>
          </button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios
      .get("/admin/products")
      .then((response) => {
        this.setState({
          products: response.data
        });
      })

      .catch(function (error) {
        console.log(error);
        alert(error.message);
      });
  }
}

export default Product;
