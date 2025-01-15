import { useState, useRef } from "react";

export function PracticeRef3() {
  const inputRef = useRef();
  const a = Math.floor(Math.random() * 10 + 1);
  const b = Math.floor(Math.random() * 10 + 1);
  const c = Math.floor(Math.random() * 3);
  const arr = ["+", "*", "-"];
  const [random1, setRandom1] = useState(a);
  const [random2, setRandom2] = useState(b);
  const [operator, setOperator] = useState(arr[c]);

  const handleAnswer = () => {
    let result;
    inputRef.current.focus();
    if (c === 0) {
      result = a + b;
    } else if (c === 1) {
      result = a * b;
    } else result = a - b;

    if (result === Number(inputRef.current.value)) alert("정답입니다!");
    else alert(`틀렸습니다 답은 ${result}입니다`);

    inputRef.current.value = "";
  };

  return (
    <>
      <h2>
        {random1} {operator} {random2}
      </h2>
      <input type="text" ref={inputRef} />
      <button onClick={handleAnswer}>정답 제출</button>
    </>
  );
}
