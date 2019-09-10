import React, { PureComponent } from "react";
import axios from "axios";

class ProductByCategory extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      productByCategory: []
    };
  }

  componentDidMount() {
    axios
      .get("/admin/categories")
      .then((response, data) => {
        this.setState({
          productByCategory: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="input-group mb-3 add-product">
        <div className="input-group-prepend">
          <span className="input-group-text">产品类别</span>
        </div>
        <select
          name="categoryId"
          onChange={this.props._changeValue}
          className="form-control"
          value={this.props.categoryId}
        >
          <option selected="selected">请选择类别</option>
          {this.state.productByCategory.map((item, index) => {
            return (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
export default ProductByCategory;
