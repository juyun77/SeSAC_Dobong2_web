import { useState } from "react";

export default function PracticeMap() {
  const [list, setList] = useState([
    { id: 1, name: "jy", email: "jy@naver.com" },
  ]);
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const addUser = () => {
    const newList = list.concat({
      id: list.length == 0 ? 1 : list[list.length - 1].id + 1,
      name: inputName,
      email: inputEmail,
    });
    setList(newList);
    setInputName("");
    setInputEmail("");
  };

  const activeEnter = (e) => {
    if (e.key == "Enter") {
      addUser();
    }
  };

  const deleteUser = (id) => {
    const newUser = list.filter((user) => {
      return user.id !== id;
    });
    setList(newUser);
  };

  return (
    <div>
      <h2>user</h2>
      <input
        type="text"
        name="name"
        placeholder="이름"
        value={inputName}
        onChange={(e) => {
          console.log(e.target.value);
          setInputName(e.target.value);
        }}
        onKeyDown={activeEnter}
      />
      <input
        type="text"
        name="email"
        value={inputEmail}
        placeholder="이메일"
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
        onKeyDown={activeEnter}
      />
      <button onClick={addUser}>추가</button>

      {list.map((el) => {
        return (
          <div key={el.id} onDoubleClick={() => deleteUser(el.id)}>
            <h2>
              {el.name}: {el.email}
            </h2>
          </div>
        );
      })}
    </div>
  );
}
