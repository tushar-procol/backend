const express = require("express");
const bodyParser = require("body-parser");

require("./models/index");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(5001, () => console.log("server running"));
