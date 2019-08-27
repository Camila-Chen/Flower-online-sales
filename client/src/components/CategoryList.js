import React from "react";
import axios from "axios";
import Card from "./Card";

class CategoryList extends React.Component {
  constructor(props) {
    super();
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
              changeOrder={this.props.changeOrder}
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
        // console.log([response.data]);
        this.setState({
          categories: response.data
        });
        // console.log(response);
      })

      .catch(function(error) {
        console.log(error);
      });
  }
}

export default CategoryList;
