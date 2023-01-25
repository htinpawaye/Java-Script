let students = [
    [45, 66, 78, 69, 52],
    [88, 78, 98, 80, 100],
    [67, 77, 58, 98, 50]
];
//average=anonymous function let average=function(marks){}
//anonymous function => arrow function
//let funcname=()=>{ }
let average = (marks) => {
    let total = 0;
    marks.forEach(mark => {
        total += mark;
    });
    let average = total / marks.length;
    console.log("avg mark is " + average)
    return average;
}

for (let index = 0; index < students.length; index++) {
    console.log(average(students[index]));
}

//3 numbers of addition
let result = (a, b, c) => {
    return a + b + c;
}
alert(result(5, 17, 298));

//average of 3 numbers ??
let result1 = (a, b, c) => {
    return (a + b + c) / result.length;
}

console.log(result1(5, 10, 20));
//even or add of number ??

let even = (num) => {
    if (num % 2 == 0)
        console.log('even');
    else
        console.log('odd');
}
even(5);
