const express = require("express");
// express모듈을 가져옴,  express는 절대경로

const app = express();
// express()함수 : 생성자 역할

// const route = require("./src/route")
const route = require("./src/route/index");
// require(데이터 가져올 위치") 변수에 저장

const sequelize = require("./src/model/index").sequelize;
const methodOverride = require("method-override");
const cors = require("cors");
sequelize.sync();

// middleware설정
//use함수(경로,액션), req,res,next 객체들 만들어서 전송
app.use(cors());
app.use(methodOverride());
app.use(express.json()); //json사용
app.use(express.urlencoded({ extended: false })); //url 인코딩

app.use("/", route);

// app.use("/", (req,res,next)=>{
//     console.log(req.body);
//     res.status(200).json({ "result" : `만나서 반갑습니다 ${req.body.name} 님` })
//     //res.status(200).json({ "result" : "만나서 반갑습니다"+req.body.name+"님" })
// } )

app.listen(4000, () => {
  console.log("server is running on 4000");
}); //arrow function : this 자동전송

