const orm = require("../config/orm");

const burger = {
    selectAll(cb) {
        orm.selectAll("burgers", (response) => cb(response))
    },
    insertOne(nameOfBurger, cb) {
        orm.insertOne("burgers", nameOfBurger, (response) => cb(response))
    },
    updateOne(devoured, val, cb) {
        orm.selectAll("burgers", devoured, "id", val, (response) => cb(response))
    }
};

module.exports = burger;