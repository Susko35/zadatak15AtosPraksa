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
            res.json({ "response": "ERROR" });
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
            res.json({ "response": "ERROR" });
            res.end();
        }

    });
});

//return all tasks json
router.get('/tasks/all', (req, res) => {
    connection.query('SELECT * FROM tasks', function (error, rows, fields) {
        console.log(rows);
        if (rows.length > 0) {
            res.json(rows);
            res.end();
        }
        else {
            res.json({ "response": "ERROR" });
            res.end();
        }

    });
});

//return task by id json
router.get('/users/', (req, res) => {
    connection.query('SELECT * FROM `tasks` WHERE `tasks`.`id` = '+req.body.id, function (error, rows, fields) {
        console.log(rows);
        if (rows.length > 0) {
            res.json(rows);
            res.end();
        }
        else {
            res.json({ "response": "ERROR" });
            res.end();
        }

    });
});

module.exports = router;