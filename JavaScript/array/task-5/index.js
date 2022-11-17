let clientsEstimations = []

const askClientToGiveEstimation = () => {
    let estimation = +prompt(`Как вы оцениваете нашу кофейню от 1 до 10?`)
    if(estimation >= 1 && estimation <= 10) {
        clientsEstimations.push(estimation)
    }
}

for(let i = 0; i<5; i++) {
    askClientToGiveEstimation()
}

let goodEstimations = clientsEstimations.filter((index)=> {
    return index > 5
})
let notGoodEstimations = clientsEstimations.filter((index)=> {
    return index <= 5
})

alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`);