class Dictionary {
    constructor(name) {
        this.name = name
        this.words = {}
    }
    add(word, description) {
        let keys = Object.keys(this.words)
        let obj = {word: word, description: description}

        if(keys.length === 0) {
            this.words[word] = obj
        } else {
            keys.forEach(el => {
                el !== word
                    ? this.words[word] = obj
                    : console.log(false)
            })
        }
    }
    remove(name) {
        delete this.words[name]
        console.log(this)
    }
    get(word) {
        console.log(this.words[word])
    }
    showAllWords() {
        let keys = Object.keys(this.words)
        keys.forEach((el) => {
            console.log(`${this.words[el].word} - ${this.words[el].description}`)
        })
    }
}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
dictionary.remove('Веб-разработчик');
dictionary.get('JavaScript') // по поводу get, если честно чет не допонял , что ваще нужно сделать
dictionary.showAllWords();

class HardWordsDictionary  extends Dictionary {
    constructor(name) {
        super(name);
    }
    add(word, description) {
        let keys = Object.keys(this.words)
        let obj = {word: word, description: description, isDifficult: true}
        if(keys.length === 0) {
            this.words[word] = obj
        } else {
            keys.forEach(el => {
                el !== word
                    ? this.words[word] = obj
                    : console.log(false)
            })
        }
    }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');

hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');

hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

hardWordsDictionary.remove('неологизм');

hardWordsDictionary.showAllWords();

console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.mainName = 'Новый Словарь';
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова
// дилетант и квант