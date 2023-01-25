let name = document.getElementById("name");
console.log(name);
name.innerHTML = "<span>Host Myanmar (Mandalay)</span>";

let email = document.getElementById("email");
console.log(email);
email.innerText = "<span>htin@gmail.com</span>";

//Arimethic Operator
let sub1 = 67;
let sub2 = 78;
let sub3 = 83;

let total_mark = sub1 + sub2 + sub3;
console.log("Total marks is " + total_mark);

let mama = 380;
let knor = 1800;
let water = 1850;

let total_amount = (380 * 12) + (1800 * 1) + (1850 * 3);
console.log(total_amount);
let discount = 500;
let balance = total_amount - 500;
console.log(balance);

let temp_f = 80;
let temp_c = (temp_f - 32) * 5 / 9;
console.log(temp_c);

let value = 2 ** 3;
console.log("Value is " + value);

console.log(5 % 2);//remainder (modulus)

let count = 0;
count++;//count=count+1 postfix
console.log(count);
count++;
console.log(count);
++count;//prefix
console.log(count);

let qty = count++;
//qty=count
//count=count+1;
console.log("qty is " + qty);//3
console.log("count is " + count);//4

let index = ++count;
console.log("index is " + index);
console.log("count is " + count);

//Assignment Operator
// var amount = amount + balance;
// amount += balance;

//Comparison operator
console.log(5 < 2);
console.log(100 > 88);
console.log(100 == "100");
console.log(100 === "100");//data type not equal
console.log("Hello" == "hello");
console.log(120 != 100);

//Logical operator
let amount = 550000;
let isValid = false;
console.log((amount > 50000) && (isValid == true));
console.log((amount > 50000) && (isValid));
console.log((amount > 50000) || (isValid));
console.log((amount > 50000) ^ (isValid));//1^0=1

//xor
//1^1=0
//1^0=1
//0^ 1=1
//0^0=0

let mark1 = 56;
if (mark1 >= 50) {
    console.log(`${mark1} pass.`);
}
else {
    console.log(`${mark1} fail`);
}
if (mark1 >= 80) {
    console.log(`${mark1}: Grade A`);
}
else if (mark1 >= 65) {
    console.log(`${mark1}: Grade B`);
}
else if (mark1 >= 50) {
    console.log(`${mark1}: Grade C`);
}
else {
    console.log(`${mark1}: Grade D`);
}

let balance1 = 38000000;
if (balance1 >= 50000000) {
    let monthly_interest = (balance1 * 0.035) / 12;
    console.log("Monthly interest is " + monthly_interest);
}
else if (balance1 >= 30000000) {
    let monthly_interest = (balance1 * 0.03) / 12;
    console.log("Monthly interest is " + monthly_interest);
}
else {
    let monthly_interest = (balance1 * 0.02) / 12;
    console.log("Monthly interest is " + monthly_interest);
}


