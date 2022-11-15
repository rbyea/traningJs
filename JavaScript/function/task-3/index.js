const getDivisorsCount = (number = NaN) => {
    let arr = []
    if(number < 0 || Number.isInteger(number)) {
        for(let i = 0; i <= number; i++) {
            Number.isInteger(number / i) ? arr.push(i) : i
        }
    } else {
        alert(`${number} должен быть целым числом и больше нуля!`)
    }
    return arr
}

console.log(getDivisorsCount(4)); // Вернет 3 (делители - 1, 2, 4)
console.log(getDivisorsCount(5)); // Вернет 2 (делители - 1, 5)
console.log(getDivisorsCount(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
console.log(getDivisorsCount(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)