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
router.get('/utroseno_vrijeme', (req, res) => {
    connection.query('SELECT * FROM `zadaci` WHERE `zavrsni_datum`-`pocetni_datum` = (SELECT MAX(`zavrsni_datum`-`pocetni_datum`) FROM `zadaci`)', function (error, rows, fields) {
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