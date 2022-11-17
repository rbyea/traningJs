const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];
let updatePrice = prices.map(index => {
    return index+0.5
})
updatePrice.forEach((el,index) => {
    alert(`Кофе ${coffees[index]} сейчас стоит ${updatePrice[index]} евро`);
})
