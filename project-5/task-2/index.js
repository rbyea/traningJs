let myName = 'Егор';
let programmingLanguage = 'JavaScript';
let courseCreatorName = 'Владилена Минина';
let reasonText = 'верстальщик ;D';
let numberOfMonth = 'на практике приходилось костылить)';

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я не изучал ${programmingLanguage} ${numberOfMonth}. Я уверен, что пройду данный курс до конца!`;

let replaceTextJs = myInfoText.replaceAll('JavaScript', 'javascript');
// myInfoText.replaceAll('курс', 'КУРсс');

console.log(myInfoText.indexOf('JavaScript'));