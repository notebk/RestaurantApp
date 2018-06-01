var path = require("path");
var express = require('express');
var catData = require("./catData");
var Robot = require('../models/model.js');
var router = express.Router();
var db = require('../fakeDatabase');

//Code gotten from original olinjs homework solution after failed git push that lost all my data
//slightly reformatted to remove mongodb and mongoose connections

var colors = catData.colors;
var numColors = colors.length;
var names = catData.names;
var numNames = names.length;

var cats = {};

cats.new = function(req, res) {
  var catColors = [];
  for (var i = Math.floor(Math.random()*3)+1; i > 0; i--) {
    catColors.push(colors[Math.floor(Math.random()*numColors)].toLowerCase());
  }
//  catColors = catColors.filter(function(val, ind, arr) { return arr.indexOf(val) === ind;})
  var name = names[Math.floor(Math.random()*numNames)];
  var age = Math.floor(Math.random()*numNames);
  
  var catObj = {
    name: name,
    age: age,
    colors: catColors
  };
  var newCat = catObj;
    db.add(newCat);
    res.render("cats", {
      message: "New cat created:",
      cats: [catObj] 
      });
    };
    
module.exports = cats;