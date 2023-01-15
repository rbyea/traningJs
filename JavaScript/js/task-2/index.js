// isEqualSymbols('адрес', 'среда')// true
isEqualSymbols('ноутбук', 'программист')// false

function isEqualSymbols(str1, str2) {
    let letters1 = [];
    let letters2 = [];

    for (let k = 0; k < str1.length;k++) {
        letters1.push(str1[k])
    }
    for (let j = 0; j < str2.length;j++) {
        letters2.push(str2[j])
    }

    letters1.forEach((el,index) => {
        letters2.forEach(letter => {
            if(el.includes(letter)) {
                console.log('letter: ', el, true)
            } else {
                console.log('letter: ', el, false)
            }
        })
    })

}