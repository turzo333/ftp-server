req.jsvar db = require('./db');

module.exports={

	getCategory: function(callback){

	var sql = "select * from category where parent=0";

		db.getResults(sql, [], function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},


		getCategoryById: function(id,callback){

	var sql = "select * from content where category=?";

				db.getResults(sql, [id], function(results){

			//console.log(result);
			if(results.length > 0 ){
				callback(results);
			}else{
				callback([]);
			}
		});
	},


		getMovieId: function(id,callback){

	var sql = "select * from content where id=?";

				db.getResults(sql, [id], function(results){

			//console.log(result);
			if(results.length > 0 ){
				callback(results);
			}else{
				callback([]);
			}
		});
	},

	getSearch: function(name,callback){

	var sql = "select * from content where name = ?;";

				db.getResults(sql, [name], function(results){

			console.log(results);
			if(results.length > 0 ){
				callback(results);
			}else{
				callback([]);
			}
		});
	},


	getMovie: function(callback){

	var sql = "select * from  content";

		db.getResults(sql, [], function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
}	


