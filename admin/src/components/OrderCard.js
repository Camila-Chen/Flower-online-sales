import React, { PureComponent } from "react";
import OrderBody from "./OrderBody";

class OrderCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="OrderContain">
        <div className="card ">
          <div className="OrderHead d-flex ">
            <div className="HeadLeft p-2">
              <p className="StoreName">雨轩鲜花</p>
              <p className="StoreName text-muted">{this.props.orderNumber}</p>
            </div>
            <div className="HeadRight ml-auto p-2">
              <p className=" text-danger">未支付</p>
            </div>
          </div>
          {this.props.orderItem.map((item, index) => {
            return (
              <OrderBody
                key={item.id}
                name={item.name}
                price={item.price}
                number={item.number}
              />
            );
          })}
          <div className="order-bk bg-primary text-light">
            <div className="d-flex justify-content-between">
              <p className="orderCount ">共{this.props.count}件商品</p>
              <p className="orderSum">订单金额 ¥ {this.props.sum}</p>
            </div>
            <div className="order-time d-flex justify-content-between">
              <p className="orderTime">订单创建时间</p>
              <p className="date">{this.props.date}</p>
            </div>
          </div>
          <div className="card-footer text-muted ">
            <div className="d-flex justify-content-between ">
              <p className=" clientName  ">{this.props.clientName}</p>
              <p className="  clientTel">{this.props.clientTel}</p>
              <p className=" clientName  ">{this.props.value}</p>
            </div>
            <div>
              <p className="clientTel">
                {this.props.clientProvince}
                {this.props.clientCity}
                {this.props.clientArea}
                {this.props.clientAddress}
              </p>
            </div>
            <div>
              <p>{this.props.clientText}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderCard;
