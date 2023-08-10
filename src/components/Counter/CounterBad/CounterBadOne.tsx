import React, { useState } from "react";

import { MathStrat, mathStrategies } from "../MathStrat";

export const CounterBadOne: React.FC = () => {
  const [count, setCount] = useState(0);
  const [strategySelected, setStrategySelected] = useState(mathStrategies[0]);

  const changeStrategy = (strategy: MathStrat) => setStrategySelected(strategy);
  const increase = () => setCount(strategySelected.calculate);
  const reset = () => setCount(0);

  return (
    <article style={{ width: "30%", paddingTop: "1%", paddingBottom: "1%" }}>
      <span>
        <strong>Count is {count}</strong>
      </span>
      <hr />
      {mathStrategies.map((strategy) => (
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

export const counterBadOneCode: string = `export const CounterBadOne: React.FC = () => {
  const [count, setCount] = useState(0);
  const [strategySelected, setStrategySelected] = useState(mathStrategies[0]);
  
  const changeStrategy = (strategy: MathStrat) => setStrategySelected(strategy);
  const increase = () => setCount(strategySelected.calculate);
  const reset = () => setCount(0);
  
  return (
    ...
  );
};`;
