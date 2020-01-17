const Sequelize = require("sequelize");
const config = require("../../config/config");
// const board = require("./Board");

const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
     {
        host : config.host,
        dialect : config.dialect
    }
);
// const Board = board(sequelize,Sequelize);
const Board = require("./Board")(sequelize,Sequelize);

db.Board = Board;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;


