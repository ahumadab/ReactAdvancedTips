import { useCallback, useState } from "react";

import { MathStrat, mathStrategies } from "../MathStrat";

interface IuseCounter {
  count: number;
  strategies: MathStrat[];
  strategySelected: MathStrat;
  changeStrategy: (newStrat: MathStrat) => void;
  increase: () => void;
  reset: () => void;
}

/**
 *
 * @author Boris Ahumada <ahumada.boris@laposte.net>
 * @function useCounter
 * @description useCounter
 */
export const useCounter = (): IuseCounter => {
  const [count, setCount] = useState(0);
  const [strategySelected, setStrategySelected] = useState(mathStrategies[0]);

  const changeStrategy = useCallback(
    (strategy: MathStrat) => setStrategySelected(strategy),
    []
  );

  const increase = useCallback(
    () => setCount(strategySelected.calculate),
    [strategySelected]
  );

  const reset = useCallback(() => setCount(0), []);

  return {
    count,
    strategies: mathStrategies,
    strategySelected,
    changeStrategy,
    increase,
    reset,
  };
};

export const useCounterCode: string = `interface IuseCounter {
  count: number;
  strategies: MathStrat[];
  strategySelected: MathStrat;
  changeStrategy: (newStrat: MathStrat) => void;
  increase: () => void;
  reset: () => void;
}

export const useCounter = (): IuseCounter => {
  const [count, setCount] = useState(0);
  const [strategySelected, setStrategySelected] = useState(mathStrategies[0]);

  const changeStrategy = useCallback(
    (strategy: MathStrat) => setStrategySelected(strategy),
    []
  );

  const increase = useCallback(
    () => setCount(strategySelected.calculate),
    [strategySelected]
  );

  const reset = useCallback(() => setCount(0), []);

  return {
    count,
    strategies: mathStrategies,
    strategySelected,
    changeStrategy,
    increase,
    reset,
  };
};`;
