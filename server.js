var express = require('express');
var app = express();

var bp = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var root = __dirname;

app.use(express.static(path.join(root, 'client')));
app.use(express.static(path.join(root, 'bower_components')));

app.use(bp.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000);