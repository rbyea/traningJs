

const peopleWithVisa = [
    {
        firstName: 'Stasia',
        lastName: 'Ward',
        criminalRecord: true,
        passportExpiration: '19.06.2040',
    },
    {
        firstName: 'Elliot',
        lastName: 'Baker',
        criminalRecord: false,
        passportExpiration: '04.06.2041',
    },
    {
        firstName: 'Leighann',
        lastName: 'Scott',
        criminalRecord: true,
        passportExpiration: '31.07.2039',
    },
    {
        firstName: 'Nick',
        lastName: 'Pop',
        criminalRecord: false,
        passportExpiration: '31.12.2010',
    },
];

const allowVisa = (people) => {
    let dateTime = new Date().getTime()
    let arr = []

    for(let i = 0; i<people.length; i++) {
        arr.push(people[i].passportExpiration.split('.'))
    }

    let newArr = arr.filter((el) => {
        if(dateTime < new Date(`${el[1]}.${el[0]}.${el[2]}`)) {
            return el
        }
    })

    let filterObj = people.filter((el) => {
        for(let i = 0; i<newArr.length; i++) {
            if(newArr[i].join('.') === el.passportExpiration && el.criminalRecord === false) {
                return el
            }
        }
    })

    return filterObj
}

const result = allowVisa(peopleWithVisa);
console.log('result', result);