let score = "33abc";//String

 console.log(typeof score)

 let valueInNumber = Number (score);// string converted to Number

 console.log(typeof valueInNumber)
 console.log(valueInNumber)//NaN -not a number

//  "33" => 33
//  "33abc" => NaN
//  true => 1; false => 0 
// "ramanan" => true
// "" => false

 let isLoggedIn = "ramanan"
 let booleanIsLoggedIn = Boolean(isLoggedIn)// converted to boolean value
 console.log(booleanIsLoggedIn) // false


 let number = 23
 let StringNumber = String(number);
 console.log(StringNumber)// coverted to string
console.log(typeof StringNumber)//String





//******************** Operations *****************************  

let value = 3
let negValue = -value

//console.log(negValue)
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/3)
// console.log(2%2)

let str1 = "hello"
let str2 = " Ramanan"

let str3 = str1 + str2 ;
// console.log(str3)

// console.log("1" + 2 )// 12
// console.log ("1"+2 + 2) //122
// console.log(1+2+ "2") //32

// console.log((3+4)* 5 % 3)


let x = 3;
const y = x++;

console.log(x , y);
// OutPut : "x:4, y:3"

let a = 3;
const b = ++a;

console.log(a,b);
//OutPut :"a:4, b:4"
