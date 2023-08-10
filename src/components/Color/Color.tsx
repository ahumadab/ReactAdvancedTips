import React from "react";

import { useColor } from "./useColor";

export const Color: React.FC = () => {
  const { colorSelected, colors, changeColor } = useColor();

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
      <hr />
      {colors.map((color) => (
        <div key={"color" + color.label}>
          <input
            type="radio"
            checked={color == colorSelected}
            onChange={() => changeColor(color)}
          />
          <label htmlFor={"color" + color.label}>{color.label}</label>
        </div>
      ))}
    </article>
  );
};

export const ColorCode: string = `export const Color: React.FC = () => {
  const { colorSelected, colors, changeColor } = useColor();

  return (
    ...
  );
};`;
