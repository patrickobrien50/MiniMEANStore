appModule.controller('ProductController', function ($scope, productsFactory) {
	$scope.products = [];

	function getProducts(data) {
		$scope.products = data;
	};

	var index = function() {
		productsFactory.giveProducts(getProducts);	
	}
	index();

	$scope.createProduct = function() {
		productsFactory.createProduct($scope.newProduct, function(msg) {
			$scope.messages = msg;
			$scope.newProduct = null;
			index();
		});
	};

});