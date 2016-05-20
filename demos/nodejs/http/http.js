/**
 * Created by Newtion on 2016/5/19 0019.
 */

var http = require('http');
http.createServer(function (request, response) {
    console.log(request.method);
    console.log(request.headers);

    response.end('Hello World!');
}).listen(8797);