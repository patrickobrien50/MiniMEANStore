appModule.controller('OrderController', function($scope, $location, productsFactory, ordersFactory, customersFactory) {
	$scope.customers = [];
	$scope.products = [];
	$scope.orders = [];
	$scope.makeArray = function(num) {
		return new Array(num);
	};

	function getProducts(data) {
		console.log("got the products em")
		$scope.products = data;
	};
	function getCustomers(data) {
		$scope.customers = data;
	};

	customersFactory.giveCustomers(getCustomers);
	productsFactory.giveProducts(getProducts);

	function getOrders(data) {
		if (data) {
			console.log("got the orders em")
			$scope.orders = data;	
		}
	};
	ordersFactory.giveOrders(getOrders);

	$scope.createOrder = function() {
		ordersFactory.createOrder($scope.newOrder, function(message) {
			$scope.messages = message;
			$scope.newOrder = {};
			console.log($scope.newOrder);
			customersFactory.giveCustomers(getCustomers);
			ordersFactory.giveOrders(getOrders);
			productsFactory.giveProducts(getProducts);
			console.log("what will this be", $scope.newOrder)
		});
	};

});