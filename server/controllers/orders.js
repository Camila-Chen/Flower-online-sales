var db = require("../models");
const uuidv4 = require("uuid/v4");
var outTradeNo = ""; //订单号
for (
  var i = 0;
  i < 6;
  i++ //6位随机数，用以加在时间戳后面。
) {
  outTradeNo += Math.floor(Math.random() * 10);
}
outTradeNo = new Date().getTime() + outTradeNo;

function getAllOrders() {
  return db.orders.value() || [];
}

async function addOrder(val) {
  val.id = `order_${uuidv4()}`;
  val.myDate = new Date().toISOString();
  val.order = outTradeNo;
  return db.orders.push(val).write();
}

module.exports = {
  getAllOrders,
  addOrder
};
