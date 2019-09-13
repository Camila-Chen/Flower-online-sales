import React, { PureComponent } from "react";
import "../styles/transport.css";
import Zmage from "react-zmage";

class Transport extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleChange = e => {
    this.props.handleChange(e.target.value);
  };

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h3>购买须知</h3>
            <p className="lead">
              1.订单满100起发，外地客户默认顺丰到付，武汉同城客户可到店或自行安排闪送、达达、滴滴上门取货。
              <br />
              <br />
              2.所有产品均为手机拍摄，实际以收到货的实物为准。
              <br />
              <br />
              3.每天7：00-8：00及14：00-15：00为商城维护时间，需下单客户先联系客服确认，需当天发货客户请于17：00前下单，18：30后成交的订单默认同意第二天发货。
              <br />
              <br />
              4.因鲜花自身特殊化，所有花材到货，没有经过至少3小时的深水养护，不接受不新鲜投诉。
              <br />
              <br />
              5.所有花材请到货第一时间清点数量，超过6小时不予受理。
              联系方式：027-85854899/13477045925
            </p>
          </div>
        </div>
        <hr className="dotted-line" />

        <div className="Special-Instructions">
          <div className="special-contain">
            <p className="instruction">特别说明</p>
          </div>
          <div className="special-body">
            <p className="instruction-detail">
              <strong>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如有特殊需求，请在备注中注明（如具体发货时间）。
              </strong>
            </p>
            <p className="instruction-detail">
              <strong>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;特价商品不接受理赔。
              </strong>
            </p>
            <p className="instruction-detail detail-foot">
              <strong>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                为了提高工作效率，一旦客服与您确认订单，快递单号自动生成，后续如需加单，请再次下单（所有客户信息系统自动生成不必填写）！
              </strong>
            </p>
          </div>
          <div className="contact-information">
            <p className="instruction">售前售后紧急联系人</p>
            <div className="contact-contain d-flex justify-content-row">
              <div className=" col-sm-6 col-6">
                <Zmage
                  className="contact1"
                  src={require("../image/contact1.jpeg")}
                  alt="正在加载..."
                />
              </div>
              <div className="col-sm-6 col-6">
                <Zmage
                  className="contact2"
                  src={require("../image/contact2.jpeg")}
                  alt="正在加载..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="post-select">
          <p className="instruction">物流方式</p>
          <p className="post-title">
            平台默认顺丰到付，如购买包邮套餐客服会手动更改物流方式！其它物流方式客服会与之确认最终费用及时效！
          </p>
          <ul className="list-group transport-order">
            <li className="list-group-item">
              <div className="form-check">
                <input
                  onChange={this.handleChange}
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="滴滴"
                  checked={this.props.value === "滴滴"}
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  滴滴
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  checked={this.props.value === "达达"}
                  onChange={this.handleChange}
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="达达"
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  达达
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  checked={this.props.value === "顺丰"}
                  onChange={this.handleChange}
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                  value="顺丰"
                />
                <label className="form-check-label" htmlFor="exampleRadios3">
                  顺丰
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  checked={this.props.value === "货拉拉"}
                  onChange={this.handleChange}
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios4"
                  value="货拉拉"
                />
                <label className="form-check-label" htmlFor="exampleRadios4">
                  货拉拉
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  checked={this.props.value === "闪送"}
                  onChange={this.handleChange}
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios5"
                  value="闪送"
                />
                <label className="form-check-label" htmlFor="exampleRadios5">
                  闪送
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  checked={this.props.value === "物流"}
                  onChange={this.handleChange}
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios6"
                  value="物流"
                />
                <label className="form-check-label" htmlFor="exampleRadios6">
                  物流
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Transport;
