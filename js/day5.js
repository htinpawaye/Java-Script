let hotel = new Object();
hotel.name = "Sedona";

//Option 1
class Car {

    constructor(wheels, windows, color) {
        this.wheels = wheels;
        this.windows = windows;
        this.color = color;
    }

    drive() {
        console.log("Car is driving");
    }
}

console.log(typeof Car);
console.log(Car.prototype);

let car = new Car(4, 4, 'black');
console.log(car.color);
car.drive();

//Option 2
function Hotel(name, address) //
{
    this.name = name;
    this.address = address;
}

Hotel.prototype.display = function () {
    console.log("Hotel " + this.name);
}

let hotel1 = new Hotel("Sedona", "Ygn");
console.log(hotel1.name);
hotel1.display();

class Employee {

    constructor(name, nrc, dob, address) {
        this.name = name;
        this.nrc = nrc;
        this.dob = dob;
        this.address = address;
    }

    calculateAge() {
        let str1 = this.dob.split('/');//split:string into array using seprate
        console.log(str1);
        let date_dob = new Date(this.dob);
        // console.log(date_dob);
        let current_date = new Date("1/15/2022");
        return current_date.getFullYear() - date_dob.getFullYear();
    }
}

console.log(typeof Employee);
console.log(Employee.prototype);

let employee = new Employee('Poe', '13/nyayana(naing)123456', '12/5/2000', 'Innlay');
console.log(employee.name);
employee.calculateAge();
console.log(employee.dob);
console.log(employee.calculateAge());

// let dob = new Date("2000/12/30");
// console.log(dob);
// console.log(dob.getFullYear());
// console.log(dob.getMonth() + 1);

// let current_date = new Date();
// console.log(current_date.getFullYear());