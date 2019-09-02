import React, { PureComponent } from "react";
import axios from "axios";
import Card from "./Card";
import { Link } from "react-router-dom";
import "../styles/categories.css";

class Category extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }

  render() {
    return (
      <div id="categories">
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
        {this.state.categories.map((item, index) => {
          return (
            <Card
              key={item.id}
              name={item.name}
              parentId="categories"
              openId={item.id}
            />
          );
        })}
        <div className="add">
          <button
            type="button"
            className="btn btn-outline-primary btn-lg  btn-text "
          >
            <Link to="/categories/add">添加</Link>
          </button>
        </div>
      </div>
    );
  }
  componentDidMount() {
    axios
      .get("/admin/categories")
      .then((response, data) => {
        // console.log([response.data]);
        this.setState({
          categories: response.data
        });
        // console.log(response);
      })

      .catch(function(error) {
        console.log(error);
      });
  }
}

export default Category;
