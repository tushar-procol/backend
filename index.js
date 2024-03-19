const express = require("express");
const bodyParser = require("body-parser");

require("./models/index");

const user_controller = require("./controllers/user_controller");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/add_user", (req, res) => {
  user_controller.add_user(req, res);
});

app.get("/users", (req, res) => {
  user_controller.get_all_users(req, res);
});

app.get("/users/:id", (req, res) => {
  user_controller.get_one_user(req, res);
});

app.delete("/delete_users/:id", (req, res) => {
  user_controller.delete_user(req, res);
});

app.patch("/update_user", (req, res) => {
  user_controller.update_user(req, res);
});

app.listen(5001, () => console.log("server running"));
