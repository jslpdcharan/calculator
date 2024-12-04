// Calculator.js
import React from "react";
import { useCalculatorState } from "./CalculatorState";
import { useButtonHandlers } from "./ButtonHandlers";
import CalculatorButtons from "./CalculatorButtons";
import "../Calculator.css";

const Calculator = () => {
    const state = useCalculatorState();
    const handlers = useButtonHandlers(state);

    return (
        <div className="calculator-container">
            <div className="calculator">
                <div className="calculator-display">{state.display}</div>
                <CalculatorButtons {...handlers} />
            </div>
        </div>
    );
};

export default Calculator;
