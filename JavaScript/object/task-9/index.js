const todaysWinner = {
    prize: '10 000$',
}

const winnerApplicants = {
    '001': {
        name: 'Максим',
        age: 25,
    },
    '201': {
        name: 'Светлана',
        age: 20,
    },
    '304': {
        name: 'Екатерина',
        age: 35,
    },
}

const getWinner = (applicants, winnerObject ) => {
    let keys = Object.keys(applicants)
    function getRandomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    let keysNumber = getRandomNumberInRange(0, keys.length)
    let newObj = Object.assign(winnerObject, applicants[keys[keysNumber]])
    return newObj
}

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner);