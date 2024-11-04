/*for 문
for (변수 선언과 초기화; 조건식(어디까지 감소, 증가할건지);증감){
반복 실행 코드
} */

//증감식: i++, i=i+1, i+=1

for(let i=0;i<10;i++){
    console.log('안녕',i)
}

for (let i=0;i<10;i=i+2){
    console.log(`안녕 ${i}`)
}

for (let i=1;i<=5;i++)
{
    console.log(i)
}

//fruits 전체 요소 for문을 이용해서 출력
let fruits=['apple','banana','orange','mango']
for (let i=0;i<fruits.length;i++){
    console.log(fruits[i])//0,1,2,3
}

let n=11
let sum=0;
for(i=1;i<=n;i++)
{
    sum+=i;
}
console.log(sum)

let arr = [99,98,85,77,100,50]

let sum2=0;
for (i=0; i<arr.length;i++){
    sum2+=arr[i];
}
console.log(sum2)

//1 이상 20 이하의 수 중에서 짝수만 더한 값 출력하기
let sum3=0
for(i=1;i<=20;i++)
{
    if(i%2===0)
        sum3+=i
}
console.log(sum3)