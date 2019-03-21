import React from "react";


const Buttons = ({ handleAction }) => {
  return (
    <div className="btn-container">
      <button id="clear" value="AC" onClick={handleAction} className="calc-btn">AC</button>
      <button id="sign" value="+/-" onClick={handleAction} className="calc-btn">+/-</button>
      <button id="percent" value="%" onClick={handleAction} className="calc-btn">%</button>
      <button id="divide" value="/" onClick={handleAction} className="calc-btn">&divide;</button>
      <button id="seven" value="7" onClick={handleAction} className="calc-btn">7</button>
      <button id="eight" value="8" onClick={handleAction} className="calc-btn">8</button>
      <button id="nine" value="9" onClick={handleAction} className="calc-btn">9</button>
      <button id="multiply" value="X" onClick={handleAction} className="calc-btn">&times;</button>
      <button id="four" value="4" onClick={handleAction} className="calc-btn">4</button>
      <button id="five" value="5" onClick={handleAction} className="calc-btn">5</button>
      <button id="six" value="6" onClick={handleAction} className="calc-btn">6</button>
      <button id="subtract" value="-" onClick={handleAction} className="calc-btn">&minus;</button>
      <button id="one" value="1" onClick={handleAction} className="calc-btn">1</button>
      <button id="two" value="2" onClick={handleAction} className="calc-btn">2</button>
      <button id="three" value="3" onClick={handleAction} className="calc-btn">3</button>
      <button id="add" value="+" onClick={handleAction} className="calc-btn">+</button>
      <button id="zero" value="0" onClick={handleAction} className="calc-btn oval">0</button>
      <button id="decimal" value="." onClick={handleAction} className="calc-btn">.</button>
      <button id="equals" value="=" onClick={handleAction} className="calc-btn">=</button>

    </div>
  );
};

export default Buttons;
