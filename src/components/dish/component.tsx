import { type FC } from "react";

import { type Dish as IDish } from "../../types/dish"
import { Button } from "../button/component";
import { useCounter } from "../../hooks/counter";
import { MAX_COUNTER_VALUE, MIN_COUNTER_VALUE } from "../../constants/constants";

import styles from './styles.module.scss'
import classNames from "classnames";

type Props = {
  dish: IDish,
  className?: string
}

export const Dish: FC<Props> = ({ dish, className }) => {
  const { amount, increment, decrement } = useCounter();

  return (
    <div
      className={classNames(styles.root, className)} 
    >
      <div className={styles.preview}>
        <img src="/images/dish.webp" />
      </div>

      <div className={styles.description}>
        <h4 className={styles.title}>{dish.name}</h4>

        <div className={styles.price}>Price: <span>{dish.price} $</span></div>

        {true && (
          <div className={styles.order}>
            <span>Your order:</span>

            <div>
              <Button 
                onClick={decrement} 
                disabled={amount === MIN_COUNTER_VALUE}
                className={styles.amount}
              >-</Button>

              {amount}
              
              <Button 
                onClick={increment} 
                disabled={amount === MAX_COUNTER_VALUE}
                className={styles.amount}
              >+</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}