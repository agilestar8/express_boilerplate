const express = require("express")

const route = express.Router()
const board = require("./board")

route.use("/board", board )
module.exports = route  //exports로 route
