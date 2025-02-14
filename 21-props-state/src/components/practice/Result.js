export default function Result(props) {
  const { content, fruit, color, background } = props.data;

  return (
    <div>
      {/* 자바스크립트 문법은 {}로 감싸기 */}
      <img src={`/${fruit}.jpg`} width={100} height={100} />
      <p
        style={{
          backgroundColor: background,
          color: color,
          width: 100,
          height: "30px",
          textAlign: "center",
          lineHeight: "30px",
        }}
      >
        {content}
      </p>
    </div>
  );
}
