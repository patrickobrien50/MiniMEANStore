var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new mongoose.Schema({
	customer: {type: String},
	product: {type: String},
	orderQty: {type: Number, required: true, min: 1}
}, {timestamps: true});

mongoose.model('Order', orderSchema);