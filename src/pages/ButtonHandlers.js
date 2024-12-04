// ButtonHandlers.js
export const useButtonHandlers = (state) => {
    const {
        display,
        setDisplay,
        operator,
        setOperator,
        operand,
        setOperand,
        isNewInput,
        setIsNewInput,
        MAX_DIGITS,
    } = state;
 
    const handleDigitClick = (digit) => {
        if (display.length >= MAX_DIGITS && !isNewInput) return;
 
        setDisplay((prev) => (prev === "0" || isNewInput ? digit : prev + digit));
        setIsNewInput(false);
    };
 
    const handleOperatorClick = (op) => {
        if (operator && isNewInput) return;
 
        if (!operand) setOperand(parseFloat(display));
        setOperator(op);
        setDisplay((prev) => prev + op);
        setIsNewInput(true);
    };
 
    const handleEqualsClick = () => {
        if (operator && operand !== null) {
            const current = parseFloat(display.split(operator).pop());
            let result;
 
            switch (operator) {
                case "+":
                    result = operand + current;
                    break;
                case "-":
                    result = operand - current;
                    break;
                case "*":
                    result = operand * current;
                    break;
                case "/":
                    result = current === 0 ? "ERR" : operand / current;
                    break;
                default:
                    return;
            }
 
            setDisplay(result.toString().slice(0, MAX_DIGITS));
            setOperand(null);
            setOperator(null);
            setIsNewInput(true);
        }
    };
 
    const handleClearClick = () => {
        setDisplay((prev) => (prev.length === 1 ? "0" : prev.slice(0, -1)));
        setIsNewInput(false);
    };
 
    const handleAllClearClick = () => {
        setDisplay("0");
        setOperand(null);
        setOperator(null);
        setIsNewInput(true);
    };
 
    const handleSignToggle = () => {
        setDisplay((prev) => {
            const value = parseFloat(prev);
            return value ? (-value).toString() : "0";
        });
    };
 
    const handleDecimalClick = () => {
        if (display.includes(".") || display.length >= MAX_DIGITS) return;
        setDisplay((prev) => prev + ".");
        setIsNewInput(false);
    };
 
    return {
        handleDigitClick,
        handleOperatorClick,
        handleEqualsClick,
        handleClearClick,
        handleAllClearClick,
        handleSignToggle,
        handleDecimalClick,
    };
};
