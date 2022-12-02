class Developer {
    constructor(fullName, age, position) {
        this.fullName = fullName
        this.age = age
        this.position = position
    }
    code() {}
    learnNewTechnologies(technologies) {
        this.technologies = [...technologies]
        console.log(this)
    }
}

class JuniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age);
        this.position = 'Junior'
    }
    code() {
        console.log(`${this.position} разработчик пишет код...`)
    }
}

class MiddleDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age);
        this.position = 'Middle'
    }
    code() {
        console.log(`${this.position} разработчик пишет код...`)
    }
}

class SeniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age);
        this.position = 'Senior'
    }
    code() {
        console.log(`${this.position} разработчик пишет код...`)
    }
}

const juniorDeveloper = new JuniorDeveloper('Анастасия', 20);
const middleDeveloper = new MiddleDeveloper('Игорь', 25);
const seniorDeveloper = new SeniorDeveloper('Максим', 30);

juniorDeveloper.code(); // Junior разработчик пишет код...
middleDeveloper.code(); // Middle разработчик пишет код...
seniorDeveloper.code(); // Senior разработчик пишет код...

juniorDeveloper.learnNewTechnologies(['HTML', 'CSS', 'JavaScript'])
middleDeveloper.learnNewTechnologies(['HTML', 'CSS', 'JavaScript', 'React'])
seniorDeveloper.learnNewTechnologies([ 'HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'])

console.log(juniorDeveloper.fullName, juniorDeveloper.age, juniorDeveloper.position, juniorDeveloper.technologies);
// 'Анастасия' 20 'Junior' ['HTML', 'CSS', 'JavaScript']

console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position, middleDeveloper.technologies);
// 'Игорь' 25 'Middle' ['HTML', 'CSS', 'JavaScript', 'React']

console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position, seniorDeveloper.technologies);
// 'Максим' 30 'Senior' ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']
