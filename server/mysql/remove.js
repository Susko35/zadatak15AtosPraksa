const express = require('express');
const router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodetest'
});

//delete from users by oib
router.delete('/user/', (req, res) => {
    if (req.body.oib) {
        connection.query('DELETE FROM `users` WHERE `users`.`oib` = ' + req.body.oib, function (error, rows, fields) {
            console.log(rows);
            if (error || rows.affectedRows === 0) {
                res.json({ "response": "ERROR", error });
                res.end();
            }
            else {
                res.json({ "response": "success", rows });
                res.end();
            }

        });
    }
    else {
        res.json({ "response": "ERROR", "error": "oib not sent" });
        res.end();
    }
});

//delete from tasks by naziv
router.delete('/task/', (req, res) => {
    if (req.body.naziv_zadatka) {
        connection.query('DELETE FROM `zadaci` WHERE `zadaci`.`naziv_zadatka` = ' + req.body.naziv_zadatka, function (error, rows, fields) {
            console.log(rows);
            if (error || rows.affectedRows === 0) {
                res.json({ "response": "ERROR", error });
                res.end();
            }
            else {
                res.json({ "response": "success", rows });
                res.end();
            }

        });
    }
    else {
        res.json({ "response": "ERROR", "error": "naziv not sent" });
        res.end();
    }
});


module.exports = router;