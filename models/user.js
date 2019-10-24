var db = require('./db');

module.exports={

	getById: function(id, callback){

		var sql = "select * from user where id=?";
		db.getResults(sql, [id], function(result){

			//console.log(result);
			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		});
	},
		getCById: function(id, callback){

		var sql = "select * from category where id=?";
		db.getResults(sql, [id], function(result){

			//console.log(result);
			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		});
	},
	login: function(user, callback){
		var sql = "select * from user where username=? and password=?";

		db.getResults(sql, [user.username, user.password], function(result){

			if(result.length > 0 ) {
				callback(result[0]);
			}else{
				callback(false);
			}
		});
	},
	getAll : function(callback){
		var sql = "select * from user";

		db.getResults(sql, [], function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},


	getReq : function(callback){
		var sql = "select * from req";

		db.getResults(sql, [], function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	insert : function(user, callback){
		var sql = "insert into user values('', ?, ?,?)";
		db.execute(sql, [user.username, user.password,user.is_admin], function(status){
			callback(status);
		});
	},
	update : function(user, callback){
		var sql = "update user set username=?, password=? where id=?";		
			db.execute(sql, [user.username, user.password, user.id], function(status){
				callback(status);
			});
		
	},
		getCategory: function(callback){

	var sql = "select * from category";

		db.getResults(sql, [], function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	cinsert : function(user, callback){
		var sql = "insert into category values('', ?, ?)";
		db.execute(sql, [user.name, user.parent], function(status){
			callback(status);
		});
	},

	cupdate : function(user, callback){
		var sql = "update category set name=?, parent=? where id=?";		
			db.execute(sql, [user.name, user.parent, user.id], function(status){
				callback(status);
			});
		
	},
	delete : function(user, callback){
		//var sql = "insert into user values('','"+ user.username+"', '"+user.password+"')";
		db.execute(sql, [],  function(status){
			callback(status);
		});
	}





	getmov: function(callback){

	var sql = "select * from content";

		db.getResults(sql, [], function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	cinsert : function(user, callback){
		var sql = "insert into content values('', ?, ?,?,?,?)";
		db.execute(sql, [user.name, user.des, user.content, user.image, user.category], function(status){
			callback(status);
		});
	},

	cupdate : function(user, callback){
		var sql = "update category set name=?, des=?, content=?, image=? , category=? where id=?";		
			db.execute(sql, [user.name, user.des,user.content,user.image,user.category, user.id], function(status){
				callback(status);
			});
		
	},
	delete : function(user, callback){
		//var sql = "insert into user values('','"+ user.username+"', '"+user.password+"')";
		db.execute(sql, [],  function(status){
			callback(status);
		});
	}

	
}	


