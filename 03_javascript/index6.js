
// 문자열에서 사용하는 속성과 메소드
// length
// toUpperCase, toLowerCase, trim, indexOf, slice
// replace, replaceAll, repeat, split
let str1= "Strawberry Moon"
let str2= "   Strawberry Moon"

//문자열 인덱싱
console.log(str1[0])
console.log(str1[0]+str1[11])
// Sonny단어 만들기
console.log(str1[0]+str1[12]+str1[14]+str1[14]+str1[9])

console.log(str1.length)
console.log(str2.length)

// 메소드 사용해보기
//trim, toUpperCase, toLowerCase
//문자열.method()의 형태로 사용
console.log(str1)
console.log(str2)
console.log(str2.trim()) //trim은 매개변수가 없이 공백을 없애주는 메소드
console.log(str2.trim().length)

console.log(str1.toLowerCase())
console.log(str1.toUpperCase())

// indexOf, charAt, slice
let fruit="applemango"
//indexOf: 내가 찾고 싶은 문자열의 인덱스 번호 반환
console.log(fruit.indexOf("e")) //4
console.log(fruit.indexOf("a")) //0
console.log(fruit.indexOf("apple")) //0
console.log(fruit.indexOf("mango")) //5
console.log(fruit.indexOf("z")) //없는 문자열을 찾으려고 하면 -1

console.log(fruit.charAt(0)) //a
console.log(fruit.charAt(8)) //g
console.log(fruit.charAt(10)) //문자열이 없을때는 공백''

console.log(fruit.slice(5)) //mango
console.log(fruit.slice(3,6)) //lem
console.log(fruit.slice(-1)) //o
console.log(fruit.slice(-4)) //ango

// replace, replaceAll
let msg1 = "Wow~ It is so amazing!!! Wow"
console.log(msg1.replace("Wow", "Hey~~~")) //Hey~~~~ It is so amazing!!! Wow
console.log(msg1.replaceAll("o","OO")) //WOOw~ It is sOO amazing!!! WOOw

let date="2024.11.06"
date=date.replaceAll('.','-')
console.log(date)

let hello='hello'
console.log(typeof hello)

let hello2=hello.split("")
console.log(hello2) //[ "h","e","l","l","o"]
hello2 = hello.split("e") 
console.log(hello2) // ["h","llo"]
console.log(typeof hello2)

//['2024','11','06']
date2 = date.split("-")
console.log(date2)


// ---------------------배열---------------------
console.log('----array method----')
let arr1 =[1,2,3,4,5]
let arr2 =["quakka","rabbit","puppy","hamster"]

arr1[5]=6
arr1[8]=8
console.log(arr1)
arr1 =[1,2,3,4,5]
arr1.push(6)
arr1.push(7)
arr1.push(8)
console.log(arr1)

arr1=[1,2,3,4,5,6,7,8]
console.log(arr1.pop()) // 제거하는 값 반환
arr1.pop()
arr1.pop()
console.log(arr1)

arr2.unshift("cat")
console.log(arr2)
console.log(arr2.shift()) // 제거하는 값 반환
console.log(arr2)

// 배열.includes(요소) 배열에 요소가 있는지 없는지 확인
console.log(arr2.includes("cat"))
console.log(arr2.includes("quakka"))

//lenght, indexOf()
arr1=[1,2,3,4,5]
console.log(arr1.length)
console.log(arr1.indexOf(4)) //3, 요소가 몇 번 인덱스에 있는지

// reverse(), 순서 뒤집기
arr1.reverse() // 기존 배열 변경됨
console.log(arr1)

//join(''), 배열 > 문자열로 병합
str1 = arr1.join()
console.log(str1) //join의 인자로 아무것도 전달이 되지 않으면 
                  //배열 안의 컴마까지 같이 문자열로 반환됨.
str1 = arr1.join('')
console.log(str1)

//for of, forEach

let arr3 = [1,5,3,4,5]
let alphabets = ['a','b','c','d','e','f']

//기본 for문
for (let i=0;i<arr3.length;i++)
    console.log(arr3[i])

//for of 문
for (let jy of arr3)
    console.log(jy)

//forEach(익명함수)
//forEach(function(a[,b,c]))
//하나는 필수적으로 있어야하지만 뒤의 b,c는 없어도 된다.
arr3.forEach(function(num,i,arr){
    console.log("요소",num)
    console.log("배열의 인덱스",i)
    console.log("arr3",arr)
    console.log("-------")
})

arr3.forEach((jy)=>{
    console.log(jy)
})

//filter, map, find
//매개변수로 들어가는 익명함수의 return값이 필수
arr2 = ["quakka", "rabbit", "puppy","hamster"]

console.log('-----filter-----')
//return 이후의 조건에 만족하는 요소를 찾아서 
//새로운 배열로 반환
let six=arr2.filter(function(jy){
    return jy.length===6
})
console.log(six)

console.log('-----find-----')

let six2=arr2.find(function(word){
    return word.length===6
})
console.log(six2)

console.log('-----map-----')
let arr4=[1,2,3,4,5]
let multiArr=arr4.map(function(number){
    return number*3
})
console.log(multiArr)

// 화살표 함수로 바꾸기
// 화살표 함수를 썼을때는 {} 와 return을 생략가능
multiArr=arr4.map((number)=> number*3)
console.log(multiArr)

//오브젝트 반복
const areaNum ={}