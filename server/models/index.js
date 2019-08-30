const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const path = require("path");
const adapter = new FileSync(path.resolve(__dirname, "./db.json"));
const db = low(adapter);

module.exports = {
  categories: db.get("categories"),
  products: db.get("products"),
  orders: db.get("orders")
};
