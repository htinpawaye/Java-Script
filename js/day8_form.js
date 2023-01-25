let loginbtn = document.getElementById('login');
loginbtn.addEventListener('click', function (event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username == "") {
        document.getElementById('user_error').innerHTML = "Please fill username";
    }
    else {
        document.getElementById('user_error').innerHTML = "";
    }
    if (password == "") {
        document.getElementById('pwd_error').innerHTML = "Please fill password";
    }
    else {
        document.getElementById('pwd_error').innerHTML = "";
    }

})

let user = document.getElementById('username');
user.addEventListener('focus', function () {
    document.getElementById('user_error').innerHTML = "You have to fill username......";
})

user.addEventListener('blur', function () {
    let username = document.getElementById('username').value;

    if (username == "") {
        document.getElementById('user_error').innerHTML = "Please fill username";
    }
    else {
        document.getElementById('user_error').innerHTML = "";
    }
})