const User = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      //첫번째 인자로 전달을 해준 모델 이름 그대로
      //테이블이름을 고정하겠다!
      freezeTableName: true,
    }
  );
  return model;
};

module.exports = User;
