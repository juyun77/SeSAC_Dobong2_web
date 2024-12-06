"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"]; //development키를 대괄호로 불러옴.
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

//설정 정보를 sequelize라는 키 안에 넣어주는 중
db.sequelize = sequelize;
//시퀄라이즈 모듈을 Sequelize라는 key안에 넣어주는 중
db.Sequelize = Sequelize;

db.User = require("./User")(sequelize, Sequelize);
module.exports = db;
