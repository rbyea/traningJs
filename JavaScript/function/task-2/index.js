const getSumOfNumbers = (number = NaN, type = 'odd') => {
    let sum = 0;
    for(let i = 0; i <= number; i++) {
        if(type === 'odd') {
            if( i % 2 !== 0) {
                sum += i
            }
        } else if(type === 'even') {
            if( i % 2 === 0) {
                sum += i
            }
        } else if(type === '') {
             sum += i
        }
    }
    return sum
}

console.log(getSumOfNumbers(10, 'odd'))
console.log(getSumOfNumbers(10, 'even'))
console.log(getSumOfNumbers(10, ''))

