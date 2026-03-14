class Customer {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public greeter() {
        return `Hello, ${this.firstName} ${this.lastName}`;
    }
}

let customer = new Customer("John", "Smith");
console.log(customer.greeter());
