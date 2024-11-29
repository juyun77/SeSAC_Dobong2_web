const User = require("../model/User");

//GET /user
exports.getUser = (req, res) => {
  console.log(User.userInfo()); //{}
  //   res.send("응답완료");
  res.render("user", { userInfo: User.userInfo() });
};

/**
 * 전개 연산자
 * { ...User.userInfo() }
   { realId: 'cocoa', realPw: 'qwer1234', name: '홍길동', age: 20 }
    



*/
