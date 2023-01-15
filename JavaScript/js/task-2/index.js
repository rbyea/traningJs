console.log(isEqualSymbols('адрес', 'среда'))// true
console.log(isEqualSymbols('ноутбук', 'программист'))// false

function isEqualSymbols(str1, str2) {
    if(str1.length !== str2.length) {
        return false
    }

    if(str1.split('').sort().join('') === str2.split('').sort().join('')) {
        return true
    }

    return false
}