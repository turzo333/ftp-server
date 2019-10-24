var express = require('express');
var router = express.Router();
var req = require('./../models/req');

router.get('/', function(req, res){
	
		
				res.render('req');
			


		
		
});

router.post('/', function(req, res){

	var req = {
		name: req.body.name,
		email: req.body.email,
		req: req.body.req

	};

	req.reqAdd(req,function(results){

		
		console.log(req.body.search);

		if ($results) {

			res.redirect('/');

		}else{

				res.redirect('/request');

			}
			

		});

		
		
});

module.exports = router;