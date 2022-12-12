/**
 * JavaScript
 * Functions
 * Arrays
 * Objects
 * Activities
 */
// Function declaration
function listOfStudents(){
    const students = ["Student 1", "Student 2", "Student 3"];
    for (let student of students){
        // console.log(student);
    }
}

listOfStudents();

// function expression
const getTotal = function(n1, n2){
    return n1 + n2;
}

const getCities = () => {
    const cities = ["City one", "City two", "City three"];
    cities.push("City four");
    // console.log(cities);
    return cities.length;
}

// console.log(getTotal(45, 81));

getCities()

const addNums = (a, b) => a + b; // implicit return
const addNums1 = function(a, b) {    
    return a + b;
}
addNums1(6, 5)

// console.log(addNums(61, 11));

// Working with Arrays

const numbers = [56, 81, 9, 45, 12, 96, 31];

// numbers.map(function(item) { return console.log(item)});
// console.log(numbers.map(item => item * 3));
// console.log(numbers.filter(number => number % 2 !== 0));
// console.log(numbers.pop())
// console.log(numbers.includes(9, 3))
// console.log(numbers.reduce((placeholder, item) => placeholder + item));
// console.log(numbers.shift())
// // numbers.splice(1, 2)
// console.log(numbers.slice(0, 3))

// console.log(numbers)

// Working with Objects
const student = {
    name: "Student one",
    age: 26,
    city: "City one"
}
// Adding key/value pair to an object
student.country = "USA"
student["language"] = "English"
student.details = () =>{
    console.log("hello from the object method");
}
console.log(student.city); 
console.log(student.details());

const student2 = {
    name: "Johnny",
    age: 30,
    city: "Los Angeles",
    // Object method
    getDetails(){
        console.log(`${this.name} lives in ${this.city} and they are ${this.age} of age.`)
    }
}

student2.getDetails()
console.log(Object.values(student2))
console.log(Object.entries(student));
// Activity
/**
 * Create an object representing a person with the following details
 * name, city, country, language, hobby.
 * Add a method to the object to console log all the details provided above
 */