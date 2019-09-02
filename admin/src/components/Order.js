import React, { PureComponent } from "react";
import "../styles/order.css";
import axios from "axios";
import OrderCard from "./OrderCard";

class Order extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      orders: []
    };
  }

  componentDidMount() {
    axios
      .get("/admin/orders")
      .then((response, data) => {
        // console.log([response.data]);
        this.setState({
          orders: response.data
        });
      })

      .catch(function(error) {
        console.log(error);
      });
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
        <div className="card gap">
          <div className="card-header  ">
            {this.state.orders.map((item, index) => {
              return (
                <OrderCard
                  key={item.id}
                  orderNumber={item.order}
                  orderItem={item.orderItems}
                  count={item.count}
                  sum={item.sum}
                  date={item.myDate}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
