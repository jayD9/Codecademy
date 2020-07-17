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



