var express = require('express');
var logger = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');require('babel-register');
var config = require('./config');
var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');
var mongoose = require('mongoose');
var User = require('./models/User');
var async = require('async');
var request = require('request');
var xml2js = require('xml2js');
var app = express();
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// This is the path to read static data.
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(config.database);
mongoose.connection.on('error', function() {
    console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});


app.post('/api/User', function(req, res, next) {
    var user = new User();
    user.userName = req.body.userName;
    user.userEmail = req.body.userEmail;
    user.gender = req.body.gender;
    user.dateOfBirth = req.body.dateOfBirth;
    user.question = req.body.question;

    user.save(function (err) {
        if(err){
            return res.send(err);
        }
        else{
            res.json({ message: 'User created!' });
        }
    })
});

app.use(function(req, res) {
    Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
        if (err) {
            res.status(500).send(err.message)
        } else if (redirectLocation) {
            res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
            var page = swig.renderFile('views/index.html', { html: html });
            res.status(200).send(page);
        } else {
            res.status(404).send('Page Not Found')
        }
    });
});

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});