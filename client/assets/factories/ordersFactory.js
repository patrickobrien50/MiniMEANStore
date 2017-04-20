appModule.factory('ordersFactory', function($http) {
  var factory = {};
  var orders = [];

  factory.giveOrders = function(callback) {
  	$http.get('/orders').then(function(jsonRes) {
  		if (jsonRes.data.message === "Success") {
  			orders = jsonRes.data.orders;
  			callback(orders);
  		} else {
  			callback(false);
  		}
  	});
  }
  
  factory.createOrder = function(neworder, callback) {
  	console.log(neworder);
  	$http.post('/orders', neworder).then(function(jsonRes) {
  		if (jsonRes.data.message === "Success") {
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
  }

  return factory;
});