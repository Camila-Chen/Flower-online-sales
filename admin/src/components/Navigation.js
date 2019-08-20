import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";
import { withRouter } from "react-router";

class Navigation extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <nav className="nav nav-pills nav-justified fixed-bottom nav-border">
        <li
          className={
            "nav-item nav-link" +
            (this.props.location.pathname === "/categories" ? " active" : "")
          }
        >
          <Link className="text" to="/categories">
            分类
          </Link>
        </li>
        <li
          className={
            "nav-item nav-link" +
            (this.props.location.pathname === "/products" ? " active" : "")
          }
        >
          <Link className="text" to="/products">
            产品
          </Link>
        </li>
        <li
          className={
            "nav-item nav-link" +
            (this.props.location.pathname === "/orders" ? " active" : "")
          }
        >
          <Link className="text" to="/orders">
            订单
          </Link>
        </li>
      </nav>
    );
  }
}
const NavigationWithRouter = withRouter(Navigation);
export default NavigationWithRouter;
