let myName = 'Егор';
let programmingLanguage = 'JavaScript';
let courseCreatorName = 'Владилена Минина';
let reasonText = 'верстальщик ;D';
let numberOfMonth = 'на практике приходилось костылить)';

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я не изучал ${programmingLanguage} ${numberOfMonth}. Я уверен, что пройду данный курс до конца!`;
let myInfoResetTxtJs = myInfoText.replaceAll('JavaScript', 'javascript');
let myInfoResetTxtCourse = myInfoResetTxtJs.replaceAll('курс', 'КУРС');

console.log(myInfoResetTxtCourse);
console.log(myInfoResetTxtCourse.length);
console.log(myInfoResetTxtCourse[0]);
console.log(myInfoResetTxtCourse[myInfoResetTxtCourse.length - 1]);