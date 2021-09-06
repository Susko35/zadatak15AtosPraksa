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
    var naziv = req.body.naziv_zadatka;
    var opis = req.body.opis_zadatka;
    var tip = req.body.tip_zadatka;
    var status = req.body.status_zadatka;
    var kompleksnost = req.body.kompleksnost_zadatka;
    var vrijeme = req.body.potroseno_vrijeme;

    //sql smalldatetime valjda da nema mikrosekunde
    var datetimeStart = req.body.pocetni_datum;
    var datetimeEnd = req.body.zavrsni_datum;

    var entries = [naziv, opis, tip, status, kompleksnost, vrijeme, datetimeStart, datetimeEnd];

    if (tip != 'Task' && tip != 'Bug') {
        res.json({ "response": "ERROR", "error": "incorrect type entry" });
        res.end();
    }
    else if(status != 'Otvoren' && status != 'Zatvoren' && status != 'U tijeku') {
        res.json({ "response": "ERROR", "error": "incorrect status entry" });
        res.end();
    }
    else if(naziv > 999) {
        res.json({ "response": "ERROR", "error": "naziv number size" });
        res.end();
    }
    else if(kompleksnost > 5 || kompleksnost < 1) {
        res.json({ "response": "ERROR", "error": "incorrect complexity entry" });
        res.end();
    }
    else {
        connection.query('INSERT INTO `zadaci` (`naziv_zadatka`, `opis_zadatka`, `tip_zadatka`, `status_zadatka`, `kompleksnost_zadatka`, `potroseno_vrijeme`, `pocetni_datum`, `zavrsni_datum`) VALUES (?,?,?,?,?,?,?,?)', entries , function (error, rows, fields) {
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