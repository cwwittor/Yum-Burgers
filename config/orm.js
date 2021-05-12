const connection = require("./connection.js");

const orm = {
    //selects all values from the table.
    selectAll(nameOfTable, cb) {
        connection.query("SELECT * FROM ??", [nameOfTable], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    //inserts a burger into the table.
    insertOne(nameOfTable, nameOfBurger, cb) {
        //?? is the name of table
        //? is the name of burger
        connection.query("INSERT INTO ?? SET ?", [nameOfTable, nameOfBurger], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    //Removes a burger from the havent eaten table
    updateOne(nameOfTable, devoured, col, val, cb) {
        //First ?? is nameOfTable
        //First ? is if eaten
        //Second ?? is the term id
        //Second ? is the value of the id in the table
        connection.query("UPDATE ?? SET ? WHERE ?? = ?", [nameOfTable, devoured, col, val], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;