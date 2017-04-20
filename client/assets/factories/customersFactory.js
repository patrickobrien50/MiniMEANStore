appModule.factory('customersFactory', function($http) {
  var factory = {};
  var customers = [];

  factory.giveCustomers = function(callback) {
  	$http.get('/customers').then(function(jsonRes) {
  		console.log("this is the json response from backend controller:",  jsonRes);
  		if (jsonRes.data.message === "Success") {
  			customers = jsonRes.data.customers;
  			callback(customers);	
  		} else {
  			callback(false);
  		}
  	});
  };

  factory.createCustomer = function(newcustomer, callback) {
  	$http.post('/customers', newcustomer).then(function(jsonRes) {
  		if (jsonRes.data.message === "Success") {
  			console.log("this is the new customer,", jsonRes);
  			callback("Creation success");
  		} else if (jsonRes.data.message === "Error") {
	  			if(jsonRes.data.error.code === 11000) {
	  				callback("Duplicate name");
	  			}
	  			else {
	  				callback(jsonRes.data.error.errors.name.message);	
	  			}	
	  		}
  	});
  };

  factory.deleteCustomer = function(id, callback) {
    $http.delete('/customers/' + id).then(function(jsonRes) {
      if (jsonRes.data.message === "Success") {
        callback(true);
      } else {
        callback(false);
      }
    });
  };

  return factory;
});