import React, { type FC } from "react";

import { type IDish } from "../../types/dish"

type Props = {
  dish: IDish
}

export const Dish: FC<Props> = ({ dish }) => (
  <span>{dish.name}</span>
)