import React, { PureComponent } from "react";

import "./App.css";
import CategoryList from "./components/CategoryList";
import Tacking from "./components/Tacking";
import Head from "./components/Head";
import axios from "axios";
import Cart from "./components/Cart";
// var VConsole = require("vconsole/dist/vconsole.min.js");
// var vConsole = new VConsole();
axios.defaults.baseURL = "http://192.168.2.67:9000";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      orderItems: []
    };
  }

  addOrder = (product, categoryName) => {
    // debugger;

    if (this.state.orderItems.some(el => el.id === product.id)) {
      var found = this.state.orderItems.find(element => {
        return element.id === product.id;
      });
      found.number = found.number + 1;

      this.setState({
        orderItems: [...this.state.orderItems]
      });
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
      this.setState({
        orderItems: items
        // categoryName: categoryName
      });
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
      this.setState({
        orderItems: [...this.state.orderItems]
      });
    } else {
      const item = product;
      item.productIndex = productIndex;
      const items = [...this.state.orderItems];
      items.splice(productIndex, 1);
      this.setState({
        orderItems: items
      });
    }
  };

  changeOrder = (product, n) => {
    // debugger;
    if (this.state.orderItems.some(el => el.id === product.id)) {
      var found = this.state.orderItems.find(element => {
        return element.id === product.id;
      });
      found.number = n;
      this.setState({
        orderItems: [...this.state.orderItems]
      });
    } else {
      const item = product;
      item.number = n;
      const items = [...this.state.orderItems];
      items.push(item);
      this.setState({
        orderItems: items
      });
    }
  };

  render() {
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

            <Cart
              addOrder={this.addOrder}
              changeOrder={this.changeOrder}
              reduceOrder={this.reduceOrder}
              orderItems={this.state.orderItems}
            />
            {/* <Transport /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
