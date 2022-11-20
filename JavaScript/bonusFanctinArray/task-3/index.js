const goals = [8, 1, 1, 3, 2, -1, 5];

const scoringMatch = () => {
    let max = 0
    let index = 0
    for(let i = 0; i<=goals.length; i++) {
        if(goals[i] > max) {
            max = goals[i]
            index = i + 1
        }
    }
    alert(`Самый результативный матч был под номером ${index}. В нем было забито ${max} гол(ов).`)
}

const unsuccessfulGames = () => {
    let min = goals[0];
    let indexMatch = []
    goals.forEach((elm, index) => {
        if(elm < min && elm !== -1) {
            min = elm
        }
    })
    goals.forEach((elm, index) => {
        if(elm === min) {
            indexMatch.push(index + 1)
        }
    })
    let match = goals.filter((el, i) => {
        return el === min
    })

    if(match.length > 1) {
        alert(`Самые не результативные матчи были под номерами ${indexMatch}. В каждом из них было забито по ${min} мячу(а).`)
    }
}

const allGoals = () => {
    let maxGoals = 0;

    goals.forEach((el,i) => {
        if(el > 0) {
            maxGoals += el
        }
    })

    alert(`Общее количество голов за сезон равно ${maxGoals}`)
}

const automaticDefeats = () => {
    let technicalDefeats = goals.some((number) => {
        return number === -1
    })

    technicalDefeats
        ? alert(`Были автоматические поражения: да`)
        : alert(`Были автоматические поражения: нет`)
}

const averageMatch = () => {
    let sum = 0
    goals.forEach((el) => {
        if(el > 0) {
            sum += el
        }
    })
    let average = sum / goals.length

    alert(`Среднее количество голов за матч равно ${+average.toFixed(2)}`)
}

const increaseGoals = () => {
    let inc = [...goals]
    inc.sort()
    alert(`${inc}`)
}

scoringMatch()
unsuccessfulGames()
allGoals()
automaticDefeats()
averageMatch()
increaseGoals()
