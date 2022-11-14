let clientName = 'Игорь';
let clientSpentForAllTime = 110;
let clientSpentToday = 25;
let discount;

if(clientSpentForAllTime >= 100 && clientSpentForAllTime <= 300) {
    discount = 10
    clientSpentToday = (25 - ((25*discount)/100))
} else if(clientSpentForAllTime >= 301 && clientSpentForAllTime <= 500) {
    discount = 20
    clientSpentToday = (25 - ((25*discount)/100))
} else if(clientSpentForAllTime >= 501) {
    discount = 30
    clientSpentToday = (25 - ((25*discount)/100))
}

alert(`Вам предоставляется скидка в ${discount}%!`)

clientSpentForAllTime = clientSpentToday + 110;

alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)
