class Dictionary {
    constructor(name) {
        this.name = name
        this.words = {}
    }
    add(word, description) {
        let keys = Object.keys(this.words)
        if(keys.length === 0) {
            this.words[word] = {word: word, description: description}
        } else {
            for (let i = 0; i<keys.length; i++) {
                keys[i] !== word
                    ? this.words[word] = {word: word, description: description}
                    : console.log(false)
            }
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
        if(keys.length === 0) {
            this.words[word] = {word: word, description: description, isDifficult: true}
        } else {
            for (let i = 0; i<keys.length; i++) {
                keys[i] !== word
                    ? this.words[word] = {word: word, description: description,isDifficult: true}
                    : console.log(false)
            }
        }
    }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');

hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');

hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

hardWordsDictionary.remove('неологизм');

hardWordsDictionary.showAllWords();