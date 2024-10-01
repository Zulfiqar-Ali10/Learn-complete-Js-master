// 1. Target Elements in the DOM with querySelector Methods Using querySelector
// Select the first element that matches the selector

const element = document.querySelector('.my-class');
console.log(element)

// Using querySelectorAll
// Select all elements that match the selector
// const elements = document.querySelectorAll('.my-class');

// 2. Access and Change Elements Changing the content of an element
// const element = document.querySelector('.my-class');
// element.textContent = 'New Content'; // Change text content
// element.innerHTML = '<span >New HTML Content</span>'; // Change HTML content

// 3. Access and Change Classes Add a class
// const element = document.querySelector('.my-class');
// element.classList.add('new-class');

// Remove a class
// const element = document.querySelector('.my-class');
// element.classList.remove('old-class');

// Toggle a class
// const element = document.querySelector('.my-class');
// const elementbtn = document.querySelector('#change-style-button')
// elementbtn.addEventListener('click' , function() {
//     element.classList.toggle('toggle-class');
// })
// Check if an element has a class

// const element = document.querySelector('.my-class');
// const hasClass = element.classList.contains('my-class');
// console.log(hasClass)

// 4. Access and Change Attributes

// Get an attribute value

// const element = document.querySelector('.my-class');
// const value = element.getAttribute('id');
// console.log(value)

// Set an attribute value

// const element = document.querySelector('.my-class');
// element.setAttribute('data-attribute', 'new-value');
// element.setAttribute('class', 'new-value');

// Remove an attribute

// const element = document.querySelector('.my-class');
// element.removeAttribute('data-attribute');
// element.removeAttribute('class');

// 5. Add DOM Elements

// Create a new element and append it to an existing element

// const newElement = document.createElement('div');
// newElement.textContent = 'This is a new element';
// // document.body.appendChild(newElement);

// const parentElement = document.querySelector('.parent-class');
// parentElement.appendChild(newElement);

// Insert an element before another element

// const newElement = document.createElement('div');
// newElement.textContent = 'Insert me before another element';
// const referenceElement = document.querySelector('.reference-class');
// referenceElement.parentNode.insertBefore(newElement, referenceElement);

// Insert an element after another element (requires inserting before the next sibling)

// const newElement = document.createElement('div');
// newElement.textContent = 'Insert me after another element';
// const referenceElement = document.querySelector('.reference-class');
// referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);

// 1. Accessing and Changing Styles Changing a single style property

// const element = document.querySelector('.my-class');
// element.style.color = 'red'; // Change the text color to red
// element.style.backgroundColor = 'blue'; // Change the background color to blue

// Changing multiple style properties

// const element = document.querySelector('.my-class');
// element.style.cssText = 'color: red; background-color: blue; font-size: 20px;';

// Using CSS properties with JavaScript

// const element1 = document.querySelector('.my-class');
// element1.style.setProperty('color', 'red');
// element1.style.setProperty('background-color', 'blue');

// 2. Accessing Computed Styles Getting the computed style of an element

// const element = document.querySelector('.my-class');
// const computedStyle = window.getComputedStyle(element);
// console.log(computedStyle.color); // Logs the computed color value
// console.log(computedStyle.backgroundColor); // Logs the computed background color value

// 3. Adding and Removing Styles Dynamically Add a class that changes styles

// const element = document.querySelector('.my-class');
// element.classList.add('new-style-class');

// Remove a class that changes styles

// const element = document.querySelector('.my-class');
// element.classList.remove('old-style-class');

// Projects

// Todo

// const taskInput = document.getElementById("taskInput");
// const addTaskButton = document.getElementById("addTaskButton");
// const taskList = document.getElementById("taskList");

// addTaskButton.addEventListener("click", function () {
//   const taskText = taskInput.value;

//   if (taskText) {
//     const li = document.createElement("li");
//     li.textContent = taskText;
//     li.addEventListener("click", function () {
//       li.classList.toggle("completed");
//     });

//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.addEventListener("click", function () {
//       taskList.removeChild(li);
//     });

//     li.appendChild(deleteButton);
//     taskList.appendChild(li);
//     taskInput.value = "";
//   }
// });


// Calculator

// array.forEach(function(currentValue, index, array) {
//     // code to execute for each element
// });

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(number) {
//     console.log(number);
// });

// const fruits = ['apple', 'banana', 'cherry'];

// fruits.forEach(function(fruit, index ,arr) {
//     // console.log(`${index} : ${fruit}`);
//     console.log(`${index}: ${fruit}: ${arr}`);
// });

// const display = document.getElementById('display');
// const buttons = document.querySelectorAll('.btn');
// const clearButton = document.getElementById('clear');
// const equalsButton = document.getElementById('equals');

// buttons.forEach(function(button) {
// // buttons.forEach(button => {
//     button.addEventListener('click', function() {
//         display.value += button.getAttribute('data-value');
//     });
// });

// clearButton.addEventListener('click', function() {
//     display.value = '';
// });

// equalsButton.addEventListener('click', function() {
//     try {
//         display.value = eval(display.value);
//     } catch {
//         display.value = 'Error';
//     }
// });

// Color Picker

// const colorPicker = document.getElementById('colorPicker');
// const colorDisplay = document.getElementById('colorDisplay');

// colorPicker.addEventListener('input', function() {
//     colorDisplay.style.backgroundColor = colorPicker.value;
// });


// Count Down

// setInterval(function, delay);

// let counter = 0;

// const intervalId = setInterval(function() {
//     counter++;
//     console.log(counter);
    
//     // Stop the counter after 10 seconds
//     if (counter === 10) {
//         clearInterval(intervalId);
//     }
// }, 1000); // 1000 milliseconds = 1 second

// setTimeout(function() {
//     console.log('This message is displayed after 2 seconds');
// }, 2000); // Calls the function once after 2000 milliseconds (2 seconds)

// const timeInput = document.getElementById('timeInput');
// const startButton = document.getElementById('startButton');
// const timerDisplay = document.getElementById('timerDisplay');

// let timer;

// startButton.addEventListener('click', function() {
//     clearInterval(timer);
    
//     let time = parseInt(timeInput.value);
//     timerDisplay.textContent = time;

//     if (isNaN(time) || time <= 0) { // Validate the input
//         alert('Please enter a valid number of seconds');
//         return;
//     }

//     timer = setInterval(function() {
//         time--;
//         timerDisplay.textContent = time;
//         if (time <= 0) {
//             clearInterval(timer);
//             alert('Time is up!');
//         }
//     }, 1000);
// });

function Calculater(){
    
let firstInput = document.getElementById("firstInput").value;
let secondInput = document.getElementById("secondInput").value;
let select = document.getElementById("select").value;

if(select == "+"){
    var res = parseInt(firstInput) + parseInt(secondInput);
    }
    document.getElementById("result").value = res;
}