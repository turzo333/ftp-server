var express = require('express');
var userModel = require('./../models/user');
var router = express.Router();

router.get('/login', function(req, res){

		
				res.render('admin/login');
		
});


router.get('/home', function(req, res){

		
				res.render('admin/home');
		
});

router.post('/login', function(req, res){

		
 var user = {
		username: req.body.username,
		password: req.body.password
	}

	userModel.login(user, function(results){
		
		if(results){
			res.cookie('username', results.username);
			res.cookie('admin', results.is_admin);
			console.log(results.is_admin);	
		}else{
			res.send('invalid username/password');
		}
	});
		
});



module.exports = router;
