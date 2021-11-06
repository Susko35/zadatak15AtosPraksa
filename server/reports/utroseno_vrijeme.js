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

    var oib = req.body.oib;

    connection.query('SELECT `naziv_zadatka` AS naziv FROM `users_zadaci` WHERE `oib` = ?; SELECT SUM(`potroseno_vrijeme`) FROM `zadaci` WHERE `zadaci`.`naziv_zadatka` = naziv',oib, function (error, rows, fields) {
        console.log(rows);

        if (true) {
            res.json({rows});
            res.end();
        }
        else {
            res.json({ "response": "ERROR", error });
            res.end();
        }

    });
});

module.exports = router;