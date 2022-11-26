const hero = {
    name: 'Batman',
    health: 100,
};
const enemy = {
    name: 'Joker',
    health: 100,
};

const startGame = (heroPlayer, enemyPlayer, heatEnemy, heatHero) => {
    let randomNumber
    let statusGame = 0;
    const getRandomNumberInRange = (min, max) => {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber
    }

    do {
        getRandomNumberInRange(0,1)
        randomNumber === 0 ? heatEnemy(enemyPlayer) : heatHero(heroPlayer)

        heroPlayer.health === 0 ? statusGame = 1 :
            enemyPlayer.health === 0 ? statusGame = 2 :
                enemyPlayer.health === 0 ? statusGame = 2 :
                    statusGame = 0

    } while (heroPlayer.health > 0 && enemyPlayer.health > 0)

    statusGame === 2 ? console.log(`${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`) :
        statusGame === 1 ? console.log(`${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`) :
            console.log(`Бойцы находятся в битве!`)
}

const heatEnemy = (e) => {
     return e.health -= 10
}
const heatHero = (e) => {
    return e.health -= 10
}

startGame(hero, enemy, heatEnemy, heatHero);