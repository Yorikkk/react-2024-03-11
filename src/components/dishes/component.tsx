import React, { type FC } from "react";

import { type IDish } from "../../types/dish";

import { Dish } from "../dish/component";

export type Props = {
  dishes: IDish[]
}

export const Dishes: FC<Props> = ({ dishes }) => (
  <ul>
    {dishes.map((menu) => (
      <li>
        <Dish menu={menu} />
      </li>
    ))}
</ul>
)