 

//  function sayMyname (){
    
//     console.log("h")
//     console.log("e")
//     console.log("l")
//     console.log("l")
//     console.log("o")
//     console.log("o")

//  }
//  sayMyname()

//  function addTwoNUmbers(Number1,Number2){
//   console.log( Number1 + Number2)
//  }


 function addTwoNUmbers(Number1,Number2){


        // let result = Number1 + Number2
        // return result

        return Number1+ Number2
 }
 const result = addTwoNUmbers(3,36);

//  console.log("result:" , result)

function loginUserMessage(username = "sam"){
if(!username){
    // console.log("please enter a username")
    return
}

    return `${username} just logged in`
}
// console.log(loginUserMessage("Ramanan"))
// console.log(loginUserMessage())



function calculateCartPrice(...num1){

    return num1

}
// console.log(calculateCartPrice(200,400,500))


function calculateCartPrice(val1,val2,...num1){

    return num1

}
// console.log(calculateCartPrice(200,400,500))

const user = {
 
    userName : "ramanan",
   price : 199
}
function handleObject(anyobject){
    //  console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`)
}
// handleObject(user)


handleObject({
    userName : "sam",
    price : 399
})


const myNewArray = [200,300,400]

function returnSecondValue(getArray){
    return getArray[0]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,300,440,5990]))
