var db = require('./db');
module.exports={

	reqAdd: function(request,callback){


		var sql = "insert into req values('', ?, ?,?)";
		db.execute(sql, [request.name, request.email, request.req], function(status){
			callback(status);
		});
	},


}	


