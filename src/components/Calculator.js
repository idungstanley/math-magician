import React from 'react';
import calculate from '../logic/calculator';
// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent = (event) => {
    const name = event.target.textContent;
    const updateState = calculate(this.state, name);
    this.setState(updateState);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <section className="main">
        <div className="display">
          {total}
          {operation}
          {next}
        </div>
        <button
          className="box"
          type="button"
          id="AC"
          onClick={this.handleEvent}
        >
          AC
        </button>
        <button
          type="button"
          className="box"
          id="+/-"
          onClick={this.handleEvent}
        >
          +/-
        </button>
        <button type="button" className="box" id="%" onClick={this.handleEvent}>
          %
        </button>
        <button
          type="button"
          className="orange"
          id="÷"
          onClick={this.handleEvent}
        >
          ÷
        </button>
        <button type="button" className="box" id="7" onClick={this.handleEvent}>
          7
        </button>
        <button type="button" className="box" id="8" onClick={this.handleEvent}>
          8
        </button>
        <button type="button" className="box" id="9" onClick={this.handleEvent}>
          9
        </button>
        <button type="button" className="orange" id="x" onClick={this.handleEvent}>
          x
        </button>
        <button type="button" className="box" id="4" onClick={this.handleEvent}>
          4
        </button>
        <button type="button" className="box" id="5" onClick={this.handleEvent}>
          5
        </button>
        <button type="button" className="box" id="6" onClick={this.handleEvent}>
          6
        </button>
        <button type="button" className="orange" id="-" onClick={this.handleEvent}>
          -
        </button>
        <button type="button" className="box" id="1" onClick={this.handleEvent}>
          1
        </button>
        <button type="button" className="box" id="2" onClick={this.handleEvent}>
          2
        </button>
        <button type="button" className="box" id="3" onClick={this.handleEvent}>
          3
        </button>
        <button type="button" className="orange" id="+" onClick={this.handleEvent}>
          +
        </button>
        <button type="button" className="box zero" id="0" onClick={this.handleEvent}>
          0
        </button>
        <button type="button" className="box" id="." onClick={this.handleEvent}>
          .
        </button>
        <button type="button" className="orange" id="=" onClick={this.handleEvent}>
          =
        </button>
      </section>
    );
  }
}
