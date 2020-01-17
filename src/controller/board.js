const readAll = (req,res,next)=>{
    res.json( {"result" : "no data"} )
}
const readOne = (req,res,next)=>{
    res.json( {"result" : "no data"} )
}
const writeOne = (req,res,next)=>{
    // const name = req.body.name;
    // const title = req.body.title;
    // const content = req.body.content;
    const {name: Name, title, content} = req.body;
    console.log(Name);
    
    res.json( { "result" : `${req.body.name}님 만나서 반갑습니다 ` } )
}


module.exports = {
    readAll, 
    readOne,
    writeOne 
}