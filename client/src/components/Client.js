import React, { PureComponent } from "react";
import "../styles/client.css";

class Client extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleClick = () => {
    alert("下单成功");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
          <div className="form-group client-information">
            <label for="exampleInputEmail1" className="client-name">
              姓名
            </label>

            <input
              required="required"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="姓名"
            />
          </div>
          <div className="form-group client-information d-flex flex-column">
            <label for="exampleInputPassword1" className="client-name">
              手机号码
            </label>
            <label for="exampleInputPassword1" className="client-title">
              请准确填写联系方式，以免耽误配送签收！
            </label>

            <input
              type="number"
              required
              className="form-control"
              id="exampleInputPassword1"
              placeholder="请填写正确号码"
            />
          </div>

          <div className="address-contain ">
            <div className="">
              <div className="address-title d-flex flex-column">
                <label className=" instruction">地址</label>
                <label className=" post-title">请尽量详细收货地址信息</label>
              </div>
              <div className="address-select" data-toggle="distpicker">
                <select
                  className="custom-select col-sm-4 col-4"
                  id="inlineFormCustomSelect"
                ></select>

                <select
                  className="custom-select col-sm-4 col-4 "
                  id="inlineFormCustomSelect"
                ></select>

                <select
                  className="custom-select col-sm-4 col-4"
                  id="inlineFormCustomSelect"
                ></select>
              </div>
              <div className="client-information">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="详细地址"
                />
              </div>

              <div className="form-group client-information ">
                <label
                  className="client-name "
                  for="exampleFormControlTextarea1"
                >
                  备注
                </label>
                <textarea
                  className="form-control "
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
          <button className="btn btn-success btn-lg btn-block order-btn text-light">
            确认下单
          </button>
        </form>
      </div>
    );
  }
}

export default Client;
