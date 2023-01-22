console.log("Hello World")

let name = "Peter"


console.log(name);
name = "Stewey"
console.log(name);
name = "John"
console.log(name);
let greeting = "Hello ";
let gender = "male"

console.log(greeting + name);

let product1 = 200;
let product2 = 150;

const total = product1 + product2

console.log("The total of the products are" + total);
console.log(name, gender);

// You cannot change the value of a constant

// Operators +, -, *, /, %, ++, --

let a = 20;
let b = 25;

let result = a + b;

console.log(result);

a = 45;
b = 76;

console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// The following statements will give you the same results

a = a + 1 // 46
a += 1; // 47
a ++ // 48

console.log(a);

b = a - b;
b -= a;
b = b + a;
b += a;

console.log(++a);
++b;
b++;
console.log(a++);

let complicatedStuff = 20 * (20 / 4 % 23) - 5
console.log(complicatedStuff);

let stringNumber = '3.65';
let anotherStringNumber = '349.45';

result = stringNumber + anotherStringNumber;
console.log(result);

result = parseFloat(stringNumber) + parseFloat(anotherStringNumber);
console.log(result);
console.log(parseInt("85") + parseInt("5884"));

result = +stringNumber + +anotherStringNumber;
result = (+stringNumber) + (+anotherStringNumber);
result = +stringNumber - +anotherStringNumber;
result = +stringNumber * +anotherStringNumber;
result = +stringNumber / +anotherStringNumber;
result = 20 + 5 * (+stringNumber / +anotherStringNumber) / 4;

// assignment operators

// A reminder that:
// a = 45;
// b = 76;

a = b;
a += b;
a -= b;
a *= b;
a /= b;
a %= b;

console.log("a > b: ", a > b);
console.log("a < b: ", a < b);
console.log("a <= b: ", a <= b);
console.log("a >= b: ", a >= b);
console.log("a == b: ", a == b);
console.log("a === b: ", a === b);

function myFunction() {
    console.log("Yay!");
}

myFunction()

function sayHello() {
    console.log("Hello! " + name + "!");
}

function addNumbers(num1, num2){
    console.log(num1 + num2)
    return num1 + num2;
}

let message = sayHello("name")
console.log(message)

result = addNumbers(a, b);

sayHello(result);

console.log(result);


function calculate(num1, num2, operator) {
    let total = 0;

    if (operator === 'add') {
        total = num1 + num2;
    } else if (operator === 'sub'){
        total = num1 - num2;
    } else if (operator == 'divide'){
        total = num1 / num2
    } else if (operator === 'multiply') {
        total = num1 * num2
    }
    else {
        console.log("invalid operator " + operator)
    }

    return total;
}

function performcalculation(operator) {
    const num1 = document.querySelector("#num1").value;
    const num2 = document.querySelector("#num2").value;

    const total = calculate(+num1, +num2, operator);

    document.querySelector("#total").value = total;
}

console.log(calculate(10, 20, 'multiply'))

const anotherPerformcalculation = () => {
    console.log("hello!")
}

const yetAnotherOne = function () {
    console.log("hello!")
}



let customer = {
    name: "Peter",
    age: 65,
    location: "Tallinn",
    height: 190,
    balance: 140.99,
    introduce: function () {return "Hello my name is Peter";},
}

console.log(customer)

customer.showSomething = function (value1, value2) {
    let total = value1 + value2;
    // more stuff here
    // more stuff here
    // more stuff here
    return "Something something " + total;
}

console.log(customer.name)
console.log(customer.age)
console.log(customer.location)
console.log(customer.height)
console.log(customer.balance)

let anotherCustomer = {...customer};

let yetAnotherCustomer = {
    ...customer,
    name: 'John',
    age: 67,
    height: 12,
    balance: 4,
}

litOfPets = [
    "cat",
    "dog",
    "rabbit",
    "tiger",
    "rat",
]

console.log(litOfPets[2])
console.log(litOfPets[0])
console.log(litOfPets[1])
console.log(litOfPets[3])

let rat = litOfPets[4];
let cat = litOfPets[0];
let rabbit = litOfPets[2];

for (i = 0; i < litOfPets.length; i++) {
    console.log("Pet at position: " + i + " is " + litOfPets[i])
}

for (let counter = 1; counter <= 50; counter++){
    console.log("counter: " + counter)
}


function doStuff() {
    doStuff();
}

let listOfCustomers = [
    customer,
    {...customer, name: "John"},
    {...customer, name: "Peter"},
    {...customer, name: "Teve"},
    {...customer, name: "Mary"},
    {...customer, name: "Zino"},
    {...customer, name: "Siim"},
    {...customer, name: "Reg"},
]

console.log(listOfCustomers);

for (let i = 0; i < listOfCustomers.length; i++) {
    let currentCustomer = listOfCustomers[i];

    if (currentCustomer.name === "Mary") {
        console.log(currentCustomer)
        break;
    }
}

let users = [];

const addUser = () => {
    const fullName = document.querySelector("#fullName").value;
    const id = Math.floor(Math.random() * 1000);

    users.push({
        fullName: fullName,
        id: id
    })
    displayUsers(users);
}

const displayUsers = (users) => {
    let listOfUsersHTML = '';

    users.forEach((currentUser) => {
        listOfUsersHTML += "<li>" + currentUser.fullName + "</li>"
    })

    document.querySelector("#userList").innerHTML = listOfUsersHTML;
}


const removeUser = () => {
    const fullName = document.querySelector("#fullName").value;

    users = users.filter((currentUser) => currentUser.fullName != fullName);

    displayUsers(users)

}