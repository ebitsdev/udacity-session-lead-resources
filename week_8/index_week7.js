// Review functions
// function declaration
function whatsYourName(txt){
    // const name = 'Emmanuel';
    console.log(txt);
}
// whatsYourName('Jane');
// function with parameters
function getTotal(a, b){
    return a + b;
}
// console.log(getTotal(4, 8));
function multiply(num1, num2){
    return num1 * num2;
}
function getNumbers(num){
    console.log(num);
}
// function using output of another function
// getNumbers(multiply(8,11));

// function expression
const printList = () => {
    const items = [1, 'a', 'b', 9, 34];
    for (const item of items){
        console.log(item);
    }
}

const printAnotherList = function(){
    const items = [1, 'a', 'b', 9, 34];
    for (const item of items){
        console.log(item);
    }
}

const divideNumbers = num => num / 2;

const listOfCities = (cities) => {
    cities.forEach((city) => console.log(city));
}
// listOfCities(['City one', 'City two', 'City three']);
// console.log(divideNumbers(26));
// printAnotherList()
// Arrays
const numbers = [7, 2, 19, 87, 92, 105, 13, 6];
const letters = ['a', 'b', 'c'];
// numbers.push(51, 61);
// numbers.map(number => console.log(number));
// numbers.map((num) => {
//     console.log(num * num);
// })
// console.log(numbers.filter(num => num % 2 === 0))
// console.log(numbers.reduce((accumulator, currentV) => accumulator + currentV));
// console.log(numbers.length);
// Objects
const city = {
    name: "Washington D.C",
    population: 712816,
    area: "68 mi2",
    founded: 'July 16, 1790',
    landmarks: [
        "Washington Monument", "Capitol", "White House", "Lincoln Memorial"
    ],
    getCityInfo() {
        // We can use JavaScript string literal
        console.log(`Here are the details about ${this.name}. It was founded on ${this.founded}. It has a population of ${this.population}. Some of the main landmarks of the city are: ${this.landmarks.join(', ')}
        `);
    }
}
// add additional key/value pair to the object
city.getCityInfo()

// Activity
/**
 * Use objects
 * Introduce your city in a similar fashion to what we just covered on Washington D.C
 * name, population, area, founded?, add a method to print out the details about your city.
 * Share with me on Slack
 */
//  function countDown(fromNumber) {
//     console.log(fromNumber);

//     let nextNumber = fromNumber - 1;

//     if (nextNumber > 0) {
//         countDown(nextNumber);
//     }
// }
