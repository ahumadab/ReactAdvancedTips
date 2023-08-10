import React from "react";

import { useCounter } from "./useCounter";

export const CounterWithCustomHookTwo: React.FC = () => {
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
        paddingTop: "1%",
        paddingBottom: "1%",
        height: "18em",
      }}
    >
      <button onClick={increase}>Increase !</button>
      <button onClick={reset} className="secondary">
        Reset
      </button>
      <hr />
      {strategies.map((strategy) => (
        <div key={"counter2" + strategy.label}>
          <input
            type="radio"
            checked={strategy == strategySelected}
            onChange={() => changeStrategy(strategy)}
          />
          <label htmlFor={"counter2" + strategy.label}>{strategy.label}</label>
        </div>
      ))}
      <hr />
      <span>
        <strong>Count is {count}</strong>
      </span>
    </article>
  );
};

export const CounterWithCustomHookTwoCode: string = `export const CounterWithCustomHookTwo: React.FC = () => {
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
