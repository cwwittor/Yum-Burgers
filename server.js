const express = require("express");
const expHandlebars = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require("./controllers/burgers_controller.js");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.engine("handlebars", expHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, () => console.log(`Currently listening on Port: ${PORT}`));