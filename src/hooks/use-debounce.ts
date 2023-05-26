import { useEffect, useState } from "react";

//Possible needed hook if the the search and filtering was done by the api
export const useDebounce = (value: string, delay: number) => {
  // State and setter for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const timer = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value has changed
      return () => {
        clearTimeout(timer);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
};
