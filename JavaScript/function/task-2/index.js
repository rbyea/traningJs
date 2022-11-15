function evenOdd(type, number, callback) {
    callback(type, number);
}

function typeStatus(type, number) {
    let num = 0;
    for(let i = 0; i <= number; i++) {
        if(type === 'odd') {
            if(i % 2 !== 0) {
                num += i
            }
        } else if(type === 'even') {
            if(i % 2 === 0) {
                num += i
            }
        } else if(type === '') {
            num += i
        }
    }
    console.log(num)
}
evenOdd('odd',10, typeStatus)
evenOdd('even',10, typeStatus)
evenOdd('',10, typeStatus)




// const getSumOfNumbers = (number = NaN, type = 'odd') => {
//     let sum = 0;
//     for(let i = 0; i <= number; i++) {
//         if(type === 'odd') {
//             if( i % 2 !== 0) {
//                 sum += i
//             }
//         } else if(type === 'even') {
//             if( i % 2 === 0) {
//                 sum += i
//             }
//         } else if(type === '') {
//              sum += i
//         }
//     }
//     return sum
// }
//
// console.log(getSumOfNumbers(10, 'odd'))
// console.log(getSumOfNumbers(10, 'even'))
// console.log(getSumOfNumbers(10, ''))

