import { useState, useEffect } from "react";

export function useDebounce<T>(value: T, msDelay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, msDelay);
    return () => clearTimeout(timeoutId);
  }, [value, msDelay]);
  return debouncedValue;
}
