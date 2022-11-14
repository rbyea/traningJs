let clientName = prompt('Введите имя клиента')
    .trim();
let clientSpentForAllTime = +prompt('Сколько клиент потратил за все время?')
    .trim();
let clientSpentToday = +prompt('Сколько клиент потратил сегодня?')
    .trim();
let discount;
let clientPrice;
let clientNewAllPrice;

const calcDiscount = () => {
    if(clientSpentForAllTime < 100) {
        discount = 0;
        clientPrice = clientSpentToday;
    }else if(clientSpentForAllTime >= 100 && clientSpentForAllTime <= 300) {
        discount = 10
        clientPrice = (clientSpentToday - ((clientSpentToday*discount)/100))
    } else if(clientSpentForAllTime >= 301 && clientSpentForAllTime <= 500) {
        discount = 20
        clientPrice = (clientSpentToday - ((clientSpentToday*discount)/100))
    } else if(clientSpentForAllTime >= 501) {
        discount = 30
        clientPrice = (clientSpentToday - ((clientSpentToday*discount)/100))
    }
    alert(`Вам предоставляется скидка в ${discount}%!`)
    clientNewAllPrice = clientSpentForAllTime + clientPrice
    alert(`Спасибо, ${clientName}! К оплате ${clientPrice}$. За все время в нашем ресторане вы потратили ${clientNewAllPrice}$.`)
}

isNaN(clientSpentForAllTime) || isNaN(clientSpentToday) ? alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузи страницу, чтобы повторить попытку.') : calcDiscount();





