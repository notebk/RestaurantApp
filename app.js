var exphbs = require('express-handlebars');
var express = require('express');
var index = require('./routes/index');
var req = require('./routes/reqHandler');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");

//database connection
mongoose.connect('mongodb://localhost/restaurant');

var app = express();

//setting default layout of app to main.handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//sets body parsing, cookie parsing, and makes public directory a static folder
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', index.home);
app.get('/ingredients', req.listItems);
app.post('/ingredients/add',req.newItem);
app.listen(3000);
