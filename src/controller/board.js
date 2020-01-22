const models = require('../model');

//localhost:4000/board
const readAll = async(req,res,next)=>{
    const result = await models.Board.findAll()
    res.json(result)
}
const readOne = (req,res,next)=>{
    console.log(req.params.id)
    res.json( { hi:'hi'} )

}
const writeOne = async (req,res,next) => {

    // const {title, content} = req.body;
    const title = req.body.title;
    const content = req.body.content;

    const createBoard = await models.Board.create({
        title: title,
        content: content
    })
    // models.Board.create({ title, content })
    res.json( { "result" : createBoard } )
}

module.exports = {
    readAll, 
    readOne,
    writeOne 
}