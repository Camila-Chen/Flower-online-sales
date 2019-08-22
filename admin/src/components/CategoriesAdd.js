import React, { PureComponent } from "react";
import "../styles/categoriesUpdate.css";
import axios from "axios";

class CategoriesAdd extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      isClickable: true
    };
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleClick = () => {
    this.setState({ isClickable: false });
    axios
      .post("/admin/categories", {
        name: this.state.name
      })
      .then((response, data) => {
        this.setState({
          name: response.data.name
        });
        window.location.href = "/categories";
      })
      .catch(function(error) {
        console.log(error);
        alert(error.message);
      });
  };

  render() {
    return (
      <div>
        <p className="basic-url head-title">新增类别</p>
        <div className="input-group mb-3 rename">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon3">
              类别名称
            </span>
          </div>
          <input
            onChange={this.handleChange}
            type="text"
            className="form-control"
            id="basic-url"
            value={this.state.name}
            // aria-describedby="basic-addon3"
          />
        </div>
        <div className="save">
          <button
            disabled={!this.state.isClickable}
            onClick={this.handleClick}
            type="button"
            className="btn btn-primary btn-lg  btn-text"
          >
            保存
          </button>
        </div>
      </div>
    );
  }
}

export default CategoriesAdd;
