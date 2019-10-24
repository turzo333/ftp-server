var express = require('express');
var router = express.Router();
var category = require('./../models/category');

router.get('/:id', function(req, res){

	category.getCategory(function(results1){
	category.getMovieId(req.params.id,function(results){

		
		console.log(req.params.id);
				res.render('movie', {movies: results,category: results1});
			

		});
	});

		
		
});


module.exports = router;