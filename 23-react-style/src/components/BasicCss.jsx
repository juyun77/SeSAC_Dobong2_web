export default function BasicCSS() {
  const childDiv = {
    backgroundColor: "pink",
    width: "100px",
    height: "100px",
    textAline: "center",
    lineHeight: "100px",
  };
  return (
    <div>
      <h3>스타일 적용 방법</h3>
      <ol>
        <li>인라인 스타일</li>
        <li>CSS 파일 만들어서 import</li>
        <li>.module.css 파일 만들어서 import</li>
        <li>styled=components 라이브러리 사용(설치 필요)</li>
        <li>SASS 사용 (설치 필요)</li>
      </ol>

      <h4 style={{ color: "#888" }}>인라인 스타일로 적용하기</h4>
      <div style={{ color: "#8888" }}>
        <div style={childDiv}>안녕하세요</div>
      </div>
      <h4>CSS파일로 적용하기</h4>
      <div className="box1">
        <div>안녕하세요</div>
      </div>
    </div>
  );
}
