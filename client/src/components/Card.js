import React, { PureComponent } from "react";
import "../styles/card.css";
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
      .get("/admin/products/category/" + this.props.openId)
      .then(response => {
        this.setState({
          products: response.data
        });
        // console.log(response);
      })

      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    const { openId, parentId } = this.props;
    return (
      <div className="card gap">
        <div className="card-header">
          <h2 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target={"#" + openId}
              aria-expanded="false"
              aria-controls={openId}
            >
              {this.props.name}
            </button>
          </h2>
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
                  changeOrder={this.props.changeOrder}
                  categoryName={this.props.name}
                  key={item.id}
                  name={item.name}
                  brief={item.brief}
                  price={item.price}
                  stock={item.stock}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
