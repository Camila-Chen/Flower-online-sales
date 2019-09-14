import React, { PureComponent } from "react";

import "./App.css";
// eslint-disable-next-line
import distpicker from "distpicker";
import CategoryList from "./components/CategoryList";
import Tacking from "./components/Tacking";
import Head from "./components/Head";
import axios from "axios";
import Cart from "./components/Cart";
import Transport from "./components/Transport";
import Client from "./components/Client";
import * as wxpay from './actions/wxpay';
if (process.env.NODE_ENV === "development") {
  var VConsole = require("vconsole/dist/vconsole.min.js");
  new VConsole();
}

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

wxpay.configure();
if (process.env.NODE_ENV !== "development") {
  wxpay.getUserInfo();
}

var count;
var sum;
var orderItems = localStorage.getItem("cart");
var transport = localStorage.getItem("transport");

orderItems = orderItems ? JSON.parse(orderItems) : [];
orderItems.forEach(element => {
  element.number = element.number || 0;
});

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      orderItems: orderItems,
      value: transport
    };
  }

  handleChange = e => {
    this.setState(
      {
        value: e
      },
      () => window.localStorage.setItem("transport", e)
    );
  };

  addOrder = (product, categoryName) => {
    if (this.state.orderItems.some(el => el.id === product.id)) {
      var found = this.state.orderItems.find(element => {
        return element.id === product.id;
      });
      found.number = (parseInt(found.number) || 0) + 1;
      found.number = Math.min(found.number, product.stock);
      this.setState(
        {
          orderItems: [...this.state.orderItems]
        },
        () =>
          window.localStorage.setItem(
            "cart",
            JSON.stringify(this.state.orderItems)
          )
      );
    } else {
      const item = product;
      item.number = 1;
      if (this.state.orderItems.some(el => el.categoryName === categoryName)) {
        item.categoryName = "";
      } else {
        item.categoryName = categoryName;
      }
      const items = [...this.state.orderItems];
      items.push(item);
      this.setState(
        {
          orderItems: items
        },
        () =>
          window.localStorage.setItem(
            "cart",
            JSON.stringify(this.state.orderItems)
          )
      );
    }
  };

  reduceOrder = (product, itemIndex) => {
    this.state.orderItems.some(el => el.id === product.id);
    var found = this.state.orderItems.find(element => {
      return element.id === product.id;
    });
    if (found.number > 1) {
      found.number = parseInt(found.number) - 1;

      this.setState(
        {
          orderItems: [...this.state.orderItems]
        },
        () =>
          window.localStorage.setItem(
            "cart",
            JSON.stringify(this.state.orderItems)
          )
      );
    } else {
      const item = product;
      const items = [...this.state.orderItems];
      function check(element) {
        return element.id === product.id;
      }
      itemIndex = this.state.orderItems.findIndex(check);
      items.splice(itemIndex, 1);

      if (
        item.categoryName !== "" &&
        items.some(el => el.categoryId === item.categoryId)
      ) {
        items[itemIndex].categoryName = item.categoryName;
      }
      this.setState(
        {
          orderItems: items
        },
        () =>
          window.localStorage.setItem(
            "cart",
            JSON.stringify(this.state.orderItems)
          )
      );
    }
  };

  changeOrder = (product, n) => {
    if (this.state.orderItems.some(el => el.id === product.id)) {
      var found = this.state.orderItems.find(element => {
        return element.id === product.id;
      });
      found.number = n;
      if (n !== "") {
        found.number = Math.min(parseInt(found.number) || 0, product.stock);
      }
      this.setState(
        {
          orderItems: [...this.state.orderItems]
        },
        () =>
          window.localStorage.setItem(
            "cart",
            JSON.stringify(this.state.orderItems)
          )
      );
    } else {
      const item = product;
      item.number = n;
      if (n !== "") {
        item.number = Math.min(parseInt(item.number) || 0, product.stock);
      }
      const items = [...this.state.orderItems];
      items.push(item);
      this.setState(
        {
          orderItems: items
        },
        () =>
          window.localStorage.setItem(
            "cart",
            JSON.stringify(this.state.orderItems)
          )
      );
    }
  };

  render() {
    count = this.state.orderItems.reduce(function (prev, cur) {
      return (parseInt(cur.number) || 0) + parseInt(prev);
    }, 0);
    sum = this.state.orderItems.reduce(function (prev, cur) {
      return cur.number * cur.price + prev;
    }, 0);

    return (
      <div>
        <div className="entire-container">
          <div className="content-container ">
            <Head />
            <Tacking />
            <hr />

            <div className="product-display container-fluid">
              <hr className="dotted-line" />
              <CategoryList
                reduceOrder={this.reduceOrder}
                addOrder={this.addOrder}
                changeOrder={this.changeOrder}
                orderItems={this.state.orderItems}
              />
            </div>

            <hr className="dotted-line" />
            <Transport
              handleChange={this.handleChange}
              value={this.state.value}
            />
            <Client
              orderItems={this.state.orderItems}
              sum={sum}
              cleanCart={() => this.setState({ orderItems: [] })}
              count={count}
              value={this.state.value}
            />
          </div>
        </div>
        <Cart
          sum={sum}
          count={count}
          addOrder={this.addOrder}
          changeOrder={this.changeOrder}
          reduceOrder={this.reduceOrder}
          orderItems={this.state.orderItems}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
