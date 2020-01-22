const express = require("express");

const route = express.Router();
const board = require("../controller/board");

route.get("/:id", board.readOne);
route.get("/", board.readAll);
// route.get("/", ()=>{console.log('join 입니다')} );
route.post("/", board.writeOne);
route.put("/", board.updateOne);
route.delete("/:id", board.deleteOne);
module.exports = route;