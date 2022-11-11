let objQuestion =  {
    'Сколько будет 2 + 2?': '4',
    'Сколько будет 2 * 2?': '4',
    'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?': '1',
    'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?': '12',
    'Сколько будет 2 + 2 * 2?': '6',
}
let arr = [];

let correctAnswers = 0;
let incorrectAnswers = 0;
const startQuestions = () => {
    for (const arrKey in objQuestion) {
        for(let j=0; j < 1; j++) {
           arr.push(prompt(arrKey))
        }
    }
}
const comparisonArr = () => {
    for (const arrKey in objQuestion) {
        for(let k = 1; k <= 1; k++) {
            arr.includes(objQuestion[arrKey]) ? correctAnswers++ : incorrectAnswers++
        }
    }
}

startQuestions();
comparisonArr();

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);