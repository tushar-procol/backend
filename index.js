const express = require("express");
const bodyParser = require("body-parser");
const User = require("./models/user");
const Contact = require("./models/contact");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

User.sync({ force: true });
Contact.sync({ force: true });

app.listen(5001, () => console.log("server running"));
