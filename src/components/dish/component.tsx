import { type FC } from "react";

import { type Dish as IDish } from "../../types/dish"

import { useCounter } from "../../hooks/counter";
import { MAX_COUNTER_VALUE, MIN_COUNTER_VALUE } from "../../constants/constants";

type Props = {
  dish: IDish
}

export const Dish: FC<Props> = ({ dish }) => {
  const { amount, increment, decrement } = useCounter();

  return (
    <div>
      <span>{dish.name}</span>

      <div>
        <button 
          onClick={decrement} 
          disabled={amount === MIN_COUNTER_VALUE}
        >-</button>

        {amount}
        
        <button 
          onClick={increment} 
          disabled={amount === MAX_COUNTER_VALUE}
        >+</button>
      </div>
    </div>
  )
}