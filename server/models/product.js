var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
	name: {type: String, required: true, unique: true},
	image: {type: String},
	description: {type: String, required: true},
	qty: {type: Number, required: true}
});

mongoose.model('Product', productSchema);