import { useCallback, useState } from "react";

import { CUISINES } from "./checkbox-interactions.constants";

export const useCuisines = () => {
  const [cuisines, setCuisines] = useState(CUISINES);

  const toggleCuisine = useCallback((id: number) => {
    setCuisines((prevCuisines) => {
      return prevCuisines.map((cuisine) => {
        if (cuisine.id === id) {
          return {
            ...cuisine,
            selected: !cuisine.selected,
          };
        }
        return cuisine;
      });
    });
  }, []);

  return {
    cuisines,
    toggleCuisine,
  };
};
