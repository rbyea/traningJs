const coffees = ['Latte', 'Cappuccino', 'Americano'];
let coffeeName = prompt('Поиск кофе по названию:')
    .trim()
    .toLowerCase();
let newArr = []
const coffeesToLowerCase = coffees.map((el, index, array) => {
    return newArr.push(el.toLowerCase())
})
let coffeesSearch = newArr.find(coffee => {
    return coffee === coffeeName
});
let coffeesSearchIndex = newArr.findIndex(index => {
    return index === coffeesSearch
})

coffeesSearch
    ? alert(`Держите ваш любимый кофе ${coffeesSearch}. Он ${coffeesSearchIndex + 1}-й по популярности в нашей кофейне`)
    : alert(`К сожалению, такого вида кофе нет в наличии`)
