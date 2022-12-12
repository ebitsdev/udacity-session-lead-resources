// @ts-nocheck
// JavaScript hoisting visualization: https://dev.to/lydiahallie/javascript-visualized-hoisting-478h
// console.log(sum(5, 8));
// console.log(city);
// console.log(firstName);
// function sum(a, b){
//     return a + b;
// }

// const firstName = "Emmanuel";

// let personalInfo = {
//     age: 31,
//     citizenship: "American",
// }

// var city = "Washington";

// Promises
function displayMessage(){
return new Promise((resolve, reject) => {
    try {
        const details = "Doing something tonight";
        resolve(details);
    } catch (error) {
        reject(new Error(error))
    }
});
}

console.log(displayMessage());

// Array filter and reduce methods

const numbers = [5, 9, 11, 4, 3, 10, 60];

// Filtered numbers
let filteredNums = numbers.filter((num) => num % 2 === 0);

console.log(filteredNums);

// Reduced array: we need to pass accumulator and current value to the reduce function

let reducedNumbers = numbers.reduce((acc, curr) => acc * curr);

console.log(reducedNumbers);

for (var i = 0; i < 3; i++){
    setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++){
    setTimeout(() => console.log(i), 1)
}

const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius
}

console.log("Diameter " + shape.diameter())
console.log("Perimeter " + shape.perimeter())