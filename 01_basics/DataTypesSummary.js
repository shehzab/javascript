  // primitive data types 


// 7 types : String ,Number ,Boolean ,Null, Undefined ,Symbol,BigInt

const score = 100 //number
const value = 23.34//number


const loggedIn = false // Boolean
const declare = null //null
let mailId = "example@gamil.com"//String
 let UserMail ; // Undefineds
 const id = Symbol('123') //symbol
 const anotherID = Symbol('123') // symbol

 console.log(id === anotherID) // we give same value to both of them but they are not same but different values
const bigNumber = 34523423234455454563434545n //Bigint 


 // Reference (Non-Primtiive)

// Array , Objects, Functions

const heros = ["ironMan", "batman", "spiderman","captain america", "Thor", "superaman"];// Array

let myObj ={
    name:"spiderman",
    scndhero:"ironman"
} // Object

const  myFUnction = function (){
    console.log("HELLO DEARS")
}

myFUnction();     // function

console.log(typeof bigNumber) // get data types using- typeof


//Referred document 

// https://262.ecma-international.org/5.1/#sec-11.4.3
