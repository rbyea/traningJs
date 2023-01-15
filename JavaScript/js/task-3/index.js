const unique = (arr) => {
    let mySet = new Set()
    arr.forEach(el => {
        mySet.add(el)
    })
    console.log([...mySet])
}

unique([1, 1, 2, 2, 4, 2, 3, 7, 3])