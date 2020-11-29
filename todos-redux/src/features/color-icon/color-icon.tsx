import React from "react";
import styles from "./color-icon.module.scss";

interface ColorIconProps {
  color: string;
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
