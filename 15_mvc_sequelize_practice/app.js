const express = require("express");
const db = require("./models/index");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: 라우팅 분리
const userRouter = require("./routes/user"); // routes안의 user.js는 파일이름 생략 불가능
app.use("/user", userRouter); // localhost:PORT/user 기본 경로

// TODO: 404 에러 처리
app.get("*", (req, res) => {
  res.render("404");
});

db.sequelize.sync({ force: false }).then((result) => {
  // console.log(result);
  console.log("DB연결 성공!");
  // 포트열기
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/user`);
  });
});
