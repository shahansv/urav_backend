require("dotenv").config();
require("./dbConfig");

const express = require("express");
const cors = require("cors");

const routes = require("./routes");

const server = new express();

server.use(cors());
server.use(express.json());
server.use(routes);

const PORT = 5000 || process.env.PORT;

server.listen(PORT, () => {
  console.log("Server is running at port : ", PORT);
});
