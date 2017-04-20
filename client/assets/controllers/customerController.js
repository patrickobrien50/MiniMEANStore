appModule.controller('CustomerController', function($scope, customersFactory) {
	console.log("we're in customers controller");

	$scope.customers = [];
	$scope.newCustomer = {};

	function getCustomers(data) {
		$scope.customers = data;
	};

	customersFactory.giveCustomers(getCustomers);

	$scope.createCustomer = function() {
		customersFactory.createCustomer($scope.newCustomer, function(message) {
			$scope.messages = message;
			$scope.newCustomer = null;
			customersFactory.giveCustomers(getCustomers);
		});
	};

	$scope.deleteCustomer = function(id) {
		customersFactory.deleteCustomer(id, function(data) {
			if (data) {
				$scope.messages = "Deletion successful";	
			} else {
				$scope.messages = "That shit is still here";
			}
			customersFactory.giveCustomers(getCustomers);
		});
	};
});