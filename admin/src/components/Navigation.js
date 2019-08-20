import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";
// import PropTypes from "prop-types";
import { withRouter } from "react-router";

class Navigation extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <nav className="nav nav-pills nav-justified fixed-bottom ">
        <li
          className={
            "nav-item nav-link" +
            (this.props.location.pathname === "/category" ? " active" : "")
          }
        >
          <Link className="text" to="/category">
            分类
          </Link>
        </li>
        <li
          className={
            "nav-item nav-link" +
            (this.props.location.pathname === "/product" ? " active" : "")
          }
        >
          <Link className="text" to="/product">
            产品
          </Link>
        </li>
        <li
          className={
            "nav-item nav-link" +
            (this.props.location.pathname === "/order" ? " active" : "")
          }
        >
          <Link className="text" to="/order">
            订单
          </Link>
        </li>
      </nav>
    );
  }
}
const NavigationWithRouter = withRouter(Navigation);
export default NavigationWithRouter;
