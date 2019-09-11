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
              addOrder={this.props.addOrder}
              changeOrder={this.props.changeOrder}
              reduceOrder={this.props.reduceOrder}
              orderItems={this.props.orderItems}
              key={item.id}
              name={item.name}
              parentId="categories"
              openId={item.id}
              item={item}
            />
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    axios
      .get("/public/categories")
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
