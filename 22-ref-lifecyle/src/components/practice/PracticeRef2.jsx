import { useState, useRef } from "react";

export function PracticeRef2() {
  const inputRef = useRef();
  const [color, setColor] = useState("red");

  const handleFocus = () => {
    //console.log(inputRef.current);
    console.log(inputRef.current.value);
    let text = inputRef.current.value;
    setColor(text);
    console.log("color::", color);

    inputRef.current.focus();
    inputRef.current.value = "";
  };

  return (
    <div style={{ background: color }}>
      <input type="text" ref={inputRef} />
      <br />
      <button onClick={handleFocus}>색 적용</button>
    </div>
  );
}
