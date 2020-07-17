// Arrays

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(newYearsResolutions);

//

const hobbies = ['Jay','Ajay','Vijay']

console.log(hobbies)


//

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0]
console.log(listItem)
console.log(famousSayings[2])
console.log(famousSayings[2][0])
console.log(famousSayings[3])


//

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];


condiments[0] = 'Mayo'
console.log(condiments)

condiments = ['Mayo']
console.log(condiments)

utensils[3] = 'Spoon'
console.log(utensils)

utensils = ['Spoon']
console.log(utensils)

//

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];


console.log(objectives.length)

//

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('First')
chores.push('second')

console.log(chores)


//


const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];


chores.pop()
chores.pop()

console.log(chores)

//

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift()
console.log(groceryList)

groceryList.unshift('popcorn')
console.log(groceryList)

console.log(groceryList.slice(1,4)) // non-mutating
console.log(groceryList)

const pastaIndex = groceryList.indexOf('pasta')
console.log(pastaIndex)

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


//

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
    arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept)


function removeElement(newArr){
    newArr.pop()
}

removeElement(concept)

console.log(concept)


//

let numberClusters = [ [1,2],[3,4],[5,6]]

const target = numberClusters[2][1]


/*
*
*
Review Arrays
Nice work! In this lesson, we learned these concepts regarding arrays:

Arrays are lists that store data in JavaScript.
Arrays are created with brackets [].
Each item inside of an array is at a numbered position, or index, starting at 0.
We can access one item in an array using its index, with syntax like: myArray[0].
We can also change an item in an array using its index, with syntax like myArray[0] = 'new string';
Arrays have a length property, which allows you to see how many items are in an array.
Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.
Arrays have many methods that perform different tasks, such as .slice() and .shift(), you can find documentation at the Mozilla Developer Network website.
Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. You can always check the documentation.
Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. However, a variable declared with const cannot be reassigned.
Arrays mutated inside of a function will keep that change even outside the function.
Arrays can be nested inside other arrays.
To access elements in nested arrays chain indices using bracket notation.
Learning how to work with and manipulate arrays will help you work with chunks of data!
Instructions
Looking for more ways to practice? Consider trying these:

Use the .length property to find the last element of an array.
Use the other methods in MDN documentation not mentioned in the lesson.
Take all the elements in an array and make a string.
Find the return value of calling .push() on an array.
Nest an array within an array.
Access an element in the nested array.
* */