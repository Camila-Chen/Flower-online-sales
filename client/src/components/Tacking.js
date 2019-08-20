import React from "react";
import "../styles/tacking.css";

function Tacking() {
  return (
    <div className="order-tacking">
      <h1 className="order-title1">曹家渡线上——现货下单平台</h1>
      <div className="order-detail">
        <a
          className="order-title2"
          href="https://jinshuju.net/f/Ros6Ch/s/0gEce8"
          rel="noopener noreferrer"
          target="_blank"
          title="订单查询系统"
        >
          订单查询入口！！点击此处进入自助查询系统，输入姓名＋手机验证码即可查询！
        </a>
        <img
          className="order"
          src={require("../image/bg2.jpeg")}
          alt="orderpic"
        />
        <p className="order-title3">发货时间：每日19点下单当日发出</p>
        <p className="order-title4">紧急订单联系客服紧急处理！！！</p>
      </div>
    </div>
  );
}

export default Tacking;
