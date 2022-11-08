let ageOfPerson1 = 18;
let ageOfPerson2 = '20';

let nameOfAnimal1 = null;
let nameOfAnimal2 = 'Charlie';

const bestProgrammingLanguage1 = 'JavaScript';
const bestProgrammingLanguage2 = 'Java';

let initialValue1;
let initialValue2 = 0;

let isJavaScriptProgrammer1 = true;
let isJavaScriptProgrammer2 = false;

let helloText1 = 'Hello!';
let helloText2 = 'Привет!';


ageOfPerson2 = ageOfPerson1;
nameOfAnimal2 = nameOfAnimal1;
initialValue2 = initialValue1;
isJavaScriptProgrammer2 = isJavaScriptProgrammer1;

console.log(ageOfPerson2, typeof ageOfPerson2);
console.log(nameOfAnimal2, typeof nameOfAnimal2);
console.log('Перменную с const переопределить нельзя', bestProgrammingLanguage1, typeof bestProgrammingLanguage1);
console.log('Перменную с const переопределить нельзя', bestProgrammingLanguage2, typeof bestProgrammingLanguage2);
console.log(initialValue2, typeof initialValue2)
console.log('var является устаревшим', isJavaScriptProgrammer2, typeof isJavaScriptProgrammer2)
