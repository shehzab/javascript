function multiply(num){
    return num*5
}

multiply.power = 2
console.log(multiply(5))
console.log(multiply.power)
console.log(multiply.prototype)


function createUser(userName, score){
    this.userName = userName
    this.score = score
}

createUser.prototype.increment = function(){
   this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}

const tea =  createUser("tea",250 )
const chai = new createUser("chai", 25)

chai.printMe()
