const connection = require("./connection.js");

const orm = {
    selectAll(nameOfTable, cb) {
        connection.query("SELECT * FROM ??", 
        [nameOfTable], 
        (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne(nameOfTable, nameOfBurger, cb) {
        connection.query("INSERT INTO ?? SET ?", 
        [nameOfTable, nameOfBurger], 
        (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne(nameOfTable, devoured, col, val, cb) {
        connection.query ="UPDATE ?? SET ? WHERE ?? = ?",
        [nameOfTable, devoured, col, val, cb],
        (err, result) => {
            if(err) throw err;
            cb(result);
        }
    }
}

module.exports = orm;