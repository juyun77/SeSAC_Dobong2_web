import React, { useState } from "react";
export default function FunctionState() {
  const [showEnglish, setShowEnglish] = useState(true);
  const changeLang2 = () => {
    setShowEnglish(!showEnglish); //true->flase, false ->true
  };
  return (
    <div>
      <div className="state">{showEnglish ? "apple" : "사과"}</div>
      <button onClick={changeLang2}>언어변경</button>
    </div>
  );
}

//기존 js 사용해서 화면 바꾸는 방식
//   let apple = "사과";
//   const inEng = () => {
//     const content = document.querySelector(".state");
//     apple = "apple";
//     console.log(apple);
//     content.innerHTML = apple;
//   };
//   //2. state를 사용해서 화면을 변경
//   const [apple, setApple] = useState("사과");
//   const inEng2 = () => {
//     setApple("apple");
//   };
//   return (
//     <div>
//       <div className="state">{apple}</div>
//       <button onClick={inEng2}>영어로 변경</button>
//     </div>
//   );
