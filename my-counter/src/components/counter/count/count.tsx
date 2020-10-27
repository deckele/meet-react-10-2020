import React from "react";
type CountProps = {
  count: number;
};
export const Count = (props: CountProps) => (
  <div>Current count is: {props.count}</div>
);
