const password = prompt('Введите пароль')
    .trim();
const hasCapital = (e) => !(e === e.toLowerCase());

let count = 0;

password.length >= 3 && password.length <= 30 ? count++ : console.log('Длина не норм')

hasCapital(password) ? count++ : console.log("Нет заглавной буквы")
password.replace( /\D/g, '') ? count++ : console.log('Нет цифр')

count === 3 ? alert('Пароль валидный. Добро пожаловать в аккаунт!') : alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.')