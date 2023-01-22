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