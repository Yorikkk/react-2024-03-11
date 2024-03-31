import { useState, type FC } from "react";

import { type Dish as IDish } from "../../types/dish"
import { Counter } from "../counter/component";

type Props = {
  dish: IDish
}

export const Dish: FC<Props> = ({ dish }) => {
  const [dishAmount, setDishAmount] = useState(0);

  return (
    <div>
      <span>{dish.name}</span>

      <Counter value={dishAmount} onChange={setDishAmount} />
    </div>
  )
}