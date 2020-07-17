// Write your code below
let vacationSpots = ['New York','Chicago', 'Mumbai']

console.log(vacationSpots[0])
console.log(vacationSpots[1])
console.log(vacationSpots[2])

//
// Write your code below
for(let count = 5; count < 11; count++){
    console.log(count)
}

//

// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
}

//

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for(let i = 0 ; i < vacationSpots.length; i++){
    console.log('I would love to visit '+vacationSpots[i])
}

//

// Write your code below
let bobsFollowers = ['Jay','Ajya','Vijay','Raj']

let tinasFollowers = ['Jay','Ajya','Ram']

let mutualFollowers = []

for(let i = 0; i < bobsFollowers.length; i++){
    for(let j = 0; j < tinasFollowers.length; j++){
        if(bobsFollowers[i] === tinasFollowers[j]){
            mutualFollowers.push(bobsFollowers[i])
        }
    }
}


//

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below

let currentCard

while(currentCard != 'spade'){
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard)
}


//

// Write your code below

let cupsOfSugarNeeded = 3
let cupsAdded = 0

do{
    cupsAdded++
}while (cupsAdded < cupsOfSugarNeeded)

//

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below

for(let i = 0; i < rapperArray.length; i++){
    console.log(rapperArray[i])
    if(rapperArray[i] === 'Notorious B.I.G.'){
        break
    }

}

console.log("And if you don't know, now you know.")


/*
*
* Loops perform repetitive actions so we don’t have to code that process manually every time.
How to write for loops with an iterator variable that increments or decrements
How to use a for loop to iterate through an array
A nested for loop is a loop inside another loop
while loops allow for different types of stopping conditions
Stopping conditions are crucial for avoiding infinite loops.
do...while loops run code at least once— only checking the stopping condition after the first execution
The break keyword allows programs to leave a loop during the execution of its block
* */

