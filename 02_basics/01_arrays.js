// Array[]-- a single variable that is used to store multiple values 

const myArr = [0,1,2,3,4,5]

console.log(myArr[1])



// Javascript array-copy-operations create shallow copies. 
//[all standard built-in-copy operations with any javascript objects create shallow copies, rathewr than deep copies ]

/* Shallow copy -- a shallow copy of an object is a copy whose properties share the same references
(point to the same underlying values ) as those of the source object from which the copy was made


 Deep copy -- a deep copy of an objedct is copy whose properties do not share the same reference
as those of the source object from which the copy was made  */ 


const myHeros= ["ironman", "spiderman", "superman","batman"];

console.log(myHeros.length)

 // Array methods 

myArr.push(9)
myArr.push(8)
myArr.pop()
myArr.unshift(0) // value inserts infront of first value / 0th element 
myArr.shift() //deletes the 0th value from array
console.log(myArr)

console.log(myArr.includes(8)) //gives true/ false as output 
console.log(myArr.indexOf(3))


const newArray = myArr.join()


console.log(myArr)
console.log(newArray)
console.log(typeof newArray)



// slice, splice


console.log("A",myArr)

const myn1 = myArr.slice(1,3)  // in sli
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1,3)
console.log("C",myArr)
console.log(myn2) //splice -- splice changes the original array by removing, replacing, or adding values and returns the affected values.
console.log(myn1)//slice -- slice returns a piece of the array but it doesn't affect the original array



