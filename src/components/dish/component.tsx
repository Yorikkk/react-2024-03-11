import React, { type FC } from "react";

import { type IDish } from "../../types/dish"

type Props = {
  menu: IDish
}

export const Dish: FC<Props> = ({ menu }) => (
  <span>{menu.name}</span>
)