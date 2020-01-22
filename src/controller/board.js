const models = require('../model');

const readAll = async (req, res, next) => {             //async - 네트워크 비동기
    try {
      const result = await models.Board.findAll();      // await
      res.json(result);
    } catch (err) {
      console.log(e);
    }
  };

  const readOne = async (req, res, next) => {
    //   const id = req.parmas.id;
    try {
      const { id } = req.params;
      console.log(id);
      const one = await models.Board.findOne({
        where: { id }
      });
      res.json(one);
    } catch (err) {
      console.log(err);
    }
  };

const writeOne = async (req, res, next) => {
  //   const {title, content} = req.body;

  const title = req.body.title;
  const content = req.body.content;

  const createBoard = await models.Board.create({
    title: title,
    content: content
  });
  // models.Board.create({ title, content })
  res.json({ result: createBoard });
};

const updateOne = async (req, res, next) => {
    const { title, content, id } = req.body;
    const updatedBoard = await models.Board.update(
      {
        title: req.body.title,
        content: req.body.content
      },
      {
        where: { id: req.body.id }
      }
    );
    const showBoard = await models.Board.findOne({ where: { id: req.body.id } });
  
    res.json(showBoard);
  };

  const deleteOne = async (req, res, next) => {
    const result = await models.Board.destroy({
      where: { id: req.params.id }
    });
    res.json({ result: "delete success" });
  };

module.exports = {
  readAll,
  readOne,
  writeOne,
  updateOne,
  deleteOne
};