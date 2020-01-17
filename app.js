const express = require("express")
// express는 절대경로

const app = express()
// express()함수 : 생성자 역할

// const route = require("./src/route") 
const routeAlpha = require("./src/route/index") 
// require(데이터 가져올 위치") 변수에 저장

const sequelize = require("./src/model/index").sequelize;
// sequelize.sync();

//use함수(경로,액션) , req,res,next 객체들 만들어서 전송
app.use(express.json());
app.use(express.urlencoded({ extended:false}));
// middleware

app.use("/", routeAlpha )



// app.use("/", (req,res,next)=>{
//     console.log(req.body);
//     res.status(200).json({ "result" : `만나서 반갑습니다 ${req.body.name} 님` })
//     //res.status(200).json({ "result" : "만나서 반갑습니다"+req.body.name+"님" })
// } )







app.listen(4000, ()=>{ console.log("server is running on 4000")} ) //arrow function : this 자동전송



