function helloWorld(){
    console.log("Hello World!");
    console.log("Hola Mundo!");
    console.log("Salut le Monde");
}
// helloWorld()

// Basic Data types
// String 
const myTxt = "Abracadabra";
function printString(txt){
    console.log(txt);
}

// printString(myTxt.toUpperCase())
// printString(myTxt)

function loopOverString(str){
    for (let c of str){
        console.log(c);
    }
}

// loopOverString(myTxt)

// number

function addNums(a, b){
    return a + b;
}

function divideNums(x, y){
    if (typeof x === "string" || typeof y === "string"){
        return parseInt(x) / parseInt(y)  
    }
    return x / y;
}

console.log(addNums(9, 4))
console.log(addNums("s", 4))

console.log(divideNums("14","4"))

// undefined, null, boolean
// undefined
let student;
var cities;
const countries = ["Brazil", "Uruguay"];
console.log(student="Johnny", cities=["LA"], countries)
// working boolean

function checkValue(txt, ch){
    if (txt.includes(ch)){
        return console.log(`${txt} contains the character ${ch}.`);
    } else {
        console.log(`${txt} does not contain the character ${ch}.`)
    }
}

checkValue(myTxt, "y")

const fifaWorldCupCountries = ["Brazil", "France", "Ecuador", "Tunisia", "Iran", "Poland", "Senegal"];

function loopOverArray(arr){
    // Using old style for loop
    for (let i = 0; i < arr.length; i++){
        console.log(`Using classic for loop ${arr[i]}`)
    }
    // Using the new for of loop
    for (let item of arr){
        console.log(`Using for of loop ${item}`)
    }
    // Array forEach
    arr.forEach(function(item) {
        console.log(`Using forEach array method ${item}`)
    });
    
    // Array map method
    arr.map((item) => {
        console.log(`Using array map function ${item}`)
    })
}

function addItemToArray(item, arr){
    arr.push(item);
    arr.sort();
}
// addItemToArray("Croatia", fifaWorldCupCountries)
// loopOverArray(fifaWorldCupCountries);

console.log(fifaWorldCupCountries.join(", "))
const testArrowFunc = (greeting, myname) => {
    console.log(`${greeting} ${myname}`)
}
testArrowFunc("Hola","Johnny")

const myNums = [45, 3, 98, 1, 52, 11, 60, 90];
const evenNums = myNums.filter((num) => num % 2 === 0)
const oddNums = myNums.filter((num) => num % 2 !== 0)
console.log(evenNums)
console.log(oddNums)

// Create a function that loops over an array of numbers and multiplies every number by 6;
function multiplier(arr){
    return arr.map((item) => item * 2)
}

console.log(multiplier(myNums))