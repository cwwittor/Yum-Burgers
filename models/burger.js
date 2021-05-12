const orm = require("../config/orm");

//burger model
const burger = {
    //passing in the callback function
    selectAll(cb) {
        orm.selectAll("burgers", (results) => cb(results))
    },
    //passing in the name of the burger and the callback
    insertOne(nameOfBurger, cb) {
        orm.insertOne("burgers", nameOfBurger, (results) => cb(results))
    },
    //passing in the devoured boolean, id, and callback
    updateOne(devoured, val, cb) {
        orm.updateOne("burgers", devoured, "id", val, (results) => cb(results));
    }
}

module.exports = burger;