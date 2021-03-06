var canIVote = age => (age >= 18)? true : false;

// Uncomment the line below when you're ready to try out your function
console.log(canIVote(19)) // Should print true

// We encourage you to add more function calls of your own to test your code!



//-------------------------------------------------------

// Write your function here:

function agreeOrDisagree(str1, str2){
    if( str1 === str2){
        return 'You agree!';
    }else{
        return 'You disagree!';
    }
}




// Uncomment the line below when you're ready to try out your function
console.log(agreeOrDisagree("yep", "yep"))
// Should print 'You agree!'

// We encourage you to add more function call of your own to test your code!

//-------------------------------------------------------


// Write your function here:

function lifePhase(age){
    if(age >= 0 && age <= 3){
        return 'baby';
    }else if(age >= 4 && age <= 12){
        return 'child';
    }else if(age >= 13 && age <= 19){
        return 'teen';
    }else if(age >= 20 && age <= 64){
        return 'adult';
    }else if(age >= 65 && age <= 140){
        return 'senior citizen';
    }else{
        return 'This is not a valid age';
    }
}

// Uncomment the line below when you're ready to try out your function
console.log(lifePhase(5)) //should print 'child'

// We encourage you to add more function calls of your own to test your code!


//-------------------------------------------------------

// Write your function here:
function finalGrade(num1, num2, num3){
    if ((num1 < 0 || num1 > 100) || (num2 < 0 || num2 > 100) || (num3 < 0 || num3 > 100)){
        return 'You have entered an invalid grade.';
    }
    var avgNum = (num1 + num2 + num3)/3;
    if(avgNum >= 0 && avgNum <= 59){
        return 'F';
    }else if(avgNum >= 60 && avgNum <= 69){
        return 'D';
    }else if(avgNum >= 70 && avgNum <= 79){
        return 'C';
    }else if(avgNum >= 80 && avgNum <= 89){
        return 'B';
    }else if(avgNum >= 90 && avgNum <= 100){
        return 'A';
    }
}
// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 92, 95)) // Should print 'A'

// We encourage you to add more function calls of your own to test your code!

//-------------------------------------------------------

// Write your function here:
function reportingForDuty(rank, lastName){
    return `${rank} ${lastName} reporting for duty!`
}


// Uncomment the line below when you're ready to try out your function
console.log(reportingForDuty('Private', 'Fido')) // Should return 'Private Fido reporting for duty!'

// We encourage you to add more function calls of your own to test your code!

//-------------------------------------------------------

const rollTheDice = () => {
    // Math.random() gives us a random number from 0 up to, but not including, 1
    // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
    // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
    let die1 = Math.floor(Math.random()) * 6 + 1
    let die2 = Math.floor(Math.random()) * 6 + 1
    return die1 + die2
}


//-------------------------------------------------------

// Write your function here:
function calculateWeight(earthWeight, planet){
    switch(planet){
        case 'Mercury':
            return earthWeight * 0.378;
            break;
        case 'Venus':
            return earthWeight * 0.907;
            break;
        case 'Mars':
            return earthWeight * 0.377;
            break;
        case 'Jupiter':
            return earthWeight * 2.36;
            break;
        case 'Saturn':
            return earthWeight * 0.916;
            break;
        default:
            return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
            break;
    }
}

// Uncomment the line below when you're ready to try out your function
console.log(calculateWeight(100, 'Jupiter')) // Should print 236

// We encourage you to add more function calls of your own to test your code!

//-------------------------------------------------------

// Write your function here:
function truthyOrFalsy(variable){
    if(variable){
        return true;
    }else{
        return false;
    }
}


// Uncomment the line below when you're ready to try out your function
console.log(truthyOrFalsy(0)) // Should print false

// We encourage you to add more function calls of your own to test your code!

//-------------------------------------------------------

// Write your function here:
function numImaginaryFriends(num1){
    return Math.round(num1 * 33 / 100);
}

// Uncomment the line below when you're ready to try out your function
console.log(numImaginaryFriends(18)) // Should print 6

// We encourage you to add more function calls of your own to test your code!


//-------------------------------------------------------

// Write your function here:
function sillySentence(str1, str2, str3){
    return `I am so ${str1} because I ${str2} coding! Time to write some more awesome ${str3}!`
}

// Uncomment the line below when you're ready to try out your function
// console.log(sillySentence('excited', 'love', 'functions'))

// We encourage you to add more function calls of your own to test your code!


//-------------------------------------------------------

// Write your function here:
function howOld(age, year){
    const currentAge = age;
    const theCurrentYear = 2020;
    const yearDiff = year - theCurrentYear;
    const newAge = currentAge + yearDiff;

    if(newAge >= currentAge){
        return `You will be ${newAge} in the year ${year}`
    }else if(newAge >= 0){
        return `You were ${newAge} in the year ${year}`
    }else {
        var x = theCurrentYear - year - age;
        return `The year ${year} was ${x} years before you were born`
    }

}

console.log(howOld(26,1984));
// Once your function is written, write function calls to test your code!


//-------------------------------------------------------

const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    }else if (percentSharedDNA > 34 && percentSharedDNA < 100) {
        return 'You are likely parent and child or full siblings.'
    }else if (percentSharedDNA > 13 && percentSharedDNA < 35) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    }else if (percentSharedDNA > 5 && percentSharedDNA < 14) {
        return 'You are likely 1st cousins.'
    }else if (percentSharedDNA > 2 && percentSharedDNA < 6) {
        return 'You are likely 2nd cousins.'
    }else if (percentSharedDNA > 0 && percentSharedDNA < 3) {
        return 'You are likely 3rd cousins'
    }else {
        return 'You are likely not related.'
    }

}

console.log(whatRelation(34))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3))
// Should print 'You are likely 2nd cousins.'


//-------------------------------------------------------

// Write your function here:
function tipCalculator(quality, total){
    switch(quality){
        case 'bad':
            return total/ 100 * 5;
            break;
        case 'ok':
            return total/ 100 * 15;
            break;
        case 'good':
            return total/ 100 * 20;
            break;
        case 'excellent':
            return total/ 100 * 30;
            break;
        default:
            return total/ 100 * 18;
            break;
    }
}

// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('good', 100)) //should return 20

// We encourage you to add more function calls of your own to test your code!


//-------------------------------------------------------

// Write your function here:
function toEmoticon(str1){
    switch(str1){
        case 'shrug':
            return '|_{"}_|';
            break;
        case 'smiley face':
            return ':)';
            break;
        case 'frowny face':
            return ':(';
            break;
        case 'winky face':
            return ';)';
            break;
        case 'heart':
            return '<3';
            break;
        default:
            return '|_(* ~ *)_|';
            break;

    }
}


// Uncomment the line below when you're ready to try out your function
console.log(toEmoticon("whatever"))
// Should print  '|_(* ~ *)_|'

// We encourage you to add more function calls of your own to test your code!

//-------------------------------------------------------
