const express = require('express');
const router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodetest'
});

//list radna mjesta po broju
router.get('/radno_mjesto', (req, res) => {
    connection.query('SELECT `radno_mjesto`, COUNT(`radno_mjesto`) AS count FROM `users` GROUP BY `radno_mjesto` ORDER BY count DESC', function (error, rows, fields) {
        console.log(rows);
        if (rows.length > 0) {
            res.json(rows);
            res.end();
        }
        else {
            res.json({ "response": "ERROR", error });
            res.end();
        }

    });
});

module.exports = router;