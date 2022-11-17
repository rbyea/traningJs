const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

const giveParcel = () => {
    for(let i = 0; i<3; i++) {
        alert(`${peopleWaiting.shift()} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`)
    }
}

const leaveQueueWithoutParcel = () => {
    let peopleLength = peopleWaiting.length
    for(let k = 0; k<peopleLength; k++) {
        alert(`${peopleWaiting.shift()} не получил(а) посылку и ушел(ла) из очереди`)
    }
}
giveParcel()
leaveQueueWithoutParcel()