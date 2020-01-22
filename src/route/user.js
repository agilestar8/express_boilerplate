const express = require("express")  //express모듈? 가져옴

const route = express.Router()      //router객체

route.post("/join", ()=>{console.log("join!")})
route.post("/login", ()=>{} )

module.exports = route  //exports로 route
