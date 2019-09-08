import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Product from "./components/Products";
import Order from "./components/Order";
import Category from "./components/Category";
import Navigation from "./components/Navigation";
import axios from "axios";
import CategoriesUpdate from "./components/CategoriesUpdate";
import CategoriesAdd from "./components/CategoriesAdd";
import ProductsAdd from "./components/ProductsAdd";
import ProductsUpdate from "./components/ProductsUpdate";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';

if (process.env.NODE_ENV === 'development') {
  var VConsole = require("vconsole/dist/vconsole.min.js");
  new VConsole();
}

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.common['authorization'] = window.localStorage.getItem('token');

class App extends PureComponent {
  render() {
    const { authorize } = this.props
    return (
      <Router>
        <div>
          {authorize && <Navigation />}
          <Route path="/login" component={authorize ? () => <Redirect to={{ pathname: '/' }} /> : Login} />
          <PrivateRoute authorize={authorize} path="/" exact component={Home} />
          <PrivateRoute authorize={authorize} path="/categories" exact component={Category} />
          <PrivateRoute authorize={authorize} path="/products" exact component={Product} />
          <PrivateRoute authorize={authorize} path="/orders" exact component={Order} />
          <PrivateRoute authorize={authorize} path="/categories/update/:id" component={CategoriesUpdate} />
          <PrivateRoute authorize={authorize} path="/categories/add" component={CategoriesAdd} />
          <PrivateRoute authorize={authorize} path="/products/add" component={ProductsAdd} />
          <PrivateRoute authorize={authorize} path="/products/update/:id" component={ProductsUpdate} />
        </div>
      </Router>
    );
  }
}

export default App;
