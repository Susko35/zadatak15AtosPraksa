const express = require('express');
const app = express();
const port = 5000;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var mysql = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'nodetest'
});

app.listen(port, () => {
    console.log('Listening on port: ' + port);
});

app.get('/', (req, res) => {
    res.send('connected');
});

const select = require('./mysql/select');
app.use('/select', select); 

const insert = require('./mysql/insert');
app.use('/insert', insert); 

const remove = require('./mysql/remove');
app.use('/remove', remove); 

const update = require('./mysql/update');
app.use('/update', update); 

const radno_mjestoBroj = require('./reports/radno_mjesto');
app.use('/reports', radno_mjestoBroj); 

const time_open = require('./reports/time_open');
app.use('/reports', time_open); 