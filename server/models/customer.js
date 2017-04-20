var mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
	name: {type: String, required: true, unique: true},
}, {timestamps: true});

mongoose.model('Customer', customerSchema);