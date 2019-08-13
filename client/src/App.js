import React from "react";
import "./App.css";

function App() {
  return (
    <div className="entire-container">
      <div className="content-container ">
        <div className="head-container">
          <img
            className="headpic"
            src={require("./image/head-picture.jpeg")}
            alt="back"
          />
        </div>
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
              src={require("./image/bg2.jpeg")}
              alt="orderpic"
            />
            <p className="order-title3">发货时间：每日19点下单当日发出</p>
            <p className="order-title4">紧急订单联系客服紧急处理！！！</p>
          </div>
        </div>
        <hr />

        <div className="product-display container-fluid">
          <hr className="dotted-line" />

          <div className="accordion" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    套装专区
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                className="collapse "
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <div className="card mb-3">
                    <div className="row no-gutters">
                      <div className="col-sm-3 col-3 suit">
                        <img
                          className="rosepic img-fluid"
                          src={require("./image/rose1.jpeg")}
                          alt="加载中..."
                        />
                      </div>
                      <div className="col-sm-8 col-8 ">
                        <div className="card-body">
                          <h5 class="card-title ">粉红</h5>
                          <p class="card-text intro">杆长60cm，20支/扎</p>
                        </div>
                      </div>
                    </div>

                    <div className="operate">
                      <div className="row-price">
                        <p className="price">¥ 30.00</p>
                      </div>
                      <div className="row-stock">
                        <p className="stock">库存10件</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    方德荷冠玫瑰系列
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    爱必达玫瑰系列
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
