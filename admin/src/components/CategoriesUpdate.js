import React, { PureComponent } from "react";
import "../styles/categoriesUpdate.css";
import axios from "axios";

class CategoriesUpdate extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      id: ""
    };
  }
  handleChange = e => {
    this.setState({
      name: e.target.value,
      id: this.props.match.params.id
    });
  };
  handleClick = () => {
    axios
      .put("/admin/categories/" + this.state.id, {
        name: this.state.name
      })
      .then(() => {
        window.location.href = "/categories";
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <p className="basic-url head-title">类别重命名</p>
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
            aria-describedby="basic-addon3"
          />
        </div>
        <div className="save">
          <button
            onClick={this.handleClick}
            type="button"
            className="btn btn-outline-primary btn-lg  btn-text "
          >
            保存
          </button>
        </div>
      </div>
    );
  }
}

export default CategoriesUpdate;
