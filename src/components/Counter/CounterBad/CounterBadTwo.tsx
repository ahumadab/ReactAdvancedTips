import React, { useState } from "react";

import { MathStrat, mathStrategies } from "../MathStrat";

export const CounterBadTwo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [strategySelected, setStrategySelected] = useState(mathStrategies[0]);

  const changeStrategy = (strategy: MathStrat) => setStrategySelected(strategy);
  const increase = () => setCount(strategySelected.calculate);
  const reset = () => setCount(0);

  return (
    <article style={{ width: "30%", paddingTop: "1%", paddingBottom: "1%" }}>
      <button onClick={increase}>Increase !</button>
      <button onClick={reset} className="secondary">
        Reset
      </button>
      <hr />
      {mathStrategies.map((strategy) => (
        <div key={"counter2" + strategy.label}>
          <input
            type="radio"
            checked={strategy == strategySelected}
            onChange={() => changeStrategy(strategy)}
          />
          <label>{strategy.label}</label>
        </div>
      ))}
      <hr />
      <span>
        <strong>Count is {count}</strong>
      </span>
    </article>
  );
};

export const counterBadTwoCode: string = `export const CounterBadTwo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [strategySelected, setStrategySelected] = useState(mathStrategies[0]);

  const changeStrategy = (strategy: MathStrat) => setStrategySelected(strategy);
  const increase = () => setCount(strategySelected.calculate);
  const reset = () => setCount(0);
  
  return (
    ...
  );
};`;
