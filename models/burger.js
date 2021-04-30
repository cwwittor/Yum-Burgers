const orm = require("../config/orm");

const burger = {
    selectAll(cb) {
        orm.selectAll("burgers", (results) => cb(results))
    },
    insertOne(nameOfBurger, cb) {
        orm.insertOne("burgers", nameOfBurger, (results) => cb(results))
    },
    updateOne(devoured, val, cb) {
        orm.selectAll("burgers", devoured, "id", val, (results) => cb(results))
    }
};

module.exports = burger;