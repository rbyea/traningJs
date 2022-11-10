let question1 = 4;
let question2 = 4;
let question3 = 1;
let question4 = 12;
let question5 = 6;

let correctAnswers = 0;
let incorrectAnswers = 0;


let question1Prompt = prompt('Сколько будет 2 + 2?');
let question1PromptNumber = Number(question1Prompt);
if(question1PromptNumber === question1) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный')
    incorrectAnswers++;
}

let question2Prompt = prompt('Сколько будет 2 * 2?');
let question2PromptNumber = Number(question2Prompt);
if(question2PromptNumber === question2) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный')
    incorrectAnswers++;
}

let question3Prompt = prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?');
let question3PromptNumber = Number(question3Prompt);
if(question3PromptNumber === question3) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный')
    incorrectAnswers++;
}

let question4Prompt = prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?');
let question4PromptNumber = Number(question4Prompt);
if(question4PromptNumber === question4) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный')
    incorrectAnswers++;
}

let question5Prompt = prompt('Сколько будет 2 + 2 * 2?');
let question5PromptNumber = Number(question5Prompt);
if(question5PromptNumber === question5) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный')
    incorrectAnswers++;
}

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`)


