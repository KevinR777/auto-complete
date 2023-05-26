import { useState } from "react";

export const useToggle = (defaultState = false) => {
  const [toggle, setToggle] = useState(defaultState);

  const switchToggle = (toggleValue = toggle) => setToggle(!toggleValue);

  const setCustomToggle = (toggleValue: boolean) => setToggle(toggleValue);

  return {
    toggle,
    switchToggle,
    setCustomToggle,
  };
};
