import { type FC } from "react";

import { type Dish as IDish } from "../../types/dish";

import { Dish } from "../dish/component";

export type Props = {
  dishes: IDish[]
}

export const Dishes: FC<Props> = ({ dishes }) => (
  <ul>
    {dishes.map((dish) => (
      <li>
        <Dish dish={dish} key={dish.id} />
      </li>
    ))}
</ul>
)