const mysql = require('mysql');

//Configuration for database conexion

const mysqlConnection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password: 'root',
    database : 'entries',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
    } else{
        console.log("Database is connected");
    }
})

module.exports = mysqlConnection;