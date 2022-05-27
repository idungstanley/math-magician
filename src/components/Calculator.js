import React, { useState } from 'react';
import calculate from '../logic/calculator';
// eslint-disable-next-line react/prefer-stateless-function
const Calculator = () => {
  const startState = {
    total: 0,
    next: null,
    operation: null,
  };

  const [state, setState] = useState(startState);
  const { total, next, operation } = state;

  const handleEvent = (event) => {
    const name = event.target.textContent;
    const updateState = calculate(state, name);
    setState(updateState);
  };
  return (
    <section className="main">
      <div className="display">
        {total}
        {operation}
        {next}
      </div>
      <button className="box" type="button" id="AC" onClick={handleEvent}>
        AC
      </button>
      <button type="button" className="box" id="+/-" onClick={handleEvent}>
        +/-
      </button>
      <button type="button" className="box" id="%" onClick={handleEvent}>
        %
      </button>
      <button type="button" className="orange" id="÷" onClick={handleEvent}>
        ÷
      </button>
      <button type="button" className="box" id="7" onClick={handleEvent}>
        7
      </button>
      <button type="button" className="box" id="8" onClick={handleEvent}>
        8
      </button>
      <button type="button" className="box" id="9" onClick={handleEvent}>
        9
      </button>
      <button type="button" className="orange" id="x" onClick={handleEvent}>
        x
      </button>
      <button type="button" className="box" id="4" onClick={handleEvent}>
        4
      </button>
      <button type="button" className="box" id="5" onClick={handleEvent}>
        5
      </button>
      <button type="button" className="box" id="6" onClick={handleEvent}>
        6
      </button>
      <button type="button" className="orange" id="-" onClick={handleEvent}>
        -
      </button>
      <button type="button" className="box" id="1" onClick={handleEvent}>
        1
      </button>
      <button type="button" className="box" id="2" onClick={handleEvent}>
        2
      </button>
      <button type="button" className="box" id="3" onClick={handleEvent}>
        3
      </button>
      <button type="button" className="orange" id="+" onClick={handleEvent}>
        +
      </button>
      <button type="button" className="box zero" id="0" onClick={handleEvent}>
        0
      </button>
      <button type="button" className="box" id="." onClick={handleEvent}>
        .
      </button>
      <button type="button" className="orange" id="=" onClick={handleEvent}>
        =
      </button>
    </section>
  );
};

export default Calculator;
