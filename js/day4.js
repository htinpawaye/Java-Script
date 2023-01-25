let students = [
    [45, 66, 78, 69, 52],
    [88, 78, 98, 80, 100],
    [67, 77, 58, 98, 50]
];
//step1 :function definition
function avgMark(marks) {
    let total = 0;
    marks.forEach(mark => {
        total += mark;
    });
    let average = total / marks.length;
    console.log("avg mark is " + average)
    return average;
}

for (let index = 0; index < students.length; index++) {
    let avg = avgMark(students[index]);//step 2 function call
    if (avg > 80)
        console.log("Grade A");
    else if (avg > 65)
        console.log("Grade B")
    else if (avg > 50)
        console.log("Grade C")
    else
        console.log("Grade D")
}

let present = [
    [1, 1, 1, 1, 0, 1, 1, 0, 1, 0],
    [1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
function numatt(numbers) {
    let attance = 0
    numbers.forEach(number => {
        attance += number;
    });
    let numberofatt = attance / numbers.length * 100;
    // let numberofabset =;
    console.log("number of atttanced " + numberofatt);
    // console.log("number of absent " + numberofabset);
    return numberofatt;
}
for (let num = 0; num < present.length; num++) {
    let numattanced = numatt(present[num]);
    if (numattanced == 100)
        console.log("You get 2000 MMK")
    else if (numattanced > 80)
        console.log("You get 1000 MMK")
    else
        console.log("You don't get bonus")


}