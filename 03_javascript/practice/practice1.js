
let age = Number(prompt('나이를 입력해주세요'))

if(age>=20){console.log("성인")}
else if(age>=17){console.log("고등학생")}
else if(age>=14){console.log("중학생")}
else if(age>=8){console.log("초등학생")}
else if(age>=0){console.log("유아")}


let now = new Date().getHours();
now>=12?console.log("오후"):console.log("오전")

for (let i=1 ; i<=10000;i++){
    if((i%13===0)&&(i%2===1))
        console.log(i)
}

let sum = 0
for(let i=0;i<=100;i++)
{
    if(i%2===0 || i%5===0)
    {
        sum+=i;
    }
}
console.log(sum)


for(let i=2 ;i<=9; i++){
    for(let j=1;j<=9;j++){
        console.log(`${i}*${j}=${i*j}`)
    }
    console.log('')
}