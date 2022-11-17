const matrix = [ // find hidden cats - ^^ count
    ['^^'], ['(^^)'], ['(^^)'], ['(^^)'], ['^^'],
    ['(^^)'], ['(^^)'], ['^^'], ['(^^)'], ['(^^)'],
    ['(^^)'], ['(^^)'], ['(^^)'], ['(^^)'], ['^^']
]
let newCats = []
matrix.forEach((el) => {
    newCats.push(el[0])
})
let catsLength = newCats.filter((cats) => {
    return cats === '^^'
})
console.log(catsLength.length)

