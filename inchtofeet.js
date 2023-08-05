// const myInches= 12;
// const myFeet= myInches/12;
// console.log(myFeet);
// const dataInches= 144;
// const dataFeet= dataInches/12;
// console.log('data feet' ,dataFeet);
// const dadiInches= 120;
// const dadiFeet= dadiInches/12;
// console.log('dadi feet' ,dadiFeet);
function inchesTofeet(inches){
    const feet = inches / 12;
    return feet;
}
const dadaInches = 144 ;
const dadaFeet = inchesTofeet(dadaInches);
console.log(dadaFeet);
const nanaInches = 168;
const nanaFeet = inchesTofeet(nanaInches);
console.log('nana feet',nanaFeet);