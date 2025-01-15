import React from "react";

export class RefClass1 extends React.Component {
  handleFocus = () => {
    console.log(this.myInput);
    console.log(this.myInput.value);
    this.myInput.focus();
  };
  render() {
    return (
      <div>
        <input
          type="text"
          ref={(ref) => {
            this.myInput = ref;
          }}
        />
        <button onClick={this.handleFocus}>focus</button>
      </div>
    );
  }
}

export class RefClass2 extends React.Component {
  // createRef() 를 사용해서 ref 객체를 사용
  myInput = React.createRef();
  handleFocus = () => {
    console.log(this.myInput.current);
    console.log(this.myInput.current.value);
    // ref를 설정한 DOM에 접근하기 위해서는 this.myInput.current 이용
    this.myInput.current.focus();
  };
  render() {
    return (
      <div>
        <p>클래스형 컴포넌트, 버튼 클릭시 input에 focus 처리</p>
        <p>createRef()를 통해서 ref객체 생성</p>
        {/* 만들어진 변수 myInput 해당 요소의 ref prop로 넣어주면 ref 설정 완료 */}
        <input type="text" ref={this.myInput} />
        <button onClick={this.handleFocus}>focus</button>
      </div>
    );
  }
}
