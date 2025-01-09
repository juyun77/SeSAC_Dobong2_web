import React, { useState } from "react";
export default function HandlerEx3() {
  const [showText, setShowText] = useState(true);

  const changeLang2 = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <button onClick={{ changeLang2 }}>
        {showText ? "사라져라" : "보여라"}
      </button>
      <h1>{showText ? "안녕하세요" : " "}</h1>
    </div>
  );
}
