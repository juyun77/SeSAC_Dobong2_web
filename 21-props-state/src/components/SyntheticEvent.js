export default function SyntheticEvent() {
  function syntheticEvent(e) {
    console.log(e);
    console.log("합성 이벤트 클릭!!!");
  }

  function printInput(e) {
    console.log(e.target);
    console.log(e.target.value);
  }

  function calltest() {
    alert("안녕하세요");
  }
  return (
    <div>
      {/* 이벤트 같은 경우에는 인자를 안넘겨줘도 된다. */}
      {/* onClick은 참조값을 넘겨줌. */}
      <button onClick={syntheticEvent}>콘솔을 보세요</button>
      {/* 결과값을 넘겨줌. */}
      <button onClick={calltest()}>함수 호출해서 전달</button>
      <br />
      <input
        type="text"
        placeholder="글자를 입력하세요."
        onChange={(e) => {
          printInput(e);
        }}
      ></input>
    </div>
  );
}
