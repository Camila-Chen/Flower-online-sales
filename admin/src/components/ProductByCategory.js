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
    // debugger;
    axios
      .get("/admin/categories")
      .then((response, data) => {
        // console.log([response.data]);
        this.setState({
          productByCategory: response.data
        });
        // console.log(response);
      })

      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    // debugger;
    return (
      <div>
        <select
          name="categoryId"
          onChange={this.props._changeValue}
          className="form-control"
          value={this.props.categoryId}
        >
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
