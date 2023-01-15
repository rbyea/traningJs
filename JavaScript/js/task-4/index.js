let newStr = ''

const isPalindrome = (str) => {
    console.log(str)
    for(let i = str.length-1; i>=0; i--) {
        newStr += str[i]
    }

    newStr === str ? console.log(true) : console.log(false)
    newStr = '';
}

isPalindrome('racecar') // true
isPalindrome('programmer') // false
isPalindrome('топот') // true
isPalindrome('дед') // true
isPalindrome('доход') // true
isPalindrome('калаш') // false


