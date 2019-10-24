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
			res.redirect('userlist');
		}else{
			res.send('invalid username/password');
		}
	});
		
});

router.get('/userlist', function(req, res){

	if(req.cookies['username'] != null && req.cookies['admin'] == 1){
			userModel.getAll(function(results){
				res.render('admin/users', {user: results});
			
		});
	}else if (req.cookies['admin'] != 1){
		res.redirect('home');

	}else{
		res.redirect('login');
	}

	
});




router.get('/adduser', function(req, res){
	if(req.cookies['username'] != null && req.cookies['admin'] == 1){
	res.render('admin/adduser');
	}else if (req.cookies['admin'] != 1){
		res.redirect('home');

	}else{
		res.redirect('login');
	}
});

router.post('/adduser', function(req, res){

	if(req.cookies['username'] != null && req.cookies['admin'] == 1){

	var user = {
		username: req.body.username,
		is_admin: req.body.is_admin,
		password: req.body.password
	};

	userModel.insert(user, function(status){
		if(status){
			res.redirect('/admin/userlist');
		}else{
			res.redirect('/admin/adduser');
		}
	});

	}else if (req.cookies['admin'] != 1){
		res.redirect('home');

	}else{
		res.redirect('login');
	}
});

router.get('/edit/:id', function(req, res){
	if(req.cookies['username'] != null && req.cookies['admin'] == 1){

	userModel.getById(req.params.id, function(results){
		res.render('admin/edit', {user: results});		
	});
	}else if (req.cookies['admin'] != 1){
		res.redirect('home');

	}else{
		res.redirect('login');
	}

});

router.post('/edit/:id', function(req, res){

	if(req.cookies['username'] != null && req.cookies['admin'] == 1){
	
	var user = {
		username: req.body.username,
		password: req.body.password,
		id: req.params.id
	};

	userModel.update(user, function(status){

		if(status){
			res.redirect('/admin/userlist');
		}else{
			res.redirect('/admin/adduser');
		}
	});
	}else if (req.cookies['admin'] != 1){
		res.redirect('home');

	}else{
		res.redirect('login');
	}
});

router.get('/details/:id', function(req, res){

		if(req.cookies['username'] != null && req.cookies['admin'] == 1){


	userModel.getById(req.params.id, function(result){
		console.log(result);
		res.render('admin/details', {user: result});
	});

}
	else if (req.cookies['admin'] != 1){
		res.redirect('home');

	}else{
		res.redirect('login');
	}


});

router.get('/category', function(req, res){

	if(req.cookies['username'] != null){
			userModel.getCategory(function(results){


		
				res.render('admin/category', {category: results});
			

		});
			
	}else{
		res.redirect('login');
	}

	
});



router.get('/addcate', function(req, res){
	if(req.cookies['username'] != null){
	res.render('admin/addcate');
	}else{
		res.redirect('login');
	}
});

router.post('/addcate', function(req, res){

	if(req.cookies['username'] != null){

	var user = {
		name: req.body.name,
		parent: req.body.parent
	};

	userModel.cinsert(user, function(status){
		if(status){
			res.redirect('/admin/category');
		}else{
			res.redirect('/admin/addcate');
		}
	});

	}else{
		res.redirect('login');
	}
});




router.get('/cedit/:id', function(req, res){
	if(req.cookies['username'] != null){

	userModel.getCById(req.params.id, function(results){
		res.render('admin/cedit', {user: results});		
	});
	}else{
		res.redirect('login');
	}

});

router.post('/cedit/:id', function(req, res){

	if(req.cookies['username'] != null){
	
	var user = {
		name: req.body.name,
		parent: req.body.parent,
		id: req.params.id
	};

	userModel.cupdate(user, function(status){

		if(status){
			res.redirect('/admin/category');
		}else{
			res.redirect('/admin/addcate');
		}
	});
	}else{
		res.redirect('login');
	}
});


// Movie



router.get('/movie', function(req, res){

	if(req.cookies['username'] != null){
			userModel.getmov(function(results){


		
				res.render('admin/movie', {user: results});
			

		});
			
	}else{
		res.redirect('login');
	}

	
});



router.get('/addmov', function(req, res){
	if(req.cookies['username'] != null){
	res.render('admin/addmov');
	}else{
		res.redirect('login');
	}
});

router.post('/addmov', function(req, res){

	if(req.cookies['username'] != null){

	var user = {
		name: req.body.name,
		parent: req.body.parent
	};

	userModel.minsert(user, function(status){
		if(status){
			res.redirect('/admin/movie');
		}else{
			res.redirect('/admin/addmov');
		}
	});

	}else{
		res.redirect('login');
	}
});




// router.get('/cedit/:id', function(req, res){
// 	if(req.cookies['username'] != null){

// 	userModel.getCById(req.params.id, function(results){
// 		res.render('admin/cedit', {user: results});		
// 	});
// 	}else{
// 		res.redirect('login');
// 	}

// });

// router.post('/cedit/:id', function(req, res){

// 	if(req.cookies['username'] != null){
	
// 	var user = {
// 		name: req.body.name,
// 		parent: req.body.parent,
// 		id: req.params.id
// 	};

// 	userModel.cupdate(user, function(status){

// 		if(status){
// 			res.redirect('/admin/category');
// 		}else{
// 			res.redirect('/admin/addcate');
// 		}
// 	});
// 	}else{
// 		res.redirect('login');
// 	}
// });






router.get('/request', function(req, res){

	if(req.cookies['username'] != null){
			userModel.getReq(function(results){


		
				res.render('admin/request', {request: results});
			

		});
			
	}else{
		res.redirect('login');
	}

	
});



module.exports = router;
