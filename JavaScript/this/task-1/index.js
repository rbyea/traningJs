const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel() {
        let levelObj = this.level
        let stackObj = this.stack

        student.level += 1

        if(levelObj === 2) {
            stackObj.push('CSS')
        } else if(levelObj === 3) {
            stackObj.push('JavaScript')
        } else if(levelObj === 4) {
            stackObj.push('React')
        } else if(levelObj === 5) {
            stackObj.push('NodeJs')
        } else if (levelObj > 5) {
            console.log(`Студент выучил все технологии!`)
        }

        console.log(this)
        return this
    }
}

student
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
