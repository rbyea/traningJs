const array = [1016, 1937]
let newArr = []
let moreNumber = 0

function isInteger(num) {
    return (num ^ 0) === num;
}

for (let i = array[0]; i<=array[1]; i++) {
    if(isInteger(i/3) && isInteger(i/7)) {
        if(isInteger(i/5) === false && isInteger(i/2) === false) {
            newArr.push(i)
        }
    }
}

newArr.forEach((el) => {
    if(el > moreNumber) {
        moreNumber = el
    }
})

console.log(moreNumber) // 1911