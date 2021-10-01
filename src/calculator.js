class Calculator {
    add(value1, value2) {
        return value1 + value2;
    }
    
    subtract(value1, value2) {
        return value1 - value2;
    }
    
    divide(value1, value2) {
        return value1 / value2;
    }
    
    multiply(value1, value2) {
        return value1 * value2;
    }
}

let calculator = new Calculator();

module.exports = calculator;