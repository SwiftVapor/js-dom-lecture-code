// const name = 'Jonathon but on js';

// console.log (name);
// const section = document.getElementById('id name here')

// const items = document.getElementsByTagNames('li')

const headingOne = document.getElementById('heading-one')
headingOne.innerText = 'Shopping List'

console.log (headingOne)

// const listItems = document.getElementsByTagName('li')

// console.log (listItems)

const ingredientInput = document.querySelector('#ingredient-input');

// console.log (ingredientInput.value)


// ****** this will be where the example for making a input box go somewhere.
function addItem(){
    const shoppingItem = document.createElement('li');
    shoppingItem.innerText = ingredientInput.value;
    
    const doneBtn = document.createElement('button');
    doneBtn.innerText = 'Done'
    doneBtn.addEventListener('click', function(event){
        event.target.parentNode.remove();
    })
    shoppingItem.appendChild(doneBtn)

    document.getElementById('shopping-list').appendChild(shoppingItem);
    ingredientInput.value = ''
}




















// const lastListItems = document.querySelectorAll('.list-items')

// console.log (lastListItems)

// const lastListItem = document.getElementById('last-list');

// lastListItem.className = 'last-list-item'
// console.log(lastListItem.className)

// headingOne.style.color = 'Blue'

// console.log (ingredientInput.value)

// ingredientInput.addEventListener('keypress',
// function(even){
//     console.log(event.target.value) 
// })

// let clickMe=(()=>{
//     event.stopPropagation();
//     console.log('Button Clicked')

// })
// // something is wrong review lecture for further questions on buttons, and stop propagation.
// function parentDiv(){
//     console.log ('Parent Clicked')
// }

// document.getElementById('form-btn').addEventListener('click', function(event){
//     event.preventDefault()
//     console.log('form submitted')
// })

// // create the button element
// const btn = document.createElement('BUTTON');



