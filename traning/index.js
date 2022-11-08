let priceObj = {
    Peta: 100,
    Ann: 100,
    John: 100,
}
let result = 0

for (const k in priceObj) {
    result += priceObj[k]
}