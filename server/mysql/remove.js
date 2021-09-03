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

//delete from tasks by id
router.delete('/task/', (req, res) => {
    if (req.body.id) {
        connection.query('DELETE FROM `tasks` WHERE `tasks`.`id` = ' + req.body.id, function (error, rows, fields) {
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
        res.json({ "response": "ERROR", "error": "id not sent" });
        res.end();
    }
});


module.exports = router;