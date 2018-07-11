var path = require("path");
var express = require('express');
var ingredientDB = require('../models/model.js');
var router = express.Router();

//Code gotten from original olinjs homework solution after failed git push that lost all my data
//slightly reformatted to remove mongodb and mongoose connections


var requests = {};

requests.listItems = function(req, res) {
  ingredientDB.find()
    .exec(function(err, ingredients) {
      if (err) {
        console.log('error occured');
      } else {
        res.render('list', {'data': ingredients});
      };
    });
};

requests.newItem = function(req, res) {
  var name = req.body.name;
  var price = req.body.price;
  var stock = req.body.stock;

  var formedIngredient = new ingredientDB({
    name: name,
    price: price,
    stock: stock
  });

  formedIngredient.save(function(err, formedIngredient) {
    if (err) return console.error(err);
  });
  res.send(".");
};

module.exports = requests;