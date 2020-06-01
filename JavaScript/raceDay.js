let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);
var earlyRegister = false;
let runnersAge = 24;

if(runnersAge > 18 && earlyRegister){
    raceNumber += 1000;
}

if(runnersAge > 18 && earlyRegister){
    console.log('You will race at 9:30 am');
} else if (runnersAge > 18 && !earlyRegister){
    console.log('You will race at 11:00 am');
} else if (runnersAge < 18){
    console.log('You will race at 12:30 pm');
} else {
    console.log('Ask at registration desk');
}
