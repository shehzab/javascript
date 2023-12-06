const name = "maneesh "
const repoCount = 23
console.log(name + repoCount + " value")  //outdated syntax

console.log(`helo my name is ${name} and my repo countr is ${repoCount}`) // use this syntax

const discordName = new String('ramanan') 
console.log(discordName[0]);
console.log(discordName.__proto__);

console.log(discordName.length);
console.log(discordName.charAt(0));
console.log(discordName.toUpperCase()) 
console.log(discordName.indexOf('r'))
console.log(discordName.indexOf('r'))

const newString = discordName.substring(0,5)
console.log(newString)

const anotherString = discordName.slice(-6,4)
console.log(anotherString)

const newString1 = "    hitesh   "
console.log(newString1)
console.log(newString1.trim()) 


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
