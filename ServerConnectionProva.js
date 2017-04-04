/*
const http = require('http'); // libreria http dentro una varibile dove poi posso usare i metodi

var url = require('url');
var qs = require('querystring');


http.createServer(function (request, response) {

    var pathname =url.parse(request.url).pathname;
    var parameters = url.parse(request.url, true).query;

    switch (pathname){

        case '/prova':

            var appoggio ;

            appoggio +=  "<table border='1'>";

           for(var parameter in parameters){

               appoggio += ("<tr><td>"+parameter+": "+"</td>" +"<td>"+parameters[parameter]+"</td></tr>");

            }

            appoggio += "</table>";


            response.writeHead(200, {'content-type':'text/html'});
            response.write(appoggio);

            response.end();
            break;

        default:
            if (request.method == 'POST') {
                var body = '';
f
                request.on('data', function (data) {
                    body += data;

                    // Too much POST data, kill the connection!
                    // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
                    if (body.length > 1e6)
                        request.connection.destroy();
                });

                request.on('end', function () {
                    var post = qs.parse(body);
                    console.log(body);
                    // use post['blah'], etc.
                });
            }

            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write('Hello\n');

            response.end();
            break;
    }


}).listen(1337);

*/