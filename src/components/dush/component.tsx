import React from "react";
import { type FC } from "react"
import { type IMenu } from "../../types/dish"

type Props = {
  menu: IMenu
}

export const Menu: FC<Props> = ({ menu }) => (
  <span>{menu.name}</span>
)