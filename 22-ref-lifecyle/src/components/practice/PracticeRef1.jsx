import { useRef, useState } from "react";

export default function PracticeRef1() {
  const inputRef = useRef();

  const [comment, setComment] = useState([
    { writer: "주윤", title: "화이팅!!!" },
  ]);
  const [inputWriter, setInputWriter] = useState(""); //작성자 등록 input
  const [inputTitle, setInputTitle] = useState(""); //제목 등록 input

  const handleFocus = () => {
    console.log(inputRef.current);

    inputRef.current.focus();
    if (inputRef.current.value) addComment();
  };

  const activeEnter = (e) => {
    if (e.key == "Enter") {
      addComment();
    }
  };

  const addComment = () => {
    let newComment = {
      writer: inputWriter,
      title: inputTitle,
    };
    setComment([...comment, newComment]);

    setInputTitle("");
    setInputWriter("");
  };
  return (
    <div>
      <form>
        <label htmlFor="writer">작성자: </label>
        <input
          type="text"
          ref={inputRef}
          name="writer"
          id="writer"
          value={inputWriter}
          onChange={(e) => {
            setInputWriter(e.target.value);
          }}
        />{" "}
        <label htmlFor="title">제목: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          onKeyDown={activeEnter}
        />{" "}
        <button type="button" onClick={handleFocus}>
          작성
        </button>
      </form>
      <table border={1} style={{ margin: "30px auto", width: "500px" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
