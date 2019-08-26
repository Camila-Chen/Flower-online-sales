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
  }

  render() {
    return (
      <div>
        <div className="entire-container">
          <div className="content-container ">
            <Head />
            <Tacking />
            <hr />

            <div className="product-display container-fluid">
              <hr className="dotted-line" />
              <CategoryList />
            </div>

            <Cart />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
