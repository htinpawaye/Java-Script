let add = document.getElementById('add');
let item = document.querySelector('select');
let price = document.getElementById('price');
let qty = document.getElementById('qty');
let subtotal = document.getElementById('subtotal');
let second = document.getElementById('second');
let container = document.getElementById('end');

let items = [['Select Item', 0], ['Item1', 1000], ['Item2', 5000], ['Item3', 9000]];
for (let index = 0; index < items.length; index++) {
    let option = document.createElement('option');
    option.innerText += (items[index][0]);
    item.appendChild(option);
}

item.onchange = change;

function change() {
    for (let i = 0; i < items.length; i++) {
        if (item.value == items[i][0]) {
            price.value = items[i][1];
        }
    }
}

qty.addEventListener('blur', function () {

    subtotal.value = price.value * qty.value;

})

add.addEventListener('click', function () {

    let select = document.createElement('select');
    select.setAttribute('class', 'form-select');

    let prices = document.createElement('input');
    prices.type = "number";
    prices.setAttribute('class', 'form-control');
    prices.placeholder = "Price";

    let quantity = document.createElement('input');
    quantity.type = "number";
    quantity.setAttribute('class', 'form-control');
    quantity.placeholder = "QTY";

    let subtotals = document.createElement('input');
    subtotals.type = "number";
    subtotals.setAttribute('class', 'form-control');
    subtotals.placeholder = "SubTotal";

    let button = document.createElement('button');
    button.innerText = "Remove";
    button.setAttribute('class', 'btn btn-primary');

    let col1 = document.createElement('div');
    col1.setAttribute('class', 'col-md-2');
    let col2 = document.createElement('div');
    col2.setAttribute('class', 'col-md-2');
    let col3 = document.createElement('div');
    col3.setAttribute('class', 'col-md-2');
    let col4 = document.createElement('div');
    col4.setAttribute('class', 'col-md-2');
    let col5 = document.createElement('div');
    col5.setAttribute('class', 'col-md-2');

    col1.appendChild(select)
    col2.appendChild(prices)
    col3.appendChild(quantity)
    col4.appendChild(subtotals)
    col5.appendChild(button)

    second.appendChild(col1);
    second.appendChild(col2);
    second.appendChild(col3);
    second.appendChild(col4);
    second.appendChild(col5);

    end.appendChild(second);
    let items = [['Select Item', 0], ['Item1', 1000], ['Item2', 5000], ['Item3', 9000]];
    for (let index = 0; index < items.length; index++) {
        let option = document.createElement('option');
        option.innerText += (items[index][0]);
        select.appendChild(option);
    }

    select.onchange = change;

    function change() {
        for (let i = 0; i < items.length; i++) {
            if (select.value == items[i][0]) {
                prices.value = items[i][1];
            }
        }
    }
    quantity.addEventListener('blur', function () {

        subtotals.value = prices.value * quantity.value;

    })
    button.onclick = remove;
})

function remove() {
    let col = this.parentNode;
    let row = this.parentNode.parentNode;
    let div = this.parentNode.parentNode.parentNode;
    div.removeChild(row);
}




