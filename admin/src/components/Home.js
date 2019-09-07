import React, { PureComponent } from "react";
import "../styles/home.css";

var myDate = new Date();
var weekday = [
  "星期日",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六"
];
class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    this.setState({
      myYear: myDate.getFullYear(),
      myMonth: myDate.getMonth() + 1,
      myDate: myDate.getDate(),
      myDay: myDate.getDay(),
      myHour: myDate.getHours(),
      myMinute: myDate.getMinutes(),
      mySecond: myDate.getSeconds()
    });
    // if (parseInt(this.state.mySecond) > 10) {
    //   this.setState({
    //     mySecond: myDate.getSeconds()
    //   });
    // } else {
    //   this.setState({
    //     mySecond: "0" + myDate.getSeconds()
    //   });
    // }
  }

  render() {
    return (
      <div>
        <img
          src={require("../image/head-picture.jpeg")}
          alt="加载中..."
          className="rounded mx-auto d-block home-pic"
        />

        <div class="card mb-3 home">
          <div class="card-body home-body">
            <div className="d-flex flex-row justify-content-around">
              <div className="home-date text-center text-light">
                <h5 class="card-title">
                  {this.state.myYear}年{this.state.myMonth}月{this.state.myDate}
                  日
                </h5>
              </div>
              <div className="home-week">
                <h5 class="card-text text-light">
                  {weekday[this.state.myDay]}
                </h5>
              </div>
            </div>
            <div className="home-time text-light d-flex flex-row justify-content-around">
              <p>{new Date().toTimeString()}:</p>
            </div>
            <p className="text-light text-center home-text">
              欢迎使用雨轩鲜花管理端
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
