const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require("./controllers/burgers_controller.js");
const expHandlebars = require("express-handlebars");



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", expHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, () => console.log(`Currently listening on Port: ${PORT}`));