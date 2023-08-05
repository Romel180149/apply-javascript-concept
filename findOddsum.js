// function getSumOfAnArray(numbers){
//     let sum = 0;
//     for(let i=0;i < numbers.length; i++){
//         const index = i;
//         const element = index [i];
//         sum = sum + element;
//         console.log(index,element,sum);
//     }
//     return sum;
//     // console.log(numbers);
// }
// const myNumbers = [10, 20, 30, 40, 50, 60, 70, 80];
// getSumOfAnArray(myNumbers);
// // console.log(getSumOfAnArray);
// function getSumOfAnArray(numbers){
//     let sum = 0;
//     for(let i = 0; i< numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//         console.log(index,element,sum);
//     }
// return sum; 
// }
function getOddNumberSumOfAnArray(numbers){
    let sum = 0;
    const oddNumbers = [];
    for(let i = 0; i< numbers.length; i++){
        const index = i;
        const element= numbers[index];
    
        if(element%2  !== 0){
            console.log(index,element,sum);
            oddNumbers.push(element);
            
        }
    }
    return oddNumbers ;
}
const myNumbers = [12,45,65,78,32,91];
// getSumOfAnArray(myNumbers);
const oddNumbers = getOddNumberSumOfAnArray(myNumbers);
const oddNumbersSum = getOddNumberSumOfAnArray(oddNumbers);
console.log('odd number sum',oddNumbersSum);
console.log(oddNumbers);