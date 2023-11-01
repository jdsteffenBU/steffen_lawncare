var express = require('express');
const morgan = require('morgan');

var app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));//parses URL-encoded data

app.get("/", function(req, res){
    res.send("Test response from our web app");
}); //route format: app.method(path, callback)

app.listen(5500, function () {
    console.log('App listening on port 5500!');
});

app.get("/something", function(req, res) {

    const html =
    `<h1>Response is coming from hello route using GET method</h1>
    <h2>Hello, ${req.query.name}!</h2>
    <p>You are ${req.query.age} years old.</p>`;
    res.send(html);
});

app.get("/index", function(req, res) {

    const html =
    `<h1>Response is coming from hello route using GET method</h1>
    <h2>Hello, ${req.query.name}!</h2>
    <p>You are ${req.query.age} years old.</p>`;
    res.send(html);
});