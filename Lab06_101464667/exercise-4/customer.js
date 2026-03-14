"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Customer.prototype.greeter = function () {
        return "Hello, ".concat(this.firstName, " ").concat(this.lastName);
    };
    Customer.prototype.getAge = function () {
        return this.age;
    };
    return Customer;
}());
exports.Customer = Customer;
var customer = new Customer("John", "Smith", 30);
console.log(customer.greeter());
console.log(customer.getAge());
