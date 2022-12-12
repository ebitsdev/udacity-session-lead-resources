// Working with Functions

// Function declaration
function sayHello(){
    const greeting = "Hola Mundo!";
    // console.log(greeting);
}
sayHello()
// Function declaration with parameters
function introduction(txt, name){
    console.log(`${txt} ${name}`);
}

// introduction("Welcome to the Monday 7-9PM EST session", "Jane Doe.");

// Using function expression to create functions

const printCityNames = function(ls) {
    for (const item of ls){
        console.log(item);
    }
}

const printListItem = (list) => {
    // list.reverse()
    return list;
}
// const noParamFunc = () => console.log("This function does not have a parameter");

const cities = ["Los Angeles", "Paris", "London", "Tokyo", "Johannesburg", "New York"];
const nestedArr = [
    [1, 2, 3, 4],
    ["a", "b", "c"]
];
// console.log(nestedArr[0].length);
// printCityNames(cities)

// noParamFunc()

// Working with Arrays in JavaScript
cities.push("Washington, D.C")
// cities.pop()

cities.forEach((city) =>{
    // console.log(`This is output is from the Array forEach method: ${city}`);
});

// cities.map((city) => {
//     if (city.startsWith("J")){
//         return console.log(city);
//     }
//     return;
// });

// console.log(cities.slice(1,5))
// console.log(cities.splice(3,1))
// console.log(printListItem(cities));

// Working with Objects

const student = {
    name: "Jane Doe",
    city: "Charlotte",
    state: "NC"
}

// Add another key, value pair to the object
student.language = "Spanish"
student['Country of Origin'] = "Spain";
console.log(student['Country of Origin']);
// Create an object with methods (function belonging to an object)
const scholar = {
    name: "Johnny",
    city: "Seattle",
    state: "Washington",
    // We are declaring a function i.e method of this scholar
    getDetails() {
        console.log(`${this.name} is from ${this.city} in ${this.state}`);
    },
   print(){
    return this.name;
   }
}

scholar.getDetails()
console.log(scholar.print())

// Activity
/**
 * Create an array of numbers and print out the odd numbers to the console
 * Create an object that introduces your state. The object should have the following properties (keys)
 * name, population, region (like west, east, etc.)
 * Create a method on the state object that prints out all the details of the state.
 */
const nums = [4, 1, 5, 7, 9, 21, 95, 43, 40];

const evenNums = nums.map((num) => {
    if (num % 2 === 1){
        console.log(num)
    }
});
