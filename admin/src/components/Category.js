import React, { PureComponent } from "react";
import axios from "axios";
import Card from "../components/Card";
class Category extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }

  render() {
    return (
      <div id="categories">
        {this.state.categories.map((item, index) => {
          return (
            <Card
              key={item.id}
              name={item.name}
              parentId="categories"
              openId={item.id}
            />
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    axios
      .get("/admin/categories")
      .then((response, data) => {
        console.log([response.data]);
        this.setState({
          categories: response.data
        });
        console.log(response);
      })

      .catch(function(error) {
        console.log(error);
      });
  }
}

export default Category;
