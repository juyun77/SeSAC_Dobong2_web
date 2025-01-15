import LifeCycleClass from "./components/LifecycleClass";
import LifeCycleFunc from "./components/LifecycleFunc";
import FakePost from "./components/practice/FakePost";
import PracticeRef1 from "./components/practice/PracticeRef1";
import { PracticeRef2 } from "./components/practice/PracticeRef2";
import { PracticeRef3 } from "./components/practice/PracticeRef3";
import RealPost from "./components/practice/RealPost";
import { RefClass1, RefClass2 } from "./components/RefClass";
import { RefFunc1, RefFunc2 } from "./components/RefFunc";
import Test from "./components/Test";

function App() {
  return (
    <div>
      {/* <RefClass1 />
      <RefClass2 />
      <RefFunc1 />
      <RefFunc2 />
      <LifeCycleClass></LifeCycleClass>
      <LifeCycleFunc></LifeCycleFunc> */}
      {/* <Test></Test>

      <FakePost />
      <RealPost /> */}
      <PracticeRef1 />
      <PracticeRef2 />
      <PracticeRef3 />
    </div>
  );
}

export default App;
