import React, { PureComponent } from "react";

import "./App.css";
import distpicker from "distpicker";
import CategoryList from "./components/CategoryList";
import Tacking from "./components/Tacking";
import Head from "./components/Head";
import axios from "axios";
import Cart from "./components/Cart";
import Transport from "./components/Transport";
import Client from "./components/Client";

if (process.env.NODE_ENV === 'development') {
  var VConsole = require("vconsole/dist/vconsole.min.js");
  new VConsole();
}

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

var count;
var sum;
var orderItems = localStorage.getItem("cart");
var transport = localStorage.getItem("transport");

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      orderItems: orderItems ? JSON.parse(orderItems) : [],
      value: transport
    };
    // console.log(count);
  }

  handleChange = e => {
    // console.log(e);
    this.setState(
      {
        value: e
      },
      () => window.localStorage.setItem("transport", e)
    );
  };

  addOrder = (product, categoryName) => {
    // debugger;

    if (this.state.orderItems.some(el => el.id === product.id)) {
      var found = this.state.orderItems.find(element => {
        return element.id === product.id;
      });
      found.number = found.number + 1;

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
      // console.log(items);
      this.setState(
        {
          orderItems: items
          // categoryName: categoryName
        },
        () =>
          window.localStorage.setItem(
            "cart",
            JSON.stringify(this.state.orderItems)
          )
      );
    }
  };

  reduceOrder = (product, productIndex) => {
    // debugger;
    this.state.orderItems.some(el => el.id === product.id);
    var found = this.state.orderItems.find(element => {
      return element.id === product.id;
    });
    if (found.number > 1) {
      found.number = found.number - 1;
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
      item.productIndex = productIndex;
      const items = [...this.state.orderItems];
      items.splice(productIndex, 1);
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
    // debugger;
    if (this.state.orderItems.some(el => el.id === product.id)) {
      var found = this.state.orderItems.find(element => {
        return element.id === product.id;
      });
      found.number = n;
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
      return cur.number + prev;
    }, 0);
    sum = this.state.orderItems.reduce(function (prev, cur) {
      return cur.number * cur.price + prev;
    }, 0);
    // console.log();

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
