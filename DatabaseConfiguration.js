/**
 * Created by Alessandro on 21/03/2017.
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'KNnaKeGIfiGGIuy9',
    database: 'nodedb'
});

 connection.connect(function(err){

    if(!err) {
        console.log("Database is connected ... ");
    } else {
        console.log("Error connecting database ... ");
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

