
//Before we talk more about scope, we first need to talk about blocks.

const city = 'New York City'
function logCitySkyline(){
    let skyscraper = 'Empire State Building'
    return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline())

//You’ll notice that the logCitySkyline() function is able to access both variables without any problems

//

let satellite = 'The Moon'
let galaxy = 'The Milky Way'
let stars = 'North Star'

function callMyNightSky(){
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky())
//
//
function logVisibleLightWaves(){
    const lightWaves = 'Moonlight'
    console.log(lightWaves)
}

logVisibleLightWaves()
console.log(lightWaves) // refrence error

//
//

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
    stars = 'Sirius'
    return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

//You’ll notice that the global variable stars was reassigned to 'Sirius'.

const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    console.log()
    if(region==='The Arctic'){
        let lightWaves = 'Northern Lights'
        console.log(lightWaves)
    }
    console.log(lightWaves);
};

logVisibleLightWaves();

//

