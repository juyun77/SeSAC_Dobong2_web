import { ClassProps, ClassProps2 } from "./components/ClassProps";
import ClassState from "./components/ClassState";
import {
  FunctionProps,
  FunctionProps2,
  FunctionProps3,
  FunctionProps4,
} from "./components/FunctionProps";
import FunctionState from "./components/FunctionState";
import ClassStateP from "./components/practice/ClassStateP";
import FunctionStateP from "./components/practice/FunctionStateP";
import SyntheticEvent from "./components/SyntheticEvent";
import Counter from "./components/Counter";
import HandlerEx from "./components/ex/HandlerEx";
import HandlerEx2 from "./components/ex/HandlerEx2";
import HandlerEx3 from "./components/ex/HandlerEx3";
import ChangeObj from "./components/ex/ChangeObj";
import HandlerEx4 from "./components/ex/HandlerEx4";
import EntirePractice from "./components/practice/EntirePractice";
import PropsMap from "./components/propsMap";
import PropsMap2 from "./components/propsMap2";
import Alphabet from "./components/Alphabet";
import PracticeMap from "./components/practice/PracticeMap";
import PracticeMap2 from "./components/practice/PracticeMap2";

function App() {
  const arr = [
    { name: "peach", krPrice: 10000, number: 5 },
    { name: "strawberry", krPrice: 15000, number: 5 },
    { name: "pear", krPrice: 11000, number: 5 },
    { name: "apple", krPrice: 12000, number: 5 },
  ];
  return (
    <div>
      {/* ctrl+space누르면 자동으로 import해줌.
      <h2>실습문제 !!</h2>
      <EntirePractice />

      <h3>클래스형 컴포넌트 props 사용해보기</h3>
      <ClassProps name="루피" color="pink" nickname="공주" />

      <ClassProps2
        name="루피"
        color="pink"
        nickname="공주"
        // fontColor="blue"
      />

      <h3>함수형 컴포넌트 props 사용해보기</h3>
      <FunctionProps name="사과" number={5} krPrice={10000} />
      <FunctionProps2 name="사과" number={5} krPrice={10000} />
      <FunctionProps3 name="샤인머스캣" number={1} krPrice={15000} />
      <FunctionProps4 name="딸기" number={1} krPrice={20000}>
        <span style={{ color: "red" }}>children 요소입니다!!!!</span>
      </FunctionProps4>
      <FunctionProps4 name="딸기">
        <span style={{ color: "red" }}>children 요소입니다!!!!</span>
      </FunctionProps4>

      <h2>state</h2>
      <h3>클래스 state 사용해보기</h3>
      <ClassState />
      <h3>함수형 state 사용해보기</h3>
      <FunctionState />
      <h3>클래스형 state</h3>
      <ClassStateP />
      <h3>함수형 state</h3>
      <FunctionStateP />

      <h2>event</h2>
      <SyntheticEvent />

      <Counter />

      <HandlerEx />
      <HandlerEx2 />
      <HandlerEx3 />

      <ChangeObj />
      <HandlerEx4 /> */}
      {/* <PropsMap arr={arr} />
      <PropsMap2 arr={arr} /> */}
      <Alphabet />
      {/* <PracticeMap /> */}
      <PracticeMap2 />
    </div>
  );
}

export default App;
