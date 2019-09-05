import React, { PureComponent } from "react";
import axios from "axios";
import ProductByCategory from "./ProductByCategory";

class ProductsUpdate extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isClickable: true,
      name: "",
      stock: "",
      price: "",
      brief: "",
      categoryId: "",
      picture: ""
    };
  }

  _changeValue = e => {
    switch (e.target.name) {
      case "name":
        this.setState({
          name: e.target.value
        });
        break;
      case "stock":
        this.setState({
          stock: e.target.value
        });
        break;
      case "price":
        this.setState({
          price: e.target.value
        });
        break;
      case "brief":
        this.setState({
          brief: e.target.value
        });
        break;
      case "categoryId":
        this.setState({
          categoryId: e.target.value
        });
        break;
      case "picture":
        this.setState({
          file: e.target.files[0]
        });
        break;
      default:
        break;
    }
  };

  componentDidMount() {
    // debugger;
    axios
      .get("/admin/products/" + this.props.match.params.id)
      .then((response, data) => {
        console.log([response.data]);

        this.setState({
          name: response.data.name,
          stock: response.data.stock,
          price: response.data.price,
          brief: response.data.brief,
          categoryId: response.data.categoryId,
          picture: response.data.picture
        });
      })

      .catch(function(error) {
        console.log(error);
        alert(error.message);
      });
  }

  handleClick = async e => {
    e.preventDefault();
    try {
      this.setState({ isClickable: false });
      var data = this.state.picture;
      if (this.state.file !== undefined) {
        var formData = new FormData();
        formData.append("file", this.state.file);
        var response = await axios.post("upload", formData);
        data = response.data;
      }
      await axios.put("/admin/products/" + this.props.match.params.id, {
        name: this.state.name,
        stock: parseInt(this.state.stock),
        price: parseFloat(this.state.price),
        brief: this.state.brief,
        categoryId: this.state.categoryId,
        picture: data
      });

      window.location.href = "/products";
    } catch (error) {
      alert(error.message);
    } finally {
      this.setState({ isClickable: true });
    }
  };
  render() {
    // debugger;
    return (
      <form onSubmit={this.handleClick}>
        <p className="basic-url basic-title ">更改产品信息</p>
        <div className="input-group mb-3 add-product">
          <div className="input-group-prepend">
            <span className="input-group-text">产品名称</span>
          </div>
          <input
            placeholder="请输入商品名称"
            required="required"
            onChange={this._changeValue}
            name="name"
            autoComplete="off"
            value={this.state.name}
            className="form-control"
          />
        </div>
        <ProductByCategory
          _changeValue={this._changeValue}
          categoryId={this.state.categoryId}
        />
        <div className="input-group mb-3 add-product">
          <div className="input-group-prepend">
            <span className="input-group-text">产品图片</span>
          </div>
          <input
            placeholder="请选择图片"
            name="picture"
            onChange={this._changeValue}
            type="file"
            accept="image/*"
            capture
            className="form-control"
          />
        </div>
        <div className="input-group mb-3 add-product">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon3">
              产品库存
            </span>
          </div>
          <input
            placeholder="请输入数字"
            type="number"
            step="0.01"
            required
            autoComplete="off"
            onChange={this._changeValue}
            name="stock"
            value={this.state.stock}
            className="form-control"
          />
        </div>

        <div className="input-group mb-3 add-product">
          <div className="input-group-prepend">
            <span className="input-group-text">产品价格</span>
          </div>
          <input
            placeholder="请输入数字"
            type="number"
            step="0.01"
            required
            autoComplete="off"
            onChange={this._changeValue}
            name="price"
            value={this.state.price}
            className="form-control"
          />

          <div className="input-group-append">
            <span className="input-group-text">.00</span>
          </div>
        </div>

        <div className="input-group add-product">
          <div className="input-group-prepend ">
            <span className="input-group-text">产品描述</span>
          </div>
          <textarea
            required
            placeholder="请输入商品的简要描述"
            autoComplete="off"
            onChange={this._changeValue}
            className="form-control"
            name="brief"
            value={this.state.brief}
          />
        </div>
        <div className="save">
          <button
            type="submit"
            disabled={!this.state.isClickable}
            className="btn btn-primary btn-lg  btn-text"
          >
            保存
          </button>
        </div>
      </form>
    );
  }
}

export default ProductsUpdate;
