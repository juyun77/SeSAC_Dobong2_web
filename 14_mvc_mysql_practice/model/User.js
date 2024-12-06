// TODO: DB(mysql) 연결
// TODO: 모델 코드

const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "sesac",
  password: "1111",
  database: "sesac",
});

//회원가입. 데이터 등록
exports.postUser = (data, cb) => {
  conn.query(
    `INSERT INTO user VALUE(null,"${data.userid}", "${data.name}","${data.pw}")`,
    (err, rows) => {
      if (err) throw err;
      console.log("model rows: ", rows);
      cb(rows.insertId);
    }
  );
};

//로그인 데이터 확인
exports.signin = (data, cb) => {
  conn.query(
    `SELECT * FROM user WHERE userid="${data.userid}" AND pw="${data.pw}"`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log("데이터", data.userid, data.pw);
      console.log("로그인 rows:", rows);
      cb(rows);
    }
  );
};

exports.patchUser = (data, cb) => {
  console.log("model data", data);
  conn.query(
    `UPDATE user 
        SET name="${data.name}", pw="${data.pw}" 
        WHERE userid="${data.userid}"`,
    (err, rows) => {
      if (err) throw err;
      console.log("user.js 수정", rows);
      cb();
    }
  );
};

// 4. 데이터 삭제
exports.deleteUser = (data, cb) => {
  conn.query(`DELETE FROM user WHERE userid="${data.userid}" `, (err, rows) => {
    if (err) throw err;
    console.log("데이터 삭제", rows);
    cb();
  });
};
