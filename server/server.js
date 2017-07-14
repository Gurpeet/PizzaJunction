var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    io = require('./socket');

var app = express();
var server = require('http').createServer(app);

var clientRoot = path.join(__dirname, '..', '/client/');
var staticRoot = clientRoot + '/src/';

app.set('port', (process.env.PORT || 3000));
app.use(express.static(clientRoot));
app.use(express.static(staticRoot));

app.use(function(req, res, next) {

    // if the request is not html then move along
    var accept = req.accepts('html', 'json', 'xml');
    if(accept !== 'html') {
        return next();
    }

    // if the request has a '.' assume that it's for a file, move along
    var ext = path.extname(req.path);
    if (ext !== ''){
        return next();
    }

    fs.createReadStream(staticRoot + 'index.html').pipe(res);
});

// hook server to socket.io
io.listen(server);

server.listen(app.get('port'), function() {
    console.log('app running on port', app.get('port'));
});