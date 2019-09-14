var db = require("../models");
const uuidv4 = require("uuid/v4");
const helper = require('../utils/wechat.helper')
const Decimal = require('decimal.js-light')
function getAllOrders() {
  return db.orders.value() || [];
}

async function addOrder(val) {
  val.id = `order_${uuidv4()}`;
  val.myDate = new Date().toISOString();
  val.orderNumber = helper.createOutTradeNumber();
  val.orderItems = val.orderItems.filter(a => a.number > 0)
  val.count = val.orderItems.reduce((a, c) => a + c.number, 0)
  val.sum = val.orderItems.reduce((a, c) => new Decimal(c.price).times(c.number).add(a).toNumber(), 0)
  val.body = `雨轩鲜花——您购买了总共${val.count}件商品，价值${val.sum}元`
  val.status = '未支付'
  await db.orders.push(val).write();
  return val;
}

module.exports = {
  getAllOrders,
  addOrder
};
