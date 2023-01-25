//Create Object Hotel
let hotel = new Object();
hotel.name = "Sedona"
hotel.address = "Yangon"
hotel.contact = 09345678
hotel.totalroom = 100
hotel.booking = 30
hotel.checkAvailability = function () {
    return this.totalroom - this.booking;
}
console.log(hotel.totalroom);
console.log(hotel.checkAvailability());

//create Employee Object
let Employee = new Object();
Employee.firstname = "Lwin"
Employee.lastname = "May"
Employee.email = "lwin@gmail.com"
Employee.phone = 0976544335
Employee.address = "Mandalay"
Employee.basic_salary = 80000
Employee.leave_day = 0
Employee.checkbonus = function () {
    if (this.leave_day == 0)
        return this.salary = this.basic_salary + (this.basic_salary * 0.1);
    else
        return console.log("Doesn't have bonus")
}
console.log(Employee.basic_salary);
console.log(Employee.checkbonus());