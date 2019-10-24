var express = require('express');
var router = express.Router();
var category = require('./../models/category');

router.get('/', function(req, res){
	category.getCategory(function(results){

		category.getMovie(function(movies){
		
				res.render('home', {category: results,movies: movies});
			
		});

		});

		
		
});


module.exports = router;