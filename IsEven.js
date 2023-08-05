function isEven(number){
    const remainder = number%2;
    // return remainder;
    console.log(remainder);
if (remainder === 0){
    // console.log('number is even');
    return true;

}
else{
    // console.log('number is odd');
    return false;
}
}
const myNumberIsEven  = isEven(456);
console.log( 'even number',  myNumberIsEven);
const yNumberIsEven = isEven(495);
console.log('number is even', yNumberIsEven);
