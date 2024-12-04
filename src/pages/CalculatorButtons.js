// CalculatorButtons.js
import React from "react";
 
const CalculatorButtons = ({
    handleDigitClick,
    handleOperatorClick,
    handleEqualsClick,
    handleClearClick,
    handleAllClearClick,
    handleSignToggle,
    handleDecimalClick,
}) => (
<div className="calculator-buttons">
        {/* First Row */}
<button className="calculator-button clear" onClick={handleAllClearClick}>
            AC
</button>
<button className="calculator-button clear" onClick={handleClearClick}>
            C
</button>
<button className="calculator-button operator" onClick={handleSignToggle}>
            +/-
</button>
<button className="calculator-button operator" onClick={() => handleOperatorClick("/")}>
            /
</button>
 
        {/* Second Row */}
<button className="calculator-button" onClick={() => handleDigitClick("7")}>
            7
</button>
<button className="calculator-button" onClick={() => handleDigitClick("8")}>
            8
</button>
<button className="calculator-button" onClick={() => handleDigitClick("9")}>
            9
</button>
<button className="calculator-button operator" onClick={() => handleOperatorClick("*")}>
            *
</button>
 
        {/* Third Row */}
<button className="calculator-button" onClick={() => handleDigitClick("4")}>
            4
</button>
<button className="calculator-button" onClick={() => handleDigitClick("5")}>
            5
</button>
<button className="calculator-button" onClick={() => handleDigitClick("6")}>
            6
</button>
<button className="calculator-button operator" onClick={() => handleOperatorClick("-")}>
            -
</button>
 
        {/* Fourth Row */}
<button className="calculator-button" onClick={() => handleDigitClick("1")}>
            1
</button>
<button className="calculator-button" onClick={() => handleDigitClick("2")}>
            2
</button>
<button className="calculator-button" onClick={() => handleDigitClick("3")}>
            3
</button>
<button className="calculator-button operator" onClick={() => handleOperatorClick("+")}>
            +
</button>
 
        {/* Fifth Row */}
<button className="calculator-button span-2" onClick={() => handleDigitClick("0")}>
            0
</button>
<button className="calculator-button" onClick={handleDecimalClick}>
            .
</button>
<button className="calculator-button operator" onClick={handleEqualsClick}>
            =
</button>
</div>
);
 
export default CalculatorButtons;
