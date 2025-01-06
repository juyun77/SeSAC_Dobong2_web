export default function Practice1() {
  let name = "세모";
  let animal = "고양이";
  let a = 5;
  let b = 3;
  return (
    <div>
      <h2>
        제 반려동물의 이름은 <u>{name}</u>입니다.<br></br>
        <u>{name}</u>은 <u>{animal}</u>입니다.
      </h2>
      <div>{a + b === 8 ? "정답입니다" : "오답입니다"}</div>

      <div>{a > b && "a가 b보다 큽니다."}</div>
      <div>{!(a > b) && "b가 a보다 큽니다."}</div>
    </div>
  );
}

//1번 문제
//   let name = "세모";
//   let animal = "고양이";
//   return (
//     <div>
//       <h2>
//         제 반려동물의 이름은 <u>{name}</u>입니다.<br></br>
//         <u>{name}</u>은 <u>{animal}</u>입니다.
//       </h2>
//     </div>
//   );
//   //2번 문제
//   function addNum(a, b) {
//     let str = a + b === 8 ? "정답입니다" : "오답입니다";
//     alert(str);
//   }
//   return (
//     <div>
//       <span onClick={() => addNum(3, 5)}>3+5==8인가요?</span>
//     </div>
//   );
//3번 문제
//   let a = 5;
//   let b = 3;
//   let isNum = a > b ? true : false;
//   return (
//     <div>
//       <div>{isNum && "a가 b보다 큽니다."}</div>
//       <div>{!isNum && "b가 a보다 큽니다."}</div>
//     </div>
//   );
