let userText = prompt('Введите текст');
let wordFromText = prompt('Введите слово из текста');
let userTextTrim = userText.trim();
let indexOfWord = userTextTrim.indexOf(wordFromText);
let stringSlice = userTextTrim.slice(0, indexOfWord);

alert(`Результат: ${stringSlice}`);