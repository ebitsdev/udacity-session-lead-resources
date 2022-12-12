function jsdemo(name){
    console.log('Hello World ', name);
}

jsdemo('Johnny')

function addNumbers(){
    // Number data type
    const a = 65;
    const b = 51;
    return a + b;
}

function castingToInt(num1, num2){
    return parseInt(num1) + parseInt(num2);
}

const totalNum = castingToInt("9", "6");

console.log(totalNum)

function showMessage(msg){
    // Working with string data type
    console.log(msg)
}

function greeting(msg, name){
    // using string literal
    console.log(`Using string literal: ${msg}, ${name}`)
    console.log("Using normal string concatenation: " + msg + " " + name)
}
showMessage("Hello class, how is weekend going?")
// console.log(addNumbers())
greeting("Buena tarde", "Alexandro" );

// Undefined data type (variable)
let students;

console.log(students)

function checkValue(x){
    // Working with boolean and conditionals
    if (typeof x === "number"){
        console.log(`${x} is a ${typeof x}`);
    } else {
        console.log(`It is a different type: ${typeof x}`);
    }
}
const cities = ["New York", "Seattle", "San Jose", "Los Angeles", "Conakry"]

checkValue(students)

function printCityNames(ar){
    // Classic for loop
    for (let i = 0; i < ar.length; i++){
        console.log(`city: ${ar[i]}`)
    }
    // array method forEach
    ar.forEach(element => {
        console.log(element)
    });
    // Map method
    ar.map((item) => console.log(`This is from the map method ${item}`))
}

printCityNames(cities)

// Read about the scope of var, let, and const keywords in JavaScript