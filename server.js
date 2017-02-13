var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 4000);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', function(req, res) {
    res.render('login');
});
app.get('/register', function(req, res) {
    res.render('register');
});

app.get('/home', function(req, res) {
    res.render('home');
});
app.get('/boiler', function(req, res) {
    res.render('boiler');
});
app.get('/system', function(req, res) {
    res.render('system');
});
app.get('/chemtest', function(req, res) {
    res.render('chemtest');
});
app.get('/instruction', function(req, res) {
    res.render('instruction');
});

app.get('/watercare', function(req, res) {
    res.render('watercare');
});

app.get('/equipquest', function(req, res) {
    res.render('equipquest');
});
var server = require('http').createServer(app);
server.listen(app.get('port'), function() {
    console.log('Express is running on port ' + app.get('port'));
});

// require('/routes')(server);