// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Ramanan",
    "full name": "ramanan mangoottathil",
    [mySym]: "mykey1",
    age: 78,
    location: "kochi",
    email: "ramananboss@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "ramanan@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "ramanan@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());







const course = {
    courseName : "webdevelopment",
    price : "9999",
    courseInstructor : "codeOfRamanan"

}
// course.courseInstructor
const{courseInstructor : instructor} = course
// console.log(courseInstructor)
console.log(instructor)



const navBar = ({company}) => {


}

navbar(company = "CodeOfRamanan")


{

    name:"kuttoosan";
    CourseName1:"WebDevelopment";
    price:"free";
}


[
    {},
    {},
    {}
]
