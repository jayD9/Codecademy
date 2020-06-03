function getReminder(){
    console.log('Water the plants');
}

function greetInSpanish(){
    console.log('Buenas Tardes.');
}


function sayThanks(){
    console.log('Thank you for your purchase! We appreciate your business.');
}

sayThanks();
sayThanks();
sayThanks();


function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}

sayThanks('Cole');




// assigning default values to the parameter of the functions

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}


//---------------------------------------------------------------------
// return

function rectangleArea(width, height) {
    if (width < 0 || height < 0) {
        return 'You need positive integers to calculate area!';
    }
    return width * height;
}

function monitorCount(rows, columns){
    return rows * columns;
}

const numOfMonitors = monitorCount(5,4);

console.log(numOfMonitors);

//---------------------------------------------------------------------

// call function from another function
function monitorCount(rows, columns) {
    return rows * columns;
}

function costOfMonitors(rows, columns){
    return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5,4);
console.log(totalCost);

//---------------------------------------------------------------------

// Function Expression

const plantNeedsWater = function(day){
    if(day === 'Wednesday'){
        return true;
    }else{
        return false;
    }
};

console.log(plantNeedsWater('Tuesday')); // false
console.log(plantNeedsWater); // [Function: plantNeedsWater]
//---------------------------------------------------------------------

// Arrow function (instead of function we can write =>)

const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};
//---------------------------------------------------------------------

// Concise function only for single parameter
const squareNum = (num) => {
    return num * num;
};

//can also written as
const squareNum = num => num * num;

/*The parentheses around num have been removed, since it has a single parameter.
The curly braces { } have been removed since the function consists of a single-line block.
The return keyword has been removed since the function consists of a single-line block.*/

const plantNeedsWater = day => day === 'Wednesday' ? true : false;
