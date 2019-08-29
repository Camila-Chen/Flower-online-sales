import React, { PureComponent } from "react";

import "./App.css";
import CategoryList from "./components/CategoryList";
import Tacking from "./components/Tacking";
import Head from "./components/Head";
import axios from "axios";
import Cart from "./components/Cart";

axios.defaults.baseURL = "http://localhost:9000";

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
      item.categoryName = categoryName;
      const items = [...this.state.orderItems];
      items.push(item);
      // console.log(items);
      this.setState({
        orderItems: items,
        categoryName: categoryName
      });
    }
  };

  reduceOrder = product => {
    if (this.state.orderItems.some(el => el.id === product.id)) {
      var found = this.state.orderItems.find(element => {
        return element.id === product.id;
      });
      found.number = found.number - 1;
      this.setState({
        orderItems: [...this.state.orderItems]
      });
    } else {
    }
    this.setState({});
  };

  changeOrder = (productOrder, n) => {
    this.setState({
      n: n,
      name: productOrder.name,
      productOrder: this.state.productOrder,
      productId: productOrder.id,
      brief: productOrder.brief,
      stock: productOrder.stock,
      price: productOrder.price,
      categoryName: productOrder.categoryName
    });
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
