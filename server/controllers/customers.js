console.log("this is the customers controller")
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = {
  getCustomers: function(req, res){
    Customer.find({}, function(err, customers) {
      if (err) {
        res.json({messsage: "Error", error: err});
      } else {
        res.json({message: "Success", customers: customers})
      }
    });
  },

  createCustomers: function(req, res){
    var customer = new Customer();
    customer.name = req.body.name;
    customer.save(function(err) {
      if (err) {
        res.json({message: "Error", error: err});
      } else {
        res.json({message: "Success", customer: customer});
      }
    });
  },

  deleteCustomers: function(req, res) {
    var id = req.params.id;
    Customer.remove({_id: id}, function(err) {
      if (err) {
        res.json({message: "Error", error: err});
      } else {
        res.json({message: "Success"});
      }
    });
  }
}