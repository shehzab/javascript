// Higher Order Array loops

// for of
/* The JavaScript for of statement loops 
   through the values of an iterable object.
   It lets you loop over iterable data structures such as
   Arrays, Strings, M
   aps, NodeLists, and more 
*/
// ["" , "" , ""]
// [{},{},{}]


// const arr = [1,3,4,9,5,6,8]

// for(const num of arr){
//     console.log(num);
// }


const greetings = "Hello World!!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
    
}

// Maps
/*The Map object holds key-value pairs and remembers the original 
insertion order of the keys. Any value (both objects 
and primitive values) may be used as either a key or a value 
*/

const map = new Map()
map.set('IN',"India")
map.set('USA',"United State Of America")
map.set('Fr',"France")

// console.log(map)

for (const [key , value] of map) {
    // console.log(key, ':' , value)
}

const myObject = {
    'game1': 'NFS',
    'game2' : 'Valorant'
}

for (const [key ,value] of myObject) {
    // console.log(key , ':' , value);   // not iterable
    
}
