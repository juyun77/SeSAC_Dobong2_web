
let arr=[];

for(let i=0;i<100;i++)
    {arr[i]=i+1}
let sum1=0
let sum2=0
let sum3=0
//for 문
for(let i=0;i<100;i++)
{
    sum1+=arr[i]
}
//for of 문
for(let jy of arr){
    sum2+=jy
}
//forEach문
arr.forEach(function(num){
    sum3+=num
})
console.log(sum1,sum2,sum3)


let fruits1 =["사과","딸기","파인애플","수박","참외","오렌지","자두","망고"];
let fruits2 =["수박","사과","참외","오렌지","파인애플","망고"];

let same=[]
let diff=[]

for(i=0;i<fruits1.length;i++){
    found=false
    for(j=0;j<fruits2.length;j++)
 {
    if(fruits1[i]===fruits2[j])
    {
        same.push(fruits1[i])
        found=true;
        break;      
    }
}
    if(!found)
        diff.push(fruits1[i])
}

console.log(same)
console.log(diff)




let now=new Date()
if(now.getDay()===0||now.getDay()===6)
{
    console.log("주말")
}
else{
    console.log("평일")
}


console.log(Math.floor(Math.random()*11))

