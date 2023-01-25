let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");
function add() {

    if (checkValidation()) {
        alert("You should add the values");
    }
    else {
        result.innerHTML = (parseInt(num1.value) + parseInt(num2.value));
    }
}
// result.innerHTML += (parseInt(num1.value) * parseInt(num2.value));

let subtract = document.querySelector('.subtract');
//dom property
subtract.onclick = function () {
    result.innerHTML = (parseInt(num1.value) - parseInt(num2.value));
}

let multiply = document.querySelector('.multiply');
multiply.onclick = multiplication;

function multiplication() {
    result.innerHTML = (parseInt(num1.value) * parseInt(num2.value));
}

function checkValidation() {
    let error = false;
    if (num1.value == "" || num2.value == "") {
        error = true;
    }
    return error;
}

let divide = document.querySelector('.divide');
// divide.onclick = division;

// function division() {
//     if (check()) {
//         alert("You should add a number");
//     }
//     else {
//         result.innerHTML = (parseInt(num1.value) / parseInt(num2.value));
//     }

// }
// function check() {
//     let error = false;
//     if (num1.value == 0 || num2.value == 0) {
//         error = true;
//     }
//     return error;
// }

//even listner
divide.addEventListener("click", function () {

    if (checkValidation()) {
        alert("You should add a number");
    }
    else {
        if (parseInt(num2.value) == 0) {
            alert("The divider should not be 0")
        }
        else {
            result.innerHTML = (parseInt(num1.value) / parseInt(num2.value));
        }
    }
});
