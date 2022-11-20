const getMathResult = (expression) => {
    for(let i = 0; i<=expression.length; i++) {

        if(+expression[i]) {
            console.log(expression[i])
        } else if (expression[i] === ">" || "<" || "=" || "+" || "-" || "*" || "/") {
            console.log(expression[i])
        } else if (expression[i] === NaN) {
            console.log(expression[i])
        }
    }
}


// console.log(getMathResult(['200', '+', 300])); // 500
// console.log(getMathResult(['20', '-', '5'])); // 15
// console.log(getMathResult([100, '/', 100])); // 1
// console.log(getMathResult([2, '-', 2])); // 0
// console.log(getMathResult(['5', '>', '10'])); // false
// console.log(getMathResult(['5', '<', '10'])); // true
// console.log(getMathResult(['1', '=', 1])); // true
// console.log(getMathResult(['1', '**', 1])); // 'Ошибка'
console.log(getMathResult(['+', '100', 10])); // 'Ошибка'