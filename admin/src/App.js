import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./components/Products";
import Order from "./components/Order";
import Category from "./components/Category";
import Navigation from "./components/Navigation";
import axios from "axios";
import CategoriesUpdate from "./components/CategoriesUpdate";
import CategoriesAdd from "./components/CategoriesAdd";
import ProductsAdd from "./components/ProductsAdd";
import ProductsUpdate from "./components/ProductsUpdate";
import { baseUrl } from './constants';
// var VConsole = require("vconsole/dist/vconsole.min.js");
// var vConsole = new VConsole();
axios.defaults.baseURL = baseUrl;
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
          <Route path="/products/add" component={ProductsAdd} />
          <Route path="/products/update/:id" component={ProductsUpdate} />
        </div>
      </Router>
    );
  }
}

export default App;
