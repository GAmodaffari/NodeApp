/**
 * Created by Alessandro on 17/03/2017.
 */

'use strict';


var express = require('express');
var app = express();
var port = process.env.PORT || 1339;
var url = require('url');



// ----------------------------------------POST Parameters---------------------------------------------
var bodyPaser = require('body-parser');
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({extended: true}));

// -------------------------------------routes will go here--------------------------------------------

app.get('/prova', function(request, response) {

    var url_variables = url.parse(request.url, true).query;
  /* var user_id = request.param('user_id');
    var name = request.param('name');
    var surname = request.param('surname');
    response.send(user_id + ' ' + name + ' ' + surname);

*/
   var appoggio ;
    appoggio +=  "<table border='1'>";

    for(var parameter in url_variables){
        appoggio += ("<tr><td>"+parameter+": "+"</td>" +"<td>"+url_variables[parameter]+"</td></tr>");
    }
    appoggio += "</table>";

  //  response.writeHead(200, {'content-type':'text/html'});
    response.send(appoggio);

    response.end();

});
//----------------------------------------------------------------------------------------------------------------------
app.post('/prova/login', function (request, response) {

    response.send('ok thanks for sending your credential');
console.log(request.bodyPaser);
});


// ---------------------------------------------------------------------------------------------------------------------

app.use('/',express.static(__dirname +'/public'));

var dbConfig = require('./DatabaseConfiguration'),
format = require('string-template');


app.get('/api/users',function (request,response) {

    dbConfig.query('SELECT nome,cognome, id ,NomeUtente FROM utente',function (err, results ,fields) {
        if(!err) {
            console.log(results);
            response.send(results);
        } else {
            console.log(err)
        }
    });

});

app.post('/api/users',function (request, response) {

    var Nome = request.body.Nome;
    var Cognome = request.body.Cognome;
    var email = request.body.email;
    var NomeUtente = request.body.NomeUtente;
    var Password = request.body.Password;

    var query = format("INSERT INTO utente VALUES('',{Nome},{Cognome},{email},{NomeUtente},{Password})",{
        Nome: dbConfig.escape(Nome),
        Cognome: dbConfig.escape(Cognome),
        email: dbConfig.escape(email),
        NomeUtente: dbConfig.escape(NomeUtente),
        Password: dbConfig.escape(Password)
    });
    dbConfig.query(query,function (err, results, fields) {
        if(!err) {
            console.log(results);
            response.send(results);
        } else {
            console.log(err)
        }
    });
});

app.delete('/api/users/:id',function (request, response) {

    var id = request.param('id');

    var query = format("DELETE FROM utente WHERE id={id}",{

        id: dbConfig.escape(id)
    });
    dbConfig.query(query,function (err, results, fields) {
        if(!err) {
            console.log(results);
            response.send(results);
        } else {
            console.log(err)
        }
    });
});

app.put('/api/users/:id',function (request, response) {

    var id = request.param('id');
    var Nome = request.body.Nome;
    var Cognome = request.body.Cognome;
    var email = request.body.email
    var Password = request.body.Password;
    var NomeUtente = request.body.NomeUtente;


    var query = format("UPDATE utente SET Nome ={Nome},Cognome ={Cognome}, email= {email}, NomeUtente ={NomeUtente},Password ={Password} WHERE id = {id}",{

        id: dbConfig.escape(id),
        Nome: dbConfig.escape(Nome),
        Cognome: dbConfig.escape(Cognome),
        email: dbConfig.escape(email),
        Password: dbConfig.escape(Password),
        NomeUtente: dbConfig.escape(NomeUtente)

    });
    dbConfig.query(query,function (err, results, fields) {
        if(!err) {
            console.log(results);
            response.send(results);
        } else {
            console.log(err)
        }
    });

});

app.get('/api/users/:id',function (request, response) {

    var id = request.param('id');

    var query = format("SELECT Nome,Cognome,email,NomeUtente, Password FROM utente WHERE id={id}", {

        id: dbConfig.escape(id)
    });

    dbConfig.query(query, function (err, rows) {

        if (!err) {
            var row = rows[0];
            console.log(row);
            response.send(row);
        } else {
            console.log(err)
        }
    });
});


// Start the server

app.listen(port);

console.log('Server started!');
console.log(url);
