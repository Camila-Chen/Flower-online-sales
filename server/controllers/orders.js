var db = require("../models");
const uuidv4 = require("uuid/v4");
const helper = require('../utils/wechat.helper')
const Decimal = require('decimal.js-light')
function getAllOrders() {
  return (db.orders.value() || []).sort((a, b) => a.createdOn > b.createdOn ? -1 : 1);
}

async function addOrder(val) {
  val.id = `order_${uuidv4()}`;
  val.createdOn = new Date().toISOString();
  val.orderNumber = helper.createOutTradeNumber();
  val.orderItems = val.orderItems.filter(a => a.number > 0)
  val.count = val.orderItems.reduce((a, c) => a + c.number, 0)
  val.sum = val.orderItems.reduce((a, c) => new Decimal(c.price).times(c.number).add(a).toNumber(), 0)
  val.body = `雨轩鲜花——您购买了总共${val.count}件商品，价值${val.sum}元`
  val.status = '未支付'
  await db.orders.push(val).write();
  return val;
}

async function orderPaid(val) {
  return db.orders
    .find({ orderNumber: val.out_trade_no })
    .assign({ status: '已支付', transactionId: val.transaction_id, sum: val.total_fee / 100 })
    .write();
}

module.exports = {
  getAllOrders,
  addOrder,
  orderPaid
};
