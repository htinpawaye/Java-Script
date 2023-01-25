let heading = document.getElementById("heading");
console.log(heading);

heading.innerHTML = "<a href='#'> Covid 19 </a>"

let heading1 = document.getElementById("heading1");
console.log(heading1);

heading1.innerHTML = "<strong>Candy</strong>"

let heading2 = document.getElementById("heading2");
console.log(heading2);

heading2.innerHTML = "<i>Bright</i>"

let events = document.getElementsByClassName('event');//array object html collection array
console.log(events);

let content = ["Event1", "Event2", "Event3"];
let photos = ["home1.jpg", "home7.jpg", "hospital.jpg"];
for (let index = 0; index < events.length; index++) {
    events[index].innerHTML = "<h2>" + content[index] + "</h2>";
    events[index].innerHTML += "<img src='images/" + photos[index] + "'width=100% height=200px'/>";
    events[index].innerHTML += "<button class='mt-3 btn btn-dark'> See More </button>";

    if (index % 2 == 0) {
        events[index].classList.add('even');
    }
    else {
        events[index].classList.add('odd');
    }

}

let flash_sale = document.getElementById('flash_sale');
console.log(flash_sale);

let sale_photos = ["home1.jpg", "home7.jpg", "hospital.jpg", "6.jpg", "16.jpg", "home2.jpg"];
for (let index = 0; index < sale_photos.length; index++) {
    if (index % 2 == 0) {
        flash_sale.innerHTML += "<div class='col-2 mt-3 even'><img src='images/" + sale_photos[index] + "'width=100% height=200px'/></div>";
    }
    else {
        flash_sale.innerHTML += "<div class='col-2 mt-3 odd'><img src='images/" + sale_photos[index] + "'width=100% height=200px'/></div>";
    }

}

let buttons = document.getElementsByTagName('button');
console.log(buttons);

//queryselector
let rows = document.querySelector('.row');
console.log(rows);

buttons = document.querySelectorAll('button');
console.log(buttons);

sale = document.querySelectorAll('flash_sale');
console.log(sale);

flash_sale.style.backgroundColor = "black";

for (let index = 0; index < buttons.length; index++) {
    buttons[index].style.backgroundColor = "blue";
}

