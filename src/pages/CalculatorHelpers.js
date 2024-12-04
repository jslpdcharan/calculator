// CalculatorHelpers.js
export const calculateResult = (num1, num2, op) => {
    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 === 0 ? "ERR" : num1 / num2;
        default:
            return num2;
    }
};
