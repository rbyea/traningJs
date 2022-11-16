const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

const giveParcel = () => {
    for(let i = 0; i<3; i++) {
        alert(`${peopleWaiting.shift()} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`)
        // peopleWaiting.shift()
    }
}

const leaveQueueWithoutParcel = () => {
    console.log(peopleWaiting.length)
    for(let k = 0; k<4; k++) {
        alert(`${peopleWaiting.shift()} не получил(а) посылку и ушел(ла) из очереди`)
    }
}
giveParcel()
leaveQueueWithoutParcel()