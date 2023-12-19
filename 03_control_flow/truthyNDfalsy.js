const userEmail = ""//"ramanan#gmail.com"

if(userEmail){

    console.log("got user email")
}else{
    console.log("dont't have user email")
}



// Falsy Values
// false,0,-0, BigInt, 0n,"",null,undefined,NaN   
/* A falsy (sometimes written falsey) value is a value that is considered false when \
encountered in a Boolean context. */

// Truthy values
//  "0" , 'false',"",[],{},function(){} 
/*  A truthy value is a value that is considered true when encountered in a Boolean
 context. All values are truthy unless they are defined as falsy.*/



// if(userEmail.length === 0){
//     copnsole.log("array is empty");
// }

const emptyobj = {}


if(Object.keys(emptyobj).length === 0){
    console.log("object is empty")
}


// Nullish coalescing operator (??) : null, undefined

let value1;
// value1 = 5 ?? 10;
//  value1 = null ?? 10 
// value1 = null ?? 12 ?? 23
value1 = undefined ?? 24


console.log(value1)




//ternary Operator

// condition ? true : false 

const price = 100
price <= 80 ? console.log("price is less than 80") : console.log("price is over 80")
