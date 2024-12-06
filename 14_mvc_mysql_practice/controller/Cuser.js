const User = require("../model/User");
// TODO: 컨트롤러 코드

exports.main = (req, res) => {
  res.render("index");
};

exports.getSignup = (req, res) => {
  res.render("signup");
};

exports.postSignup = (req, res) => {
  console.log("req.body", req.body);
  User.postUser(req.body, (result) => {
    console.log("CUser.js", result);
    res.send({
      id: result,
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    });
  });
};

exports.getSignin = (req, res) => {
  res.render("signin");
};

exports.postSignin = (req, res) => {
  console.log(req.body);
  User.signin(req.body, (result) => {
    console.log("result.length: ", result.length);
    console.log("result: ", result);
    if (result.length > 0) {
      res.send({ isSuccess: true, userid: result[0].userid });
      //res.render("profile", { data: result });
    } else {
      res.send({ isSuccess: false });
    }
    //res.send(result);
  });
};

exports.profile = (req, res) => {
  console.log("profiledata:", req.body);
  res.render("profile", { data: req.body.userid });
};

exports.profileEdit = (req, res) => {
  User.patchUser(req.body, () => {
    res.send("수정 완료");
  });
};
exports.profileDelete = (req, res) => {
  console.log("delete: ", req.body);

  User.deleteUser(req.body, () => {
    res.send("삭제완료");
  });
};
