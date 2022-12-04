const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,
    checkChancesToWin(defenderObject) {
        let deferObj = Object.keys(defenderObject)
        let arr = []
        let chance = 0;

        deferObj.filter((el) => {
            if(this[el] > defenderObject[el]) {
               chance++
            }
        })

        arr.push(chance, deferObj.length)

        return arr
    },
    improveArmy() {
      this.archer += 5
      this.footSoldier += 5
      this.cavalry += 5
      this.artillery += 5
    },
    attack(defenderObject) {
        let percent = this.checkChancesToWin(defenderObject)[0] / this.checkChancesToWin(defenderObject)[1] * 100
        if(percent < 70) {
            this.improveArmy()
            console.log(`Наши шансы равны ${this.checkChancesToWin(defenderObject)[0]}/${this.checkChancesToWin(defenderObject)[1]}. Необходимо укрепление!`)
        } else {
            console.log(`Мы усилились! Мы несомненно победим! Наши шансы высоки!`)
        }
    }
}

const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10,
}

attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление!
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление!
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!
