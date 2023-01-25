console.log("in external js file");//console window

document.write("in web page");//web page

alert("Alert Box");//alert box

//variable

var course = "java script";
console.log("Course name is " + course);

var name = "Htin Paw Aye";
console.log("Name is:" + name);

var email = "htinpawaye123@gmail.com";
{
    var address = "Innlay";
    console.log("Address:" + address);

    console.log("Email:" + email);

    let phoneno = "0934568990";
    console.log("my Phone no:" + phoneno);
}

console.log("My address is:" + address);

const p1 = 3.142;
console.log("P1 is " + p1);
// p1 = 3.14221 //error

console.log(typeof (course));

let age = 20;
let status = true;
console.log("Age is " + age);
console.log("type is " + typeof (age));
console.log("status type is " + typeof (status));

let interestrate = 0.03;
let isPublished = 1;
let year = 2000;
let title = "Covid 19";

console.log("interest-rate type is " + typeof (interestrate));
console.log("isPublished type is " + typeof (isPublished));
console.log("year type is " + typeof (year));
console.log("title type is " + typeof (title));

var title1;//without value = undefined
console.log("title1 is " + title1);
// console.log("salary is " + salary);

var deperment = null;
console.log("Deperment type is " + typeof (deperment));

//Array
let employees = ["thiri", "sandar", "Mg Mg", "Kyaw Kyaw", 545, 0.99];
console.log(employees[0]);
console.log(employees.length);

let majors = new Array("IT", "English", "Myanmar", "GTC");
console.log(majors[0]);
console.log(majors.length);

//Object
let student = {
    name: "Htin Paw",
    age: 22,
    email: "htin@gmail.com",
    address: "Innlay",
}
console.log(student.name);
console.log(student.age);