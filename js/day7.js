let event1 = document.querySelector('.event1');
console.log(event1);
event1.innerHTML = "<h2>Event</h2>";
event1.innerHTML += "<img src='images/home1.jpg' width='300px' height='300px' />";

let heading2 = event1.querySelector('h2');
console.log(heading2);
heading2.style.fontSize = "40px";
heading2.style.color = "red";

heading2.classList.add('heading2');

let image = event1.querySelector('img');
console.log(image);

let event2 = document.querySelector('.event2');
console.log(event2);
event2.appendChild(image);

//how to create element and append in parent element
// let ul = document.createElement('ul');
// let li = document.createElement('li');
// li.innerText = "New List Item"
// ul.appendChild(li);

// event1.appendChild(ul);

let buylist = document.createElement('ul');
buylist.classList.add('buylistgroup');
let tobuylist = ['fruit', 'oil', 'veggie'];
tobuylist.forEach(element => {
    let li = document.createElement('li');
    li.innerText = element;
    buylist.appendChild(li);

    let button = document.createElement('button');
    button.innerText = "Done";
    li.appendChild(button);
    button.classList.add('btn');
    button.classList.add('btn-success')
    button.classList.add('ms-5')
});
event1.appendChild(buylist);

//create 4 divs of col-md-3 and add thes into popular row
let popular = document.querySelector('.popular');
console.log(popular);
// popular.innerHTML = "<div class='col-md-3' event></div>";
// popular.innerHTML += "<div class='col-md-3' event></div>";
// popular.innerHTML += "<div class='col-md-3' event></div>";
// popular.innerHTML += "<div class='col-md-3' event></div>";

for (let index = 0; index < 4; index++) {
    let div = document.createElement('div');
    div.classList.add('col-md-3');

    popular.appendChild(div);

    //input type textbox in each div
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.classList.add('form-control');

    div.appendChild(input);
}

console.log(buylist.firstChild);
console.log(buylist.lastChild);

console.log(buylist.firstElementChild);
console.log(buylist.lastElementChild);

let firstitem = document.querySelector('li:first-child');
console.log(firstitem);
let lastitem = document.querySelector('li:last-child');
console.log(lastitem);
let seconditem = document.querySelector('li:nth-child(2)');
console.log(seconditem);
let seconditem1 = document.querySelector('li:nth-child(odd)');
console.log(seconditem1);


let firstchild = buylist.firstChild;
console.log(firstchild.nextSibling.previousSibling);


