let newradio = document.getElementById('new');
newradio.addEventListener('click', function () {
    let business = document.querySelector('.business');
    business.classList.add('hide');
    business.classList.remove('show');

    if (business.classList.contains('hide')) {
        business.classList.add('hide');
    }
    if (business.classList.contains('show')) {
        business.classList.remove('show');
    }
})

let existingradio = document.getElementById('existing');
existingradio.addEventListener('click', function () {
    let business = document.querySelector('.business');
    business.classList.add('show');
})
let customers = document.querySelectorAll('input[name=customer]');
console.log(customers);
customers.forEach(element => {
    // console.log(element);
    // element.onchange = change(element)
    element.addEventListener('change', function () {
        console.log("Change in event listener");
    })
});
function change(event) {
    console.log(event.value);
    if (event.value == "new") {
        console.log("New Customer");
    }
    else {
        console.log("Existing Customer");
    }
}

let country = document.getElementById('country');
country.addEventListener('change', function () {
    console.log("change in select");
    console.log(country.value);
    console.log(country.options[country.selectedIndex].value);
    console.log(country.options[country.selectedIndex].text);
})

document.getElementById('html').addEventListener('change', function () {
    if (document.getElementById('html').checked) {
        console.log("HTML is checked");
    }
    else {
        console.log("NO check");
    }
})

/*let item1 = document.getElementById('item1');
item1.addEventListener('change', function () {
    let list = document.getElementById('list');
    if (item1.checked) {
        let listitem = item1.parentElement;
        list.removeChild(listitem);
    }
})*/

let list = document.getElementById('list');
list.addEventListener('change', function (event) {
    console.log(event.target);
    list.removeChild(event.target.parentElement);
})