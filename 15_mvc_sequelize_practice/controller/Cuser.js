// TODO: 컨트롤러 코드
const models = require("../models/index");
// GET /user
exports.main = (req, res) => {
  res.render("index");
};

// GET /user/signup
exports.get_signup = (req, res) => {
  res.render("signup");
};

// GET /user/signin
exports.get_signin = (req, res) => {
  res.render("signin");
};

/* MODEL에게 DB 정보 요청하는 부분  */
// POST /user/signup
exports.post_signup = (req, res) => {
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  })
    .then((result) => {
      res.end();
    })
    .catch((err) => {
      errorlogs(res, err);
    });
};

// POST /user/signin
// 로그인 1. 로그인 가능한 계정인지 아닌지만 비교
exports.post_signin = async (req, res) => {
  try {
    const result = await models.User.findOne({
      where: {
        userid: req.body.userid,
        pw: req.body.pw,
      },
    });
    console.log("result length: ", result);
    if (result) {
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (err) {
    console.log("err", err);
    res.status(500).send("Internal Server Error");
  }
};

// POST /user/profile, 로그인 버튼 클릭시 요청되는 form 전송
// 로그인 2(로그인 성공시). 로그인 가능한 회원이라면,
// 회원 정보 수정 페이지 render 시켜주기
exports.post_profile = async (req, res) => {
  console.log(req.body);
  try {
    const result = await models.User.findOne({
      where: {
        userid: req.body.userid,
      },
    });
    console.log("profileResult:", result);
    res.render("profile", { data: result });
  } catch (err) {
    console.log("err", err);
    res.status(500).send("Internal Server Error");
  }
};

// POST /user/profile/edit
// 회원 정보 수정
exports.edit_profile = async (req, res) => {
  try {
    const [result] = await models.User.update(
      {
        name: req.body.name,
        pw: req.body.pw,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    res.end();
  } catch (err) {
    console.log("err", err);
    res.status(500).send("Internal Server Error");
  }
};

// POST /user/profile/delete
// 회원 탈퇴
exports.delete_profile = async (req, res) => {
  try {
    const result = await models.User.destroy({
      where: { id: req.body.id },
    });
    console.log(result);
    res.end();
  } catch (err) {
    console.log("err", err);
    res.send("internal server error!");
  }
};
