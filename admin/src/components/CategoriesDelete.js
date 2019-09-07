import React, { PureComponent } from "react";
import axios from "axios";

class CategoriesDelete extends PureComponent {
  constructor(props) {
    super(props);
  }
  handleClick = () => {
    axios
      .delete("/admin/categories/" + this.props.deleteId)
      .then(() => {
        window.location.reload();
      })
      .catch(function(error) {
        alert(error.message);
      });
  };
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary btn-danger"
          data-toggle="modal"
          data-target={`#${this.props.deleteId}`}
        >
          删除
        </button>

        <div
          className="modal fade"
          id={this.props.deleteId}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  提示
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">是否删除类别</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  否
                </button>
                <button
                  onClick={this.handleClick}
                  type="button"
                  className="btn btn-primary"
                >
                  是
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoriesDelete;
