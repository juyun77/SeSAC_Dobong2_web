export default function Input({ setData }) {
  const handleChange = (evt) => {
    console.log("target", evt.target);
    console.log("currnetTarget", evt.currentTarget);
    setData((prevState) => {
      return {
        ...prevState,
        content: evt.target.value,
      };
    });
  };
  return (
    <div>
      내용:{" "}
      <input
        type="text"
        placeholder="내용을 입력하세요."
        onChange={handleChange}
      />
    </div>
  );
}
