const express = require('express');
const logger = require('morgan');
const request = require('request');
const exphbs = require('express-handlebars');

const app = express();

app.use(logger('dev'));
app.engine('handlebars', exphbs({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));

app.get('/landing', function(req, res) {
    res.send(console.log('hey'));
})

app.listen(3000, function() {
    console.log('Listening on port 3000');
})