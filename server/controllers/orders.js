var db = require("../models");
const uuidv4 = require("uuid/v4");

function getAllOrders() {
  return db.orders.value() || [];
}

async function addOrder(val) {
  val.id = `order_${uuidv4()}`;
  return db.orders.push(val).write();
}

module.exports = {
  getAllOrders,
  addOrder
};
