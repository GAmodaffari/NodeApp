/**
 * Created by Alessandro on 21/03/2017.
 */
var mysql = require('mysql');
var config = require('./configs/db');

var connection = mysql.createConnection(config);

 connection.connect(function(err){

    if(!err) {
        console.log("Database is connected ... ");
    } else {
        console.log("Error connecting database ... ", err);
    }

});

 module.exports = connection;

/*connection.query('SELECT nome,cognome FROM utente',function (err,results,fields) {
    if(!err) {
        console.log(results);
    } else {
        console.log(err)
    }
});



connection.end();*/

