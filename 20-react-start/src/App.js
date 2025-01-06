import ClassComp from "./ClassComp";
import Practice1 from "./Practice1";
import UseJSX from "./UseJSX";
//html태그를 return하고 있다. index.js에서 컴포넌트를 불러옴.
//보통 하나의 파일에 하나의 컴포넌트를 만들어준다.
function App() {
  return (
    <div>
      <div></div>
      <UseJSX />
      <ClassComp />
      <Practice1 />
    </div>
  );
}
//컴포넌트를 보기 위해서는 app.js의 자식컴포넌트이면 된다.
export default App;
