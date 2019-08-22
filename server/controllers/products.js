var db = require("../models");
const uuidv4 = require("uuid/v4");

function getAllProducts() {
  return db.products.value() || [];
}

async function addProduct(val) {
  val.id = `prod_${uuidv4()}`;
  return db.products.push(val).write();
}

async function updateProduct(val) {
  return db.products
    .find({ id: val.id })
    .assign(val)
    .write();
}

async function deleteProduct(id) {
  console.log(id);
  return db.products.remove({ id }).write();
}

function getProductById(prod_id) {
  return db.products.find({ id: prod_id }).value();
}

function getProductsByCategory(catg_id) {
  return db.products.filter({ catg_id }).value();
}

module.exports = {
  getProductsByCategory,
  getProductById,
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct
};
