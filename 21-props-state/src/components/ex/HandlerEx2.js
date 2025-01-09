import React, { useState } from "react";
export default function HandlerEx2() {
  const [color, setColor] = useState("black");
  const [text, setText] = useState("검정색");
  const inCol = (c1, c2) => {
    setColor(c1);
    setText(c2);
  };

  return (
    <div>
      <h1 style={{ color: color }}>{text} 글씨</h1>
      <button onClick={() => inCol("red", "빨간색")}>빨간색</button>
      <button onClick={() => inCol("blue", "파란색")}>파란색</button>
    </div>
  );
}
