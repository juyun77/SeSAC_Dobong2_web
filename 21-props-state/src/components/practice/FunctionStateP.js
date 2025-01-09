import React, { useState } from "react";

export default function FunctionStateP() {
  const [number, setNumber] = useState(0);
  const increaseNum = () => {
    setNumber(number + 1);
  };
  const decreaseNum = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increaseNum}>+1</button>
      <button onClick={decreaseNum}>-1</button>
    </div>
  );
}
