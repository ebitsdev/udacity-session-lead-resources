/**
* DOM
* Manipulating the DOM
* Browser Events & Handling User Interactions
 */
// Select an html element by tag name
const heading = document.querySelector('h1')
const headingQAll = document.querySelectorAll('h1')
const headings = document.getElementsByTagName('h1')
const parags = document.getElementsByTagName('p')
const headings2 = document.getElementsByName("heading")
heading?.addEventListener('click', function(ev) {
    heading.style.color = 'red';
    heading.textContent = 'You just clicked this element!'
});
// console.log(headingQAll);
// for (const h of headings){
//     console.log(h.textContent);
// }
// for (const p of parags){
//     console.log(p.textContent);
// }
// selecting element by class name
const listItems = document.querySelectorAll('.o-item')
const listItemsClass = document.getElementsByClassName('o-item')
// console.log(listItems);
// listItems.forEach((item) => {
//     console.log(item.textContent);
// })
// for (const item of listItemsClass){
//     console.log(item.textContent);
// }

// Selecting element by ID
const heading2 = document.getElementById('heading-2');
const heading2Q = document.querySelector('#heading-2');
console.log(heading2Q?.textContent);

// Working with browser events and Handling events
// for (const p of parags){
//     p.addEventListener('click', (e) => {
//         if (e.currentTarget === p){
//             p.style.fontWeight = 'bold'
//         }
//     })
// }

function boldText(tName){
    tName.style.fontWeight = 'bold'
}
const body = document.querySelector('body')
body?.addEventListener('click', (e) => {    
    for (const p of parags){
        if (e.target === p){
            // p.style.textDecoration = 'underline'
            boldText(e.target)
        }
    }
    const image = document.querySelector('img');
    if (e.target === image){
        image.style.width = '85%'
    }
})
