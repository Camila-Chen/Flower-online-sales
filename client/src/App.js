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
      name: "",
      brief: "",
      stock: "",
      price: "",
      categoryName: "",
      n: "",
      productOrder: []
    };
  }

  changeOrder = (productOrder, n) => {
    // debugger;
    this.setState({
      productOrder: productOrder,
      name: productOrder.name,
      brief: productOrder.brief,
      stock: productOrder.stock,
      price: productOrder.price,
      categoryName: productOrder.categoryName,
      n: n
    });
  };

  render() {
    console.log(this.state.n);
    return (
      <div>
        <div className="entire-container">
          <div className="content-container ">
            <Head />
            <Tacking />
            <hr />

            <div className="product-display container-fluid">
              <hr className="dotted-line" />
              <CategoryList changeOrder={this.changeOrder} />
            </div>

            <Cart
              name={this.state.name}
              price={this.state.price}
              brief={this.state.brief}
              stock={this.state.stock}
              categoryName={this.state.categoryName}
              n={this.state.n}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
