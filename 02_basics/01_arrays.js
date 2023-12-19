/* Date objects encapsulate an integral number that represents
 milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch)*/
 
 //Date

//  let myDate = new Date()

//  console.log(myDate.toString())
//  console.log(myDate.toDateString())
//  console.log(myDate.toLocaleString())
//  console.log(myDate.toJSON())
//  console.log(myDate.toLocaleDateString())
//  console.log(myDate.toTimeString()) 

//  console.log(typeof myDate)


//  let createdDate = new Date(2023 , 11 , 8 )

 
//  console.log(createdDate.toDateString())
 


//  let createdDate1 = new Date(2023 , 11 , 8 , 22, 30 )
//  console.log(createdDate1.toLocaleString())

let createdDate2 = new Date("12-08-2023")
//  console.log(createdDate2.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)  

// console.log(createdDate2.getTime())
// console.log(Math.floor (Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())
console.log(newDate.getDate())

console.log(`${newDate.getDay()}and/*  */ the time`)

 