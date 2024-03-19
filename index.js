const express = require("express");
const bodyParser = require("body-parser");

require("./models/index");

const user_controller = require("./controllers/user_controller");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/add", (req, res) => {
  user_controller.addUser(req, res);
});

app.listen(5001, () => console.log("server running"));
