import React, { useState } from "react";
export default function HandlerEx4() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h3 style={{ color: "red" }}>
        {number} {number > 7 ? "😊" : "👌"}
      </h3>

      <button onClick={increase}>1증가</button>
      <button onClick={decrease}>1감소</button>
    </div>
  );
}
