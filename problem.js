// function sumOfOdd(arr){
//     let sum = 0;
//     for(let item of arr){
//         if(item%2 === 1){
//             sum = sum +item;
//         }
//     }
//   return sum;   
// }
// const numbers = [10,20,30,50,70,90,100];
// const total = sumOfOdd(numbers);
// console.log(total);
// const number = 5;
// let result = 1;
// for(let i = number; i >=1; i--){
//     result = result *i ;

// }
// console.log(result);
// function factorial(number){
//     if(number == 0 || number ==1){
//         return 1;
//     }
//     let result = 1;
// for(let i = number; i >=1; i--){
//     result = result *i ;

// }
// return result;
// }
// console.log(factorial(10));
function factorial(number){

    let i = number ;
    let result = 1;
    while(i >= 1){
        result = result*i;
        i--;
    }
    return result;
}
const output = factorial(3);
console.log(output);