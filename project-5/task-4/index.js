let userName = prompt('Как ваз зовут?');
let userAge = prompt('Сколько вам лет?');
let userNameUpper = userName.toUpperCase();
let userNameTrim = userNameUpper.trim();
let userAgeTrim = userAge.trim();
let userAgeNumber = Number(userAgeTrim);

let resultUser = userNameTrim;
let resultAge = userAgeNumber;

alert(`Вас зовут ${resultUser} и вам ${resultAge} лет`);
