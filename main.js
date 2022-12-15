// DOM overview
// Selecting html element by tag name
const header = document.querySelector('h1')
// header.style.color = 'blue';
// 
const headingById = document.getElementById('heading-2')
workWithEvent('click', headingById)
const headers = document.getElementsByTagName('h1')
const headersQ = document.querySelectorAll('h1')
// console.log(headers);
// console.log(headersQ);
// for (const h1 of headers){
//     h1.style.color = 'green'
// }
// Selecting html element by class name
const singleParag = document.querySelector('.parag')
const paragraphs = document.getElementsByClassName('parag')
for (const para of paragraphs){
    console.log(para.textContent);
}
// console.log(singleParag);
// console.log(paragraphs);
// Selecting html element by ID
const heading1 = document.querySelector('#heading-1')

const newLi = document.createElement('li')
newLi.textContent = 'Element added dynamically from JavaScript'
const ol = document.querySelector('ol')
// Browser events
const body = document.querySelector('body')
body?.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.nodeName === 'IMG'){
        ol?.appendChild(newLi)
    }
})
const image = document.querySelector('img')
function workWithEvent(event, element){
    element.addEventListener(event, (ev) => {
        ev.target.style.textDecoration = 'overline'
    })
}
