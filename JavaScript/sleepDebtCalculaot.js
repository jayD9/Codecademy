function getSleepHours(day){
    day = day.toLowerCase();
    switch(day){
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 7;
            break;
        case 'wednesday':
            return 6;
            break;
        case 'thursday':
            return 5;
            break;
        case 'friday':
            return 6;
            break;
        case 'saturday':
            return 7;
            break;
        case 'sunday':
            return 8;
            break;
    }
}

function getActualSleepHours(){
    return getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');
}

function getIdealSleepHours(){
    const idealHour = 7;
    return idealHour * 7;
}

function calculateSleepDebt(){
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if(actualSleepHours === idealSleepHours){
        console.log("Perfect sleep hours");
    }else if(actualSleepHours > idealSleepHours){
        console.log("More sleep hours than needed");
    } else if(actualSleepHours < idealSleepHours){
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
}

calculateSleepDebt();
