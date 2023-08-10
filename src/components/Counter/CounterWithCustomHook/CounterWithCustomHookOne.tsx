import React from "react";

import { useCounter } from "./useCounter";

export const CounterWithCustomHookOne: React.FC = () => {
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
      <span>
        <strong>Count is {count}</strong>
      </span>
      <hr />
      {strategies.map((strategy) => (
        <div key={"counter1" + strategy.label}>
          <input
            type="radio"
            checked={strategy == strategySelected}
            onChange={() => changeStrategy(strategy)}
          />
          <label>{strategy.label}</label>
        </div>
      ))}
      <hr />
      <button onClick={increase}>Increase !</button>
      <button onClick={reset} className="secondary">
        Reset
      </button>
    </article>
  );
};

export const CounterWithCustomHookOneCode: string = `export const CounterWithCustomHookOne: React.FC = () => {
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
