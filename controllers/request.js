var express = require('express');
var router = express.Router();
var category = require('./../models/category');

router.get('/:id', function(req, res){

	category.getCategory(function(results1){
	category.getCategoryById(req.params.id,function(results){

		
		console.log(req.params.id);
				res.render('category', {movies: results,category: results1});
			

		});
	});

		
		
});
router.post('/', function(req, res){

	category.getCategory(function(results1){
	category.getSearch(req.body.search,function(results){

		
		console.log(req.body.search);
				res.render('category', {movies: results,category: results1});
			

		});
	});

		
		
});

module.exports = router;