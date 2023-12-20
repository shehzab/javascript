
const coding = [ "js","python","java","ruby"]

 const values = coding.forEach( (item) => {
    // console.log(item);
    return item
} )

// console.log(values);


// const myNUms = [1,2,3,4,5,6,7,8,9,10]
// const  newNums = myNUms.filter((num )=> {
//     return  num > 4
// } )

const newNums = []
myNUms.forEach((num) => {
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums)



// filter
/* The filter() method of Array instances creates a shallow copy of a portion of a given array,
filtered down to just the elements from the given array that pass the test implemented by the provided function.*/
   
 const books = [

    { title:'Book 1' , genre: 'fiction', publish: '1981',
    edition:2009},
    { title:'Book 2' , genre: 'comedy', publish: '1981',
    edition:2015},
    { title:'Book 3' , genre: 'comedy', publish: '2003',
    edition:2012},
    { title:'Book 4' , genre: 'History', publish: '1989',
    edition:2012},
    { title:'Book 5' , genre: 'fantasy', publish: '2001',
    edition:2010},
    { title:'Book 6' , genre: 'Non-fiction', publish: '1956',
    edition:1990},
    { title:'Book 7' , genre: 'Thriller', publish: '1985',
    edition:2011},
    { title:'Book 8' , genre: 'science', publish: '1991',
    edition:2010},
    { title:'Book 9' , genre: 'History', publish: '1990',
    edition:2021},
    { title:'Book 10' , genre: 'Horror', publish: '1981',
    edition:2001},

 ]
  

 let userBooks = books.filter((bks)=> bks.genre == 'Non-fiction')
 
 userBooks = books.filter((bks) => bks.publish >= 2000 && bks.genre === "comedy")
    console.log(userBooks)



//Map
/* The JavaScript map() method is a function that
 allows you to iterate over an array and apply a function 
 to each element of the array. 
 it returns a new array with the results of the function applied 
 to each element of the original array*/

const myNumbers = [1,2,3,4,5,6,7,8,9]

const newnums = myNumbers.map((num)=> num  + 10)

console.log( newnums)

    
 
    
 
     







