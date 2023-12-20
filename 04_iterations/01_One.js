// for

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
// }

for (let index = 0; index <= 10; index++) {
    const element = index;

    if (element == 5) {
        // console.log("5 is middle")
    }

    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value : ${i}`);
    for (let j = 0; j <= 10; j++) {
    //    console.log(`inner lop value : ${j} and inner loop ${i}`) 
        // console.log(i + '*' + j + ' = ' + i*j);
    }
    
} 

// let myArr = ["flash ","superman", "batman"]
// console.log(myArr.length)
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element)
// }




// break and continue


// for (let index = 0; index <= 20; index++){
//     if (index == 5) {
//         console.log("detected five")
//         break 
//     }
//         console.log(`Value of i is ${index}`)
// }


for (let index = 0; index <= 20; index++){
    if (index == 5 *1  ) {
        console.log("detected five")
        continue 
    }
        console.log(`Value of i is ${index}`)
}
    
