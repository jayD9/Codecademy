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
