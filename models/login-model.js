var db = require('./db');

var validateUser = function(user, loginCallback){
	var sql = "SELECT * FROM users WHERE username=? AND password=?";
	var param = [user.username, user.password];
	db.getData(sql, param ,function(result){
		if(result == null || result.length == 0)
		{
			callback(false);
		}
		else
		{
			callback(true);
		}

	});
}

module.exports.validateUser = validateUser;