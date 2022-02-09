require("dotenv").config();

var express = require("express");
var app = express();
var cors = require("cors");

const SERVER_PORT = process.env.PORT || 8000;

app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

headerObject = {};
app.get("/api/whoami", (req, res) => {
  headerObject["ipadrress"] = req.socket.remoteAddress;
  headerObject["language"] = req.get("Accept-Language");
  headerObject["software"] = req.get("User-Agent");

  res.json(headerObject);
});

// listen for requests :)
app.listen(SERVER_PORT, () => {
  console.log(`Your app is listening on port ${SERVER_PORT}`);
});
