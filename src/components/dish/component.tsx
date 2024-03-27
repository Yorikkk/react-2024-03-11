import React, { useState, type FC } from "react";

import { type Dish as IDish } from "../../types/dish"

type Props = {
  dish: IDish
}

const MIN_DISH_COUNT = 0;
const MAX_DISH_COUNT = 5;

export const Dish: FC<Props> = ({ dish }) => {
  const [dishCount, setDishCount] = useState(0);

  const reduceStateDishCount = () => {
    if (! isMinDishCount()) {
      setDishCount(dishCount - 1)
    }
  }

  const increaseStateDishCount = () => {
    if (! isMaxDishCount()) {
      setDishCount(dishCount + 1)
    }
  }

  const isMinDishCount = () => dishCount === MIN_DISH_COUNT

  const isMaxDishCount = () => dishCount === MAX_DISH_COUNT

  return (
    <div>
      <span>{dish.name}</span>

      <button 
        onClick={reduceStateDishCount} 
        disabled={isMinDishCount()}
      >-</button>

      {dishCount}

      <button 
        onClick={increaseStateDishCount} 
        disabled={isMaxDishCount()}
      >+</button>
    </div>
  )
}