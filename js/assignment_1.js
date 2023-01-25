//1
let textile1 = 13;
let textiles = 0;
if (textile1 > 10) {
    textiles = textile1 * 23000;
    console.log("The total cost of textiles " + textiles)
}
else {
    textiles = textile1 * 24500;
    console.log("The total cost of textiles " + textiles)
}
let textile2 = 6000;
if (textile2 > 5000) {
    textiles = textile2 * 230;
    console.log("The total cost of textiles " + textiles)
}
else {
    textiles = textile2 * 242;
    console.log("The total cost of textiles " + textiles)
}

//2
let salary = [20000, 30000, 10000, 50000, 80000];
let total = 0;
for (let row = 0; row < salary.length; row++) {
    average = (total + salary[row]) / salary.length;
    console.log("The average salary of employee is " + average);
}

//3
let num = [5, 8, 12, 17, 20];
for (let index = 0; index <= num.length; index++) {
    if (num[index] % 5 == 0) {
        let factor = num[index];
        console.log("Number of factor " + factor);
    }

}
num = [5, 8, 12, 17, 20];
for (let index = 0; index <= num.length; index++) {
    if (num[index] % 2 == 0) {
        let factor = num[index];
        console.log("Number of factor " + factor);
    }

}

//4
let balance = 5000;
if (balance > 3000) {
    let discount = balance - 1500;
    console.log("The balance the user give for each invoice " + discount)
}
else if ((balance > 2000) && (balance < 3000)) {
    let discount = balance - 1000;
    console.log("The balance the user give for each invoice " + discount)
}
else {
    let discount = balance - 500;
    console.log("The balance the user give for each invoice " + discount)
}




