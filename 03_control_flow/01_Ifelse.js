// //if 
const isUserLoggedIn = true 

const temp = 32
if(temp < 40){
  console.log("less than 40");
}else{
 
console.log("Temp is greater than 40")
}
// < , > , <= , >= ,!= ,==,===

const score = 200
if(score > 120){
    const power = "fly"
    console.log(`User Power : ${power}`);

}
console.log(`User power : ${power}`)


const balance = 700

if (balance > 500) console.log("test") , console.log("testing");

if (balance < 500){
    console.log("less than 500")
}else if(balance  < 750){
    console.log("less than 750")
}else if (balance < 900) {
    console.log("les than 900")
}else{
    console.log("its above 1000")
}


const UserLoggedIn= true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if(UserLoggedIn && debitCard ){
    console.log("allow to buy courses")
}

if(loggedInfromGoogle || loggedInfromEmail ){
    console.log("user logged in");
}
