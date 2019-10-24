var express = require('express');
var router = express.Router();
var category = require('./../models/category');

router.get('/:id', function(req, res){
	category.getCategoryById(req.params.id,function(results){

		
		console.log(req.params.id);
				res.render('category', {movies: results});
			

		});

		
		
});


module.exports = router;