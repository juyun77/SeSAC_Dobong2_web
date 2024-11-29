const User = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};

exports.getUser = (req, res) => {
  //console.log(User.userInfo());
  //console.log(req.query);
  console.log("body:", req.body);
  console.log(req.body.userId);
  console.log(User.userInfo().realId);
  console.log(req.body.userPw);
  console.log(User.userInfo().realPw);
  if (
    req.body.userId === User.userInfo().realId &&
    req.body.userPw === User.userInfo().realPw
  ) {
    res.send({ isSuccess: true, userId: req.body.userId });
  } else {
    res.send({ isSuccess: false });
  }
};
