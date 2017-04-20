console.log("this is the products controller")
var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
  getProducts: function(req, res){
    Product.find({}, function(err, products) {
      if(err) {
        res.json({message: "Error", error: err});
      } else {
        res.json({message: "Success", products: products})
      }
    });
  },

  createProduct: function(req, res){
    var product = new Product();
    product.name = req.body.name;
    product.image = req.body.image;
    product.description = req.body.description;
    product.qty = req.body.qty;
    product.save(function(err) {
      if (err) {
        res.json({message: "Error", error: err});
      } else {
        res.json({message: "Success"})
      }
    });
  },
  update: function(req, res){
    res.json({placeholder: "update"});
  },
  delete: function(req, res){
    res.json({placeholder: "delete"});
  },
  show: function(req, res){
    res.json({placeholder: "show"})
  }
}