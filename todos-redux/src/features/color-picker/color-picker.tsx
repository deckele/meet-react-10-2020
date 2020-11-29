import React from "react";
import { colors } from "../../constants";
import { ColorIcon } from "../color-icon/color-icon";

export function ColorPicker() {
  return (
    <select name="color-picker">
      {colors.map((color) => (
        <option>
          <ColorIcon color={color} />
        </option>
      ))}
    </select>
  );
}
