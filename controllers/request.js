var express = require('express');
var router = express.Router();
var request = require('./../models/req');

router.get('/', function(req, res){
	
		
				res.render('req');
			


		
		
});

router.post('/', function(req, res){

	var request1 = {
		name: req.body.name,
		email: req.body.email,
		req: req.body.req

	};

	request.reqAdd(request1,function(status){

		
		console.log(req.body.search);

		if (status) {

			res.redirect('/');

		}else{

				res.redirect('/request');

			}
			

		});

		
		
});

module.exports = router;