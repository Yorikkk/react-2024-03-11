import React, { type FC } from "react";

import { type Dish as IDish } from "../../types/dish";

import { Dish } from "../dish/component";

export type Props = {
  dishes: IDish[]
}

export const Dishes: FC<Props> = ({ dishes }) => (
  <ul>
    {dishes.map((menu) => (
      <li>
        <Dish dish={menu} key={menu.id} />
      </li>
    ))}
</ul>
)