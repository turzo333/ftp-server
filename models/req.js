var db = require('./db');
module.exports={

	reqAdd: function(req,callback){


		var sql = "insert into req values('', ?, ?,?)";
		db.execute(sql, [req.name, req.email, req.req], function(status){
			callback(status);
		});
	},


}	


