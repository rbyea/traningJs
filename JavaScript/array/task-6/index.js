const numbers = [10, 4, 100, -5, 54, 2];

let num1 = 0;
for(let i = 0; i<numbers.length; i++) {
    num1 += Math.pow(numbers[i], 3);
}
console.log('for', num1);

let num2 = 0;
for (const number of numbers) {
    num2 += Math.pow(number, 3);
}
console.log('for of', num2)

let num3 = 0;
numbers.forEach((el,index, arr) => {
    num3 += Math.pow(el, 3);
})
console.log('forEach', num3);

let num4 = 0;

newArrNumbers = numbers.reduce((acc, el, index, arr) => {
    return acc + Math.pow(el, 3);
}, 0)

console.log('reduce', newArrNumbers)