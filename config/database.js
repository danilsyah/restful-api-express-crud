let mysql = require('mysql');

let connection = mysql.createConnection({
    host:       process.env.DB_HOST, //'localhost',
    user:       process.env.DB_USER, //'root',
    password:   process.env.DB_PASSWORD, //'',
    database:   process.env.DB_NAME,// 'db_express_api'
    port:       process.env.DB_PORT, // 3306
});

connection.connect(function(error){
    if(!!error){
        console.log(error);
    }else{
        console.log('Connection to Database Successfully');
    }
});

module.exports = connection;