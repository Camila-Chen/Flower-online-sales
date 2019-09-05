import React, { PureComponent } from "react";
import "../styles/client.css";
import axios from "axios";
var name = localStorage.getItem("Name");
var Tel = localStorage.getItem("Tel");
var Province = localStorage.getItem("Province");
var City = localStorage.getItem("City");
var Area = localStorage.getItem("Area");
var Address = localStorage.getItem("Address");

class Client extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isClickable: true,

      clientName: name,
      clientTel: Tel,
      clientProvince: Province,
      clientCity: City,
      clientArea: Area,
      clientAddress: Address,
      clientText: ""
    };
  }

  _changeValue = e => {
    switch (e.target.name) {
      case "clientName":
        this.setState(
          {
            clientName: e.target.value
          },
          () => window.localStorage.setItem("Name", this.state.clientName)
        );
        break;
      case "clientTel":
        this.setState(
          {
            clientTel: e.target.value
          },
          () => window.localStorage.setItem("Tel", this.state.clientTel)
        );
        break;
      case "clientProvince":
        this.setState(
          {
            clientProvince: e.target.value
          },
          () =>
            window.localStorage.setItem("Province", this.state.clientProvince)
        );
        break;
      case "clientCity":
        this.setState(
          {
            clientCity: e.target.value
          },
          () => window.localStorage.setItem("City", this.state.clientCity)
        );
        break;
      case "clientArea":
        this.setState(
          {
            clientArea: e.target.value
          },
          () => window.localStorage.setItem("Area", this.state.clientArea)
        );
        break;
      case "clientAddress":
        this.setState(
          {
            clientAddress: e.target.value
          },
          () => window.localStorage.setItem("Address", this.state.clientAddress)
        );
        break;
      case "clientText":
        this.setState({
          clientText: e.target.value
        });
        break;
      default:
        break;
    }
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({ isClickable: false });
    axios
      .post("/admin/orders", {
        sum: this.props.sum,
        count: this.props.count,
        clientName: this.state.clientName,
        clientTel: this.state.clientTel,
        clientProvince: this.state.clientProvince,
        clientCity: this.state.clientCity,
        clientArea: this.state.clientArea,
        clientAddress: this.state.clientAddress,
        clientText: this.state.clientText,
        orderItems: this.props.orderItems,
        value: this.props.value
      })
      .then(() => {})
      .catch(function(error) {
        alert(error.message);
      });

    localStorage.removeItem("cart");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
          <div className="form-group client-information">
            <label for="exampleInput1" className="client-name">
              姓名
            </label>

            <input
              value={this.state.clientName}
              name="clientName"
              onChange={this._changeValue}
              required="required"
              type="text"
              className="form-control"
              id="exampleInput1"
              aria-describedby="emailHelp"
              placeholder="姓名"
            />
          </div>
          <div className="form-group client-information d-flex flex-column">
            <label for="exampleInput2" className="client-name">
              手机号码
            </label>
            <label for="exampleInput2" className="client-title">
              请准确填写联系方式，以免耽误配送签收！
            </label>

            <input
              value={this.state.clientTel}
              name="clientTel"
              onChange={this._changeValue}
              type="number"
              required
              className="form-control"
              id="exampleInput2"
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
                  data-province={this.state.clientProvince}
                  name="clientProvince"
                  onChange={this._changeValue}
                  className="custom-select col-sm-4 col-4"
                  id="inlineFormCustomSelect1"
                ></select>

                <select
                  data-city={this.state.clientCity}
                  name="clientCity"
                  onChange={this._changeValue}
                  className="custom-select col-sm-4 col-4 "
                  id="inlineFormCustomSelect2"
                ></select>

                <select
                  data-district={this.state.clientArea}
                  name="clientArea"
                  onChange={this._changeValue}
                  className="custom-select col-sm-4 col-4"
                  id="inlineFormCustomSelect3"
                ></select>
              </div>
              <div className="client-information">
                <input
                  value={this.state.clientAddress}
                  name="clientAddress"
                  onChange={this._changeValue}
                  required
                  type="text"
                  className="form-control"
                  id="exampleInput4"
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
                  name="clientText"
                  onChange={this._changeValue}
                  className="form-control "
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
          <button
            disabled={!this.state.isClickable}
            className="btn btn-success btn-lg btn-block order-btn text-light"
          >
            确认下单
          </button>
        </form>
      </div>
    );
  }
}

export default Client;
