/**
 * DOM
Manipulating the DOM
Browser Events & Handling User Interactions
 */
// Select html element by tag name
const header = document.querySelector('h1')
// Select multiple elements by tag name
const listItems = document.querySelectorAll('li')
listItems.forEach((item) => {
  item.addEventListener('toggle', (e) => {
    if (e.currentTarget === item) {
      item.style.textDecoration = 'underline'
    }
  })
})
// Select element by class name
const uItems = document.getElementsByClassName('u-item')
for (const uitem of uItems) {
  console.log(uitem)
}
const uItemsQ = document.querySelectorAll('.u-item')
// Select html element by ID
const parag2 = document.getElementById('parag-2')
parag2.style.fontFamily = 'Oswald'
// Create a new parag to insert after the second one
const newParag = document.createElement('p')
newParag.textContent = 'Dynamically added from JavaScript.'
parag2?.after(newParag)
const uitem3 = document.getElementById('u-item-3')
const ul = document.querySelector('ul')
const newLi = document.createElement('li')
newLi.textContent = 'This is a new content added from JavaScript.'
ul?.appendChild(newLi)
uitem3?.before(newLi)
