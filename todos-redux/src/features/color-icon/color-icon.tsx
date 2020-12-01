import React from "react";
import { Color } from "../../contracts";
import styles from "./color-icon.module.scss";

interface ColorIconProps {
  color: Color;
}
export function ColorIcon({ color }: ColorIconProps) {
  return (
    <span
      className={styles.colorIcon}
      style={{
        backgroundColor: color,
      }}
    />
  );
}
