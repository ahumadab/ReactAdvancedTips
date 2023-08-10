import React from "react";

import { useColor } from "../Color";
import { useCounter } from "../Counter";

export const CounterColor: React.FC = () => {
  const { colorSelected, colors, changeColor } = useColor();
  const {
    count,
    strategies,
    strategySelected,
    changeStrategy,
    increase,
    reset,
  } = useCounter();

  return (
    <article
      style={{
        width: "15em",
        height: "18em",
        paddingTop: "1%",
        paddingBottom: "1%",
        background: colorSelected.value,
      }}
    >
      <span>
        <strong>Color is {colorSelected.label}</strong>
      </span>
      <br />
      <span>
        <strong>Count is {count}</strong>
      </span>
      <hr />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {colors.map((color) => (
            <div key={"color" + color.label}>
              <input
                type="radio"
                checked={color == colorSelected}
                onChange={() => changeColor(color)}
              />
              <label>{color.label}</label>
            </div>
          ))}
        </div>
        <div>
          {strategies.map((strategy) => (
            <div key={"color" + strategy.label}>
              <input
                type="radio"
                checked={strategy == strategySelected}
                onChange={() => changeStrategy(strategy)}
              />
              <label htmlFor={"color" + strategy.label}>{strategy.label}</label>
            </div>
          ))}
        </div>
      </div>

      <hr />
      <button onClick={increase}>Increase !</button>
      <button onClick={reset} className="secondary">
        Reset
      </button>
    </article>
  );
};

export const CounterColorCode: string = `export const CounterColor: React.FC = () => {
  const { colorSelected, colors, changeColor } = useColor();
  const {
    count,
    strategies,
    strategySelected,
    changeStrategy,
    increase,
    reset,
  } = useCounter();

  return (
    ...
  );
};`;
