import React, { PureComponent } from "react";
import "../styles/card.css";
import { Link } from "react-router-dom";
import CategoriesDelete from "./CategoriesDelete";
import Product from "./Product";
import axios from "axios";

class Card extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    axios
      .get("/public/products/category/" + this.props.openId)
      .then(response => {
        this.setState({
          products: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { openId, parentId } = this.props;

    return (
      <div>
        <div className="card gap">
          <div className="card-header d-flex flex-row">
            <h2 className="mb-0">
              <button
                className="btn btn-link category-btn"
                type="button"
                data-toggle="collapse"
                data-target={"#" + openId}
                aria-expanded="false"
                aria-controls={openId}
              >
                {this.props.name}
              </button>
            </h2>
            <div className="operate col-sm-4 col-4">
              <div className="update">
                <Link to={"/categories/update/" + this.props.openId}>编辑</Link>
              </div>
              <div className="delete">
                <CategoriesDelete deleteId={this.props.openId} />
              </div>
            </div>
          </div>

          <div
            id={openId}
            className="collapse"
            aria-labelledby={openId}
            data-parent={`#${parentId}`}
          >
            <div className="card-body">
              {this.state.products.map((item, index) => {
                return (
                  <Product
                    key={item.id}
                    orderItems={this.props.orderItems}
                    changeOrder={this.props.changeOrder}
                    addOrder={this.props.addOrder}
                    reduceOrder={this.props.reduceOrder}
                    categoryName={this.props.name}
                    item={item}
                    picture={item.picture}
                    Index={index}
                    // productIndex={this.props.productIndex}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
