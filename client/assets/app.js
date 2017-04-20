var appModule = angular.module('app', ['ngRoute']);

appModule.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: "partials/main.html"
		})
		.when('/orders', {
			templateUrl: "partials/orders.html"
		})
		.when('/products', {
			templateUrl: "partials/products.html"
		})
		.when('/customers', {
			templateUrl: "partials/customers.html"
		})
		.otherwise({
			redirectTo: ('/')
		});
});