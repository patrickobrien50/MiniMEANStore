var customers = require('../controllers/customers.js');
var products = require('../controllers/products.js');
var orders = require('../controllers/orders.js');

module.exports = function(app){
	app.get('/customers', function(req, res) {
	  customers.getCustomers(req, res);
	});
	app.post('/customers', function(req, res) {
		customers.createCustomers(req, res);
	});
	app.delete('/customers/:id', function(req, res) {
		customers.deleteCustomers(req, res);
	});
	app.get('/products', function(req, res) {
		products.getProducts(req, res);
	});
	app.post('/products', function(req, res) {
		products.createProduct(req, res);
	});
	app.get('/orders', function(req, res) {
		orders.getOrders(req, res);
	});
	app.post('/orders', function(req, res) {
		console.log('pls work');
		orders.createOrder(req, res);
	});
};