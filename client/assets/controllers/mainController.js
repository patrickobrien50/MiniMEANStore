appModule.controller('MainController', function($scope, customersFactory, ordersFactory, productsFactory) {
	$scope.customers = [];
	$scope.products = [];
	$scope.orders = [];

	function getProducts(data) {
		$scope.products = data;
	};
	function getCustomers(data) {
		$scope.customers = data;
	};
	function getOrders(data) {
		$scope.orders = data;	
	};

	customersFactory.giveCustomers(getCustomers);
	productsFactory.giveProducts(getProducts);
	ordersFactory.giveOrders(getOrders);
});