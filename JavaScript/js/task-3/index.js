const unique = (arr) => {
    let mySet = new Set()
    arr.forEach(el => {
        mySet.add(el)
    })
    console.log([...mySet])
}

unique([1, 1, 2, 2, 4, 2, 3, 7, 3])


const unique1 = (arr) => {
    const res = {}

    arr.forEach((item) => {
        res[item] = '';
    });

    return Object.keys(res).map(item => Number(item));
}

console.log(unique1([1, 1, 2, 2, 4, 2, 3, 7, 3]))