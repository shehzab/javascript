 //scopes

let a = 300

if (true){

    let a = 10 
    const b = 20
    var c = 30
    
  
console.log("INNER",a) //block scope
               
}
console.log(a) // global scope

