// this keyword

const user = {
    name : "ramanan",
    price :999,

    welcomeMessage: function(){
    console.log(  `${this.name} , welcome to website`)
    console.log(this)

    }
}

user.welcomeMessage()
user.name = "sam"
user.welcomeMessage()


console.log(this) //empty

function coffee(){
    let username = "shoes"
    console.log(this.username)//when uysing this in functions gets undefined as output
}
coffee()



// const tea = function(){
//     let username = "sam"
//     console.log(this.username)
// }
// tea()


const tea = () => {
    let username = "sam"
    console.log(this) // empty paranthesis
}
tea()



// ********  arrow funtions *********

const addTwo = (num1 , num2) => {

 return num1 + num2
}
// console.log(addTwo(3,4))

// const addthree = (num1 , num2) => num1 + num2
const addthree = (num1 , num2) => ({username : "satheesh"})
console.log(addthree(3,4))

//Immediately Invoked Function Expression (IIFE)
 

(function one (){
    console.log(`DB connected`)
})(); 
 

((name) => {
    console.log(`DB connected Two ${name}`)
}) (`Ramanan`)

