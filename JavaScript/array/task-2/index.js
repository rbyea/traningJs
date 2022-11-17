const getSumOfSequence = number => {
    let num = [];
    let sum = 0;

    for(let i = 1; i<=number; i++) {
        num.push(i)
    }
    sum = num[0] + num[num.length-1]
    return sum
}

let result = getSumOfSequence(5)

console.log(result)