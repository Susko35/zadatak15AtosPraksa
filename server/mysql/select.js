const express = require('express');
const router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'nodetest'
});
//return all users json
router.get('/users/all', (req, res) => {
    connection.query('SELECT * FROM users', function (error, rows, fields) {
        console.log(rows);
        if (rows.length > 0) {
            res.json(rows);
            res.end();
        }
        else {
            res.json({ "response": "ERROR", "error": "empty" });
            res.end();
        }

    });
});

//return user by oib json
router.get('/users/', (req, res) => {
    connection.query('SELECT * FROM `users` WHERE `users`.`oib` = '+req.body.oib, function (error, rows, fields) {
        console.log(rows);
        if (rows.length > 0) {
            res.json(rows);
            res.end();
        }
        else {
            res.json({ "response": "ERROR", "error": "notfound" });
            res.end();
        }

    });
});

//return all tasks json
router.get('/tasks/all', (req, res) => {
    connection.query('SELECT * FROM zadaci', function (error, rows, fields) {
        console.log(rows);
        if (rows.length > 0) {
            res.json(rows);
            res.end();
        }
        else {
            res.json({ "response": "ERROR", "error": "empty" });
            res.end();
        }

    });
});

//return task by name json
router.get('/tasks/', (req, res) => {
    connection.query('SELECT * FROM `zadaci` WHERE `zadaci`.`naziv_zadatka` = ' + req.body.naziv_zadatka, function (error, rows, fields) {
        console.log(rows);
        if (rows.length > 0) {
            res.json(rows);
            res.end();
        }
        else {
            res.json({ "response": "ERROR", "error": "notfound" });
            res.end();
        }

    });
});

module.exports = router;