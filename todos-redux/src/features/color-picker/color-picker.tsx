import React from "react";
import { colors } from "../../constants";
import { Color } from "../../contracts";

interface ColorPickerProps {
  value: Color;
  onChange: (color: Color) => void;
}
export function ColorPicker({ value, onChange }: ColorPickerProps) {
  return (
    <select
      name="color-picker"
      value={value}
      onChange={(e) => onChange(e.target.value as Color)}
      style={{
        color: value,
        fontWeight: "bolder",
        textShadow: "black 0px 0px 1px",
      }}
    >
      {colors.map((color) => (
        <option key={color} value={color}>
          {color.slice(0, 1).toLocaleUpperCase() + color.slice(1)}
        </option>
      ))}
    </select>
  );
}
