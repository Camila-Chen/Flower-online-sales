import React, { PureComponent } from "react";
import "../styles/order.css";

class Order extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>名称</th>
            <th>金额</th>
            <th>数量</th>
            <th>状态</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <button>
            <tr className="active">
              <td>001</td>
              <td>郭靖</td>
              <td>25</td>
              <td>25</td>
              <td>展开</td>
            </tr>
          </button>
          <tr className="success">
            <td>002</td>
            <td>黄蓉</td>
            <td>23</td>
            <td>23</td>
            <td>展开</td>
          </tr>
          <tr className="info">
            <td>003</td>
            <td>杨过</td>
            <td>24</td>
            <td>23</td>
            <td>展开</td>
          </tr>
          <tr className="warning">
            <td>004</td>
            <td>黄老邪</td>
            <td>54</td>
            <td>23</td>
            <td>展开</td>
          </tr>
          <tr className="danger">
            <td>005</td>
            <td>欧阳锋</td>
            <td>42</td>
            <td>23</td>
            <td>展开</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Order;
