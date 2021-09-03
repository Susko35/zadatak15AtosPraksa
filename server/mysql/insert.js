const express = require('express');
const router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodetest'
});

//insert into users
router.post('/user/', (req, res) => {
    var oib = req.body.oib;
    var ime = req.body.ime;
    var prezime = req.body.prezime;
    var radno_mjesto = req.body.radno_mjesto;
    var level = req.body.level;

    if (level != 'user' && level != 'admin' && level != 's_user') {
        res.json({ "response": "ERROR", "error": "incorrect level entry" });
        res.end();
    }
    else if(oib > 99999) {
        res.json({ "response": "ERROR", "error": "oib number size" });
        res.end();
    }
    else {
        connection.query('INSERT INTO `users` (`oib`, `ime`, `prezime`, `radno_mjesto`, `level`) VALUES (?,?,?,?,?)', [oib, ime, prezime, radno_mjesto, level] , function (error, rows, fields) {
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
});

//insert into tasks
router.post('/task/', (req, res) => {
    var id = req.body.id;
    var naziv = req.body.opis;
    var opis = req.body.opis;
    var tip = req.body.tip;
    var status = req.body.status;
    var kompleksnost = req.body.kompleksnost;
    var vrijeme = req.body.vrijeme;

    //sql smalldatetime valjda da nema mikrosekunde
    var datetimeStart = req.body.datetimeStart;
    var datetimeEnd = req.body.datetimeEnd;

    var entries = [id, naziv, opis, tip, status, kompleksnost, vrijeme, datetimeStart, datetimeEnd];

    if (tip != 'task' && tip != 'bug') {
        res.json({ "response": "ERROR", "error": "incorrect type entry" });
        res.end();
    }
    else if(status != 'open' && status != 'closed' && status != 'process') {
        res.json({ "response": "ERROR", "error": "id number size" });
        res.end();
    }
    else if(id > 999) {
        res.json({ "response": "ERROR", "error": "id number size" });
        res.end();
    }
    else {
        connection.query('INSERT INTO `tasks` (`id`, `naziv`, `opis`, `tip`, `status`, `kompleksnost`, `vrijeme`, `datetimeStart`, `datetimeEnd`) VALUES (?,?,?,?,?)', entries , function (error, rows, fields) {
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
});


module.exports = router;