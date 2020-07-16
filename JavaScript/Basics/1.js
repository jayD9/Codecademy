
//Before we talk more about scope, we first need to talk about blocks.

const city = 'New York City'
function logCitySkyline(){
    let skyscraper = 'Empire State Building'
    return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline())

//You’ll notice that the logCitySkyline() function is able to access both variables without any problems