const express = require("express");

const route = express.Router();
const board = require("../controller/board");

route.get("/", board.readAll );

route.post("/", board.writeOne );

module.exports = route;

