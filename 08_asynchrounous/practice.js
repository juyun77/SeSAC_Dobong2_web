function login(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(name);
    }, 1000);
  });
}

function getVideo(txt) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(txt + "을 실행했구나");
    }, 1000);
  });
}

function getDetail(message) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("여기는" + message);
    }, 1000);
  });
}

// call("kim")
//   .then(() => back("back"))
//   .then(() => hell("callback hell"));

async function exec() {
  let user = await login("kim");
  console.log(user + "님 환영합니다.");
  let videos = await getVideo("back");
  console.log(videos);
  let title = await getDetail("callback hell");
  console.log(title);
}

exec();
