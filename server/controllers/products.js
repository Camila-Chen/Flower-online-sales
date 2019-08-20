var db = require('../models')

function getAllProducts() {
	return db.products.value() || [];
}

async function addProduct(val) {
	db.categories.push()
}

async function updateProduct() {

}

async function deleteProduct() {

}

function getProductsByCategory(catg_id) {
	return db.products.filter({catg_id}).value();
}


module.exports = {
	getProductsByCategory,
	getAllProducts,
	addProduct,
	updateProduct,
	deleteProduct
}