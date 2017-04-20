appModule.factory('productsFactory', function($http) {
  var factory = {};
  var products = [];

  factory.giveProducts = function(callback) {
  	$http.get('/products').then(function(jsonRes) {
  		if (jsonRes.data.message === "Success") {
  			products = jsonRes.data.products;
  			callback(products);
  		} else {
  			callback(false);
  		}
  	});
  };

  factory.createProduct = function(newproduct, callback) {
  	$http.post('/products', newproduct).then(function(jsonRes) {
  		if (jsonRes.data.message === "Success") {
  			callback("Creation success");
  		} else if (jsonRes.data.message === "Error") {
	  			if(jsonRes.data.error.code === 11000) {
	  				callback("Duplicate product name");
	  			}
	  			else {
	  				callback(jsonRes.data.error.errors.name.message);	
	  			}	
	  		}
  	});
  };

  return factory;
});