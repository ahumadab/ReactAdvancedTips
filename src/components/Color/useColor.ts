import { useCallback, useState } from "react";

interface IColor {
  label: string;
  value: string;
}

const blue: IColor = {
  label: "blue",
  value: "#039be5",
};
const green: IColor = {
  label: "green",
  value: "#7cb342",
};
const yellow: IColor = {
  label: "yellow",
  value: "#fdd835",
};

interface IuseColor {
  colorSelected: IColor;
  colors: IColor[];
  changeColor: (nextColor: IColor) => void;
}

/**
 *
 * @author Boris Ahumada <ahumada.boris@laposte.net>
 * @function useColor
 * @description useColor
 */
export const useColor = (): IuseColor => {
  const colors = [blue, green, yellow];
  const [color, setColor] = useState<IColor>(colors[0]);

  const changeColor = useCallback(
    (nextColor: IColor) => setColor(nextColor),
    []
  );

  return { colorSelected: color, colors, changeColor };
};
