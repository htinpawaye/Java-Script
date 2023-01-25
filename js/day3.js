let temp = 30;
if (temp > 50) {
    console.log("hight temperature");
}
else if (temp < 50 && temp > 30) {
    console.log("normal temperature");
}
else if (temp < 30) {
    console.log("low temperature");
}
else (temp < 0)
{
    console.log("Freeze");
}

let value = 20 * 3;
switch (value) {
    case 60: console.log("it is correct"); break;
    case 50: console.log("it is not correct"); break;
    default: console.log("it is default correct");

}

let brand = "honda";
switch (brand) {
    case 'bmw': console.log("it is bmw"); break;
    case 'toyota': console.log("it is toyota"); break;
    case 'mar': console.log("it is mar"); break;
    default: console.log("it is one kind of vehicle");
}

let marks = 85;
switch (true) {
    case (marks > 80): console.log("it is GradeA"); break;
    case (marks > 65): console.log("it is Grade B"); break;
    case (marks > 50): console.log("it is Grade C"); break;
    default: console.log("Grade D");
}

let temp1 = 50;
let result = (temp1 > 40) ? "hight temp" : "low temp";
console.log(result);

marks = 35;
result = (marks > 80) ? "A" : ((marks > 65) ? "B" : (marks > 50) ? "C" : "D");
console.log(result);

let balance = 38000000;
result = (balance >= 50000000) ? ((balance * 0.035) / 12) : (balance >= 30000000) ? ((balance * 0.03) / 12) : (balance >= 10000000) ? ((balance * 0.02) / 12) : ((balance * 0.01) / 12);
console.log(result)