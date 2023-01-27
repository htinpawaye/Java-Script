$(document).ready(function () {
    $('.upload').click(function () {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '../data/photo.txt', true);
        xhr.send();
        xhr.onload = function () {
            let photo = xhr.responseText;
            console.log(xhr.readyState);
            let inputimg = $('.inputimg');
            inputimg.html(photo);
        }
    })
})