const getMathResult = (expression) => {
    let number
    if(expression.length === 3) {
        switch (expression[1]) {
            case '>':
                number = +expression[0] > +expression[2]
                break
            case '<':
                number = +expression[0] < +expression[2]
                break
            case '+':
                number = +expression[0] + +expression[2]
                break
            case '-':
                number = +expression[0] - +expression[2]
                break
            case '*':
                number = +expression[0] * +expression[2]
                break
            case '/':
                number = +expression[0] / +expression[2]
                break
            case '=':
                number = +expression[0] === +expression[2]
                break
            default:
                number = `Ошибка`
        }
    } else if (expression.length > 3) {
        const isNumericValue = value => !isNaN(value)
        let arr = expression.filter(el => isNumericValue(el))

        for(let i = 0; i<=expression.length; i++) {
            switch (expression[i]) {
                case '+':
                    number = +arr[0] + +arr[1]
                    break
                case '-':
                    number = +arr[0] - +arr[1]
                    break
                case '*':
                    number = +arr[0] * +arr[1]
                    break
                case '/':
                    number = +arr[0] / +arr[1]
                    break
                case '=':
                    number = +arr[0] === +arr[1]
                    break
                case '>':
                    number = +arr[0] > +arr[1]
                    break
                case '<':
                    number = +arr[0] < +arr[1]
                    break
            }
        }
    } else {
        number = `Ошибка`
    }
    console.log(number)
}

getMathResult(['200', '+', 300]); // 500
getMathResult(['20', '-', '5']); // 15
getMathResult([100, '/', 100]); // 1
getMathResult([2, '-', 2]); // 0
getMathResult(['5', '>', '10']); // false
getMathResult(['5', '<', '10']); // true
getMathResult(['1', '=', 1]); // true
getMathResult(['1', '**', 1]); // 'Ошибка'
getMathResult(['+', '100', 10]); // 'Ошибка'
getMathResult(['100', 'hello', 'javascript', 'help200', '+', 4]);
getMathResult(['100', 'hello']);
