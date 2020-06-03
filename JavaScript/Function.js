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