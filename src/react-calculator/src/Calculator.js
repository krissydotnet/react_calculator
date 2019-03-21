import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";

const Calculator = () => {
  const [buffer, setBuffer] = useState('0');
  const [operator, setOperator] = useState(null);
  const [runningTotal, setRunningTotal] = useState(0);

  const clickMe = e => {
    let value = e.target.value.toString();
    
    if (isNaN(value)) {
      //this is not a number
      handleSymbol(value);
  } else {
      //this is a number
      handleNumber(value);
  }


  };
  const handleSymbol = (value) => {
    
    if (value === "AC") {
      setBuffer('0');
      setOperator(null);
      setRunningTotal(0);

    } else if (value === "%") {
      setBuffer(buffer / 100);

    } else if (value === "+/-") {
      setBuffer(buffer * -1);

    } 
    else if (value === ".") {
      if (!buffer.includes('.')) {
        setBuffer(buffer + value);
      }
      
      // Handle decimal
    } 
    else if (value === "=") {
      if (operator=== null) {
        // you need two numbers to do math
        return;
      } 

      setBuffer(flushOperator(parseFloat(buffer)));
      setOperator(value);
      setRunningTotal(0);
    }
     else  {
        handleMath(value);
      
    }
  }


  const handleNumber = (numberString) => {
    if (buffer === '0')  {
        setBuffer(numberString.toString());
    } 
    else if (operator === "=") {
        setOperator(null);
        setBuffer(numberString.toString());
    }
    else {
      setBuffer(buffer + numberString.toString());
    }
}

  const flushOperator = (value) => {
    let answer = 0;

      if (operator === "+") {
        answer = parseFloat(runningTotal) + parseFloat(value);
    } else if (operator === "-") {
      answer = parseFloat(runningTotal) - parseFloat(value);
        
    } else if (operator === "X") {
      answer = parseFloat(runningTotal) * parseFloat(value);
    } else {
      answer = parseFloat(runningTotal) / parseFloat(value);
    }

    setRunningTotal(answer);
    return answer;
  }

  function handleMath(symbol) {

    if (buffer === '0' && operator != null) {
      setOperator(symbol);
      return;
        
    } else if (buffer === '0' ) {
      return;
      
    }

    const floatBuffer = parseFloat(buffer);
  
    if (runningTotal === 0) {
       setRunningTotal(floatBuffer);
    } else {
        flushOperator(floatBuffer);
    }
    setOperator(symbol);
    setBuffer('0');

  }
  

  return (
    <main>
      <div className="calc-container">
        <Display value={buffer} />
        <Buttons handleAction={clickMe} />
      </div>
    </main>
  );
};

export default Calculator;
