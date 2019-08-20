import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./components/Product";
import Order from "./components/Order";
import Category from "./components/Category";
import Navigation from "./components/Navigation";
import axios from "axios";
import CategoriesUpdate from "./components/CategoriesUpdate";
import CategoriesAdd from "./components/CategoriesAdd";
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
          <Route path="/categories" exact component={Category} />
          <Route path="/products" exact component={Product} />
          <Route path="/orders" exact component={Order} />
          <Route path="/categories/update/:id" component={CategoriesUpdate} />
          <Route path="/categories/add" component={CategoriesAdd} />
        </div>
      </Router>
    );
  }
}

export default App;
