import { type FC } from "react";

import { type Dish as IDish } from "../../types/dish";

import { Dish } from "../dish/component";

import styles from "./styles.module.scss";

export type Props = {
  dishes: IDish[]
}

export const Dishes: FC<Props> = ({ dishes }) => (
  <ul className={styles.root}>
    {dishes.map((dish) => (
      <li key={dish.id}>
        <Dish dish={dish} />
      </li>
    ))}
</ul>
)