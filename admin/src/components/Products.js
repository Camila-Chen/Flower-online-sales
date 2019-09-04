import React, { PureComponent } from "react";
import "../styles/product.css";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import axios from "axios";

class Product extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  render() {
    return (
      <div>
        <form className="form-inline d-flex justify-content-center search">
          <input
            className="form-control col-8 "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success search-btn " type="submit">
            Search
          </button>
        </form>
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
