var mysql = require('mysql');

exports.getConnection = function(callback){
  var con = mysql.createConnection({
    host     : 'localhost',
    user     : 'newuser',
    password : 'password',
    database : 'emailTemplate'
  });

  con.connect(function(err){
    if(err){
      console.log('Error connecting to emailTemplate');
      return callback(err);
    }
    callback(err, con);
  });
};