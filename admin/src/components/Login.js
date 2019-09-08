import React, { PureComponent } from "react";
import "../styles/login.css";
import { login } from '../actions/authorize';
class Login extends PureComponent {

  state = { username: '', password: '' }

  handleClick = async (e) => {
    e.preventDefault();
    try {
      await login(this.state);
    } catch (error) {
      this.setState({
        error: '用户名或密码出错'
      })
    }
  }

  render() {
    return (
      <div className="home-contain container-fluid img-fluid">
        <img
          src={require("../image/head-picture.jpeg")}
          alt="加载中..."
          className="rounded mx-auto d-block login-bg"
        />
        <div className=" img-fluid">
          <div className="login rounded">
            <div className="information">
              <form onSubmit={this.handleClick}>
                <div className="form-group">
                  <div className="little-logo user"></div>
                  <input
                    type="text"
                    required
                    className="form-control form-control-lg border detail control1"
                    placeholder="用户名"
                    onChange={(e) => this.setState({ username: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <div className="little-logo password"></div>
                  <input
                    type="password"
                    required
                    className="form-control form-control-lg border detail control2 "
                    placeholder="密码"
                    onChange={(e) => this.setState({ password: e.target.value })}
                  ></input>
                </div>

                <button
                  className="btn login-btn w-100 text-white"
                >
                  确认登录
                </button>
                {this.state.error && <p style={{ color: 'red', textAlign: 'center' }}>{this.state.error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
