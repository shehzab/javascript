
const myObject = {
    js: 'javascript',
    cpp : 'c++',
    rb: 'ruby',
    swift :'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} is short for ${myObject[key]}`)
}

const programming =["js", "rb", "py","java","c"]

for (const key in programming) {
    // console.log(key);// output: 0,1,2,3,4
    console.log(programming[key])
}
