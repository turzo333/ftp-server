var db = require('./db');

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


		getCategoryById: function(callback){

	var sql = "select * from content where category=?";

				db.getResults(sql, [id], function(result){

			//console.log(result);
			if(result.length > 0 ){
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


