const express = require("express");

const route = express.Router();
const board = require("../controller/board");

route.get("/", board.readAll );
// route.get("/", ()=>{console.log('join 입니다')} );
route.get("/:id", board.readOne);
route.post("/", board.writeOne );

module.exports = route;
