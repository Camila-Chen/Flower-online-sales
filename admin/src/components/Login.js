import React, { PureComponent } from "react";
import "../styles/login.css";
class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="contain container-fluid img-fluid">
        <img
          src={require("../image/head-picture.jpeg")}
          alt="加载中..."
          className="rounded mx-auto d-block login-bg"
        />
        <div className=" img-fluid">
          <div className="login rounded">
            <div className="information">
              {/* <h2 className=" title text-center text-light">用户登录</h2> */}
              <form>
                <div className="form-group">
                  <div className="little-logo user"></div>
                  <input
                    type="text"
                    required
                    className="form-control form-control-lg border detail control1"
                    id="exampleFormControlInput1"
                    placeholder="用户名"
                  />
                </div>
                <div className="form-group">
                  <div className="little-logo password"></div>
                  <input
                    type="password"
                    className="form-control form-control-lg border detail control2 "
                    id="passwordFormControlInput"
                    placeholder="密码"
                  ></input>
                </div>

                <button
                  type="submit"
                  className="btn login-btn w-100 text-white"
                >
                  确认登录
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
