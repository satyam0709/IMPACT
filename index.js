const express = require("express");
const path = require("path");
const app = express();
const server = require("http").createServer(app);

server.listen(1337);

app.use(express.static(path.join(__dirname, "../")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});