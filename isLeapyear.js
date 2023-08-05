function isLeapYear(year){

    const reaminder = year%4;
    if(reaminder===0){
        return true;
    }
    else{
        return false;
    }

}
const isMyleapYear = isLeapYear(1940);
console.log('leap year' ,isMyleapYear);
const alsoIsMyleapyear = isLeapYear(1933);
console.log( 'leap year' ,   alsoIsMyleapyear);