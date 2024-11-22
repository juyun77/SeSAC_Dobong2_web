//JSON
//JavaScript Object Notation
/*
{
name: "juyun",
married:false,
family:{farther:"ddd",mother:"ddd"}
}
*/

const car = `{
"model":"아이오닉6",
"company":"현대",
"price":50000000,
"year":2023,
"isElectric":true,
"option":["side mirror","smart sensor"]
}`;

console.log(typeof car);

//JSON.parse() > JSON --->object
const obj = JSON.parse(car);
console.log(obj);
console.log(typeof obj);
console.log(obj.model);

//JSON.stringify() > object --->JSON
const carJson = JSON.stringify(obj);
console.log(carJson);
console.log(typeof carJson);

const carJson2 = JSON.stringify(obj, null, 5);
console.log(carJson);
console.log(carJson2.model); //undefined(JSON은 문자열)
