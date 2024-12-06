const express = require("express");
const app = express();
console.log(process.env); //node.js에서 사용하고 있는 변수의 목록
configDotenv.config();
const PORT = process.env.PORT;
console.log("PORT number", PORT);
console.log("db pw", process.env.DB_PASSWORD);
console.log("db name", process.env.DB_DATABASE);

app.get("/", (req, res) => {
  res.send("get요청입니다.");
});

app.post("/test", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
