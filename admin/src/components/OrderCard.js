import React, { PureComponent } from "react";
import OrderBody from "./OrderBody";

class OrderCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item = {} } = this.props
    return (
      <div className="OrderContain">
        <div className="card ">
          <div className="OrderHead d-flex ">
            <div className="HeadLeft p-2">
              <p className="StoreName">
                <span>{item.clientNickname}</span>
                <img
                  src={item.headimgurl}
                  alt='头像'
                  style={{ width: 30, marginLeft: '10px' }} /></p>
              <p className="StoreName text-muted">{item.orderNumber}</p>
            </div>
            <div className="HeadRight ml-auto p-2">
              <p className={item.status === '已支付' ? 'text-success' : 'text-danger'}>{item.status}</p>
            </div>
          </div>
          {item.orderItem && item.orderItem.map((i) => {
            return (
              <OrderBody
                key={i.id}
                name={i.name}
                price={i.price}
                number={i.number}
              />
            );
          })}
          <div className="order-bk bg-primary text-light">
            <div className="d-flex justify-content-between">
              <p className="orderCount ">共{item.count}件商品</p>
              <p className="orderSum">订单金额 ¥ {item.sum}</p>
            </div>
            <div className="order-time d-flex justify-content-between">
              <p className="orderTime">订单创建时间</p>
              <p className="date">{new Date(item.createdOn).toLocaleString()}</p>
            </div>
          </div>
          <div className="card-footer text-muted ">
            <div className="d-flex justify-content-between ">
              <p className="clientName">{item.clientName}</p>
              <p className="clientTel">{item.clientTel}</p>
              <p className="clientName">{item.clientWechat}</p>
            </div>
            <div>
              <p className="clientTel">
                {item.clientProvince}
                {item.clientCity}
                {item.clientArea}
                {item.clientAddress}
              </p>
            </div>
            <div>
              <p>{item.clientText}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderCard;
