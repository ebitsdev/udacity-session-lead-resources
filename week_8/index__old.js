// @ts-nocheck
// Go over basic data types
// string
const cityName = "Los Angeles";
function printString(txt){
    console.log(txt);
}
// cityName
// printString(cityName)
// console.log(cityName.charAt(10));
// console.log(cityName.toLowerCase());

// testFunc()

// number

function sum(a, b){
    if (typeof a === "string"){
        return parseInt(a) + b;
    }
    return a + b;
}

function division(c, d){
    return c / d;
}

// Working with boolean (true or false)
function checkValue(x, y){
    if (x === y){
        return true;
    } else {
        return false
    }
}
// console.log("Value: ", checkValue(2, 2))
// console.log(division(16, 3));
// console.log(sum("4", 9))

// Key words: var, let, const
var firstName;
let lastName = "Your's";
const country = "USA";

// console.log("Is it Johnny", firstName)
// console.log(lastName)
// console.log(country)
// function testFunc(){
//     console.log("Defined on line 42")
// }

// What is the difference between Undefined and null
// null is data type

const countryNames = ["USA", "Canada", "Spain", "South Africa", "Ghana", "Japan"];

countryNames.push("India")

function getArrElements(arr){
    // arr.forEach(element => {
    //         console.log(`Using forEach method: ${element}`);
    // });

    // arr.map(item => {
    //     if (item === "Spain"){
    //         console.log(`The list contains ${item}`);
    //     } else {
    //         return
    //     }
    // })
    console.log(arr.filter((item) => item.startsWith("C")))
    console.log(arr.length)
}

getArrElements(countryNames)

const numbers = [5, 3, 8, 1, 9, 4, 10];
const nums = [5, 3, 8, 1, 9, 4, 10];

console.log(numbers.filter((num) => num % 2 !== 0));
console.log(numbers.map((num) => {
    if (num % 2 !== 0) {
        return num * 5
    } 
    return num
}))

function loopOverArray(arr){
    for (let el of arr){
        console.log(el * 2)
    }
}
loopOverArray(numbers)

console.log(nums.map((item) => {
        if (item % 2 !== 0){
            return item * 5
        }
        return item
}))

function multiply(arr){
    let odds = [];
    arr.filter((odd) => {
        if (odd % 2 !== 0){
            odds.push(odd*5)
        }
        return
    })
    return odds;
}

console.log(multiply(nums))