/**
 * New node file
 * To create mysql connection pool.
 */
var mysql = require('mysql');
var pool  = mysql.createPool({
	host     : 'localhost',
	user     : 'root',
	password : '',
	port     : '3306',
	database : 'project',
	connectionLimit : '10'
});

exports.pool = pool;
