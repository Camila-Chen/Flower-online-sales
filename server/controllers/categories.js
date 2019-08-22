var db = require("../models");
const uuidv4 = require("uuid/v4");

async function getCategories() {
  return db.categories.value() || [];
}

async function addCategory(val) {
  val.id = `catg_${uuidv4()}`;
  return db.categories.push(val).write();
}

async function updateCategory(val) {
  return db.categories
    .find({ id: val.id })
    .assign(val)
    .write();
}

async function deleteCategory(id) {
  console.log(id);
  return db.categories.remove({ id }).write();
}

module.exports = {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory
};
