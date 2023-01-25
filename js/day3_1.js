let items = ["laptop", "phone", 'cosmetic', "instant", "ipad"];

for (let index = 0; index < items.length; index++) {
    console.log(items[index]);
}

let products = [
    ['laptop', 450, 10, 'Doll'],
    ['Phone', 1200, 8, 'Apple'],
    ['cosmetic', 230, 15, 'skill']
]
let total = 0;
for (let row = 0; row < products.length; row++) {
    console.log(products[row]);
    for (let col = 0; col < products[row].length; col++) {
        console.log(products[row][col]);
    }

    let subtotal = products[row][1] * products[row][2];
    console.log(subtotal)
    total += subtotal;

}
console.log(total)

products.forEach(product => {
    console.log("product is " + product);
    product.forEach(item => {
        console.log("item is" + item)
    })
});

for (const key in products) {
    console.log("key is" + key)
    console.log(products[key])
    for (const key1 in products[key]) {
        console.log(products[key][key1])
    }
}

for (const itemes of products) {
    console.log(itemes)
    for (const value of itemes) {
        console.log(value)
    }
}
