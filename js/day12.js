$(document).ready(function () {
    $('#guess').click(function () {
        console.log("On guess click");
        let xhr = new XMLHttpRequest();
        xhr.open('get', '../data/data.txt', true);
        //1.method type:get,post
        //2.url:data>>data.txt file
        //3.flag:asyn=>true
        xhr.send();
        xhr.onload = function () {
            let number = xhr.responseText;
            console.log(number)
            console.log(xhr.readyState);
            if (number == $('.inputnumber').val()) {
                alert("Your guess is correct");
            }
            else {
                alert("Your guess is wrong");
            }
        }
    })
})