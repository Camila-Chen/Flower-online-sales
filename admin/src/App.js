import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./components/Product";
import Order from "./components/Order";
import Category from "./components/Category";
import Navigation from "./components/Navigation";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:9000";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation />

          <Route path="/category" component={Category} />
          <Route path="/product" component={Product} />
          <Route path="/order" component={Order} />
        </div>
      </Router>
    );
  }
}

export default App;
