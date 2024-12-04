// CalculatorState.js
import { useState } from "react";
 
export const useCalculatorState = () => {
    const [display, setDisplay] = useState("0"); // Current value to display
    const [operator, setOperator] = useState(null); // Operator selected
    const [operand, setOperand] = useState(null); // Stored operand
    const [isNewInput, setIsNewInput] = useState(false); // If a new input is expected
 
    const MAX_DIGITS = 8;
 
    return { display, setDisplay, operator, setOperator, operand, setOperand, isNewInput, setIsNewInput, MAX_DIGITS };
};
