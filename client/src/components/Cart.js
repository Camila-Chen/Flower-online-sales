import React, { PureComponent } from "react";
import "../styles/cart.css";
import CartCard from "./CartCard";
function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function(e) {
    e.preventDefault();
    window.scrollTo(x, y);
  };
}

function enableScrolling() {
  window.onscroll = function() {};
}

class Cart extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.$("#exampleModalCenter").on("hide.bs.modal", () => {
      enableScrolling();
    });
  }

  render() {
    return (
      <div>
        <div
          className="shopping-cart"
          data-toggle="modal"
          onClick={() => {
            window.$("#exampleModalCenter").modal();
            disableScrolling();
          }}
          data-target="#exampleModalCenter"
        >
          <svg
            className="border border-dark rounded-circle cart-logo"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
          <div className="subscript">
            <span className="badge  badge-danger">{this.props.count}</span>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModalCenter"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  已选择商品
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
              <div className="modal-body modal-contain">
                {this.props.orderItems.map((item, index) => {
                  // console.log(this.props.orderItems);

                  return (
                    <CartCard
                      orderItems={this.props.orderItems}
                      addOrder={this.props.addOrder}
                      reduceOrder={this.props.reduceOrder}
                      changeOrder={this.props.changeOrder}
                      productIndex={index}
                      item={item}
                      key={item.id}
                    />
                  );
                })}
              </div>
              <div className="modal-footer d-flex justify-content-between">
                <div className="commodity-count">
                  <p>共 {this.props.count} 件商品</p>
                </div>
                <div className="total-amount">
                  <p className="amount-text">应付(CNY): </p>
                </div>
                <div className="amount text-danger">
                  <p>¥ {this.props.sum}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
