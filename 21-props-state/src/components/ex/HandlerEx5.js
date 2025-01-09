import React, { useState } from "react";

export default function HandlerEx5(props) {
  const { objArr } = props;
  console.log("객체", objArr);

  const [obj, setObj] = useState(objArr[0]);
  const [num, setNum] = useState(0);

  const changeObj = () => {
    setObj(objArr[num]);
    setNum(num + 1);
    if (num === 2) {
      setNum(0);
    }
  };

  return (
    <div>
      <div>이름:{obj.name}</div>
      <div>나이:{obj.age}</div>
      <div>별명:{obj.nickName}</div>
      <button onClick={changeObj}>멤버바꾸기</button>
    </div>
  );
}
