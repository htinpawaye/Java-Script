//object cretion {property: value}
let employee = {
    name: "David",
    age: 25,
    email: "david@gmail.com",
    position: "manager",
}
//object vaiue (.)
console.log(employee.name);

if (employee.age > 30)
    console.log("Over 30")

else
    console.log("Under 30")

let developer = new Object();//new object create
developer.name = "Thiri"
developer.email = "thri@gmail.com"
developer.position = "junior web developer"
developer.dob = 2000;
developer.checkAge = function () {
    return 2022 - this.dob;
}

console.log(developer.name);
console.log(developer.checkAge());