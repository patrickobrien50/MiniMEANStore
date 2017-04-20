console.log("this is the orders controller")
var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

module.exports = {
  getOrders: function(req, res){
    Order.find({}, function(err, orders) {
      if (err) {
        res.json({message: "Error", error: err});
      } else {
        res.json({message: "Success", orders: orders});
      }
    });
  },
  createOrder: function(req, res){
    Product.findOne({_id: req.body.product._id}, function(err, product) {
      var order = new Order();
      order.customer = req.body.customer.name;
      order.product = req.body.product.name;
      order.orderQty = req.body.orderQty;
      product.qty -= req.body.orderQty;
      console.log(product.qty);
      order.save(function(err) {
        if (err) {
          res.json({message: "Error", error: err});
        } else {
          product.save(function(err) {
            if (err) {
              res.json({message: "Error", error: err});
            } else {
              res.json({message: "Success"});
            }
          })
        }
      });
    });
  }
}