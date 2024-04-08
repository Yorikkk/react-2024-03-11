import { type FC } from "react";

import { Dish } from "../dish/component";

import styles from "./styles.module.scss";

export type Props = {
  dishIds: string[]
}

export const Dishes: FC<Props> = ({ dishIds }) => {
  return (
    <ul className={styles.root}>
      {dishIds.map((dishId) => (
        <li key={dishId}>
          <Dish dishId={dishId} />
        </li>
      ))}
    </ul>
  );
};