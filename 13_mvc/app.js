const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//라우터 분리
const indexRouter = require("./routes/index");
// /라는 경로로 들어왔을때는 indexRoute에서 봐라.
app.use("/", indexRouter);

const userRouter = require("./routes/user");
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
