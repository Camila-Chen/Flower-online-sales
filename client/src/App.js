import React, { PureComponent } from "react";

import "./App.css";
import CategoryList from "./components/CategoryList";
import Tacking from "./components/Tacking";
import Head from "./components/Head";
import axios from "axios";
import Cart from "./components/Cart";
import Transport from "./components/Transport";

axios.defaults.baseURL = "http://localhost:9000";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      productOrder: []
    };
  }

  addOrder = productOrder => {
    // this.state.productOrder.some(el => el.id === productOrder.productId)
    //   ? this.state.n + 1
    //   : this.state.productOrder.push(productOrder, this.state.n);
    // // this.state.productOrder.productId === productOrder.productId
    // //   ? this.state.n + 1
    // //   : this.state.productOrder.push(productOrder, this.state.n);
    // debugger;
    // this.setState({
    //   // n: this.state.n + 1,
    //   productOrder: this.state.productOrder
    // });
  };

  reduceOrder = productOrder => {
    this.setState({
      n: this.state.n - 1,
      productOrder: this.state.productOrder,
      productId: productOrder.id,
      name: productOrder.name,
      brief: productOrder.brief,
      stock: productOrder.stock,
      price: productOrder.price,
      categoryName: productOrder.categoryName
    });
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
    console.log(this.state.productOrder);
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
                productOrder={this.state.productOrder}
                name={this.state.name}
                price={this.state.price}
                brief={this.state.brief}
                stock={this.state.stock}
                categoryName={this.state.categoryName}
                n={this.state.n}
              />
            </div>

            <Cart
              addOrder={this.addOrder}
              changeOrder={this.changeOrder}
              reduceOrder={this.reduceOrder}
              productOrder={this.state.productOrder}
            />
            <Transport />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
