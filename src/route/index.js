const express = require("express")  //express모듈? 가져옴

const route = express.Router()      //router객체
const board = require("./board")    //
const user = require("./user")

route.use("/user", user)
route.use("/board", board )
module.exports = route  //exports로 route
