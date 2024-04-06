import { useContext, type FC } from "react";

import { type Dish as IDish } from "../../types/dish"
import { Button } from "../button/component";
import { useCounter } from "../../hooks/counter";
import { MAX_COUNTER_VALUE, MIN_COUNTER_VALUE } from "../../constants/constants";

import styles from './styles.module.scss'
import classNames from "classnames";
import { ThemeContext } from "../../context/theme";
import { UserContext } from "../../context/user";
import { useSelector } from "react-redux";
import { State } from "../../types/state";

type Props = {
  dishId: string,
  className?: string
}

export const Dish: FC<Props> = ({ dishId, className }) => {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  const { amount, increment, decrement } = useCounter();

  const dish = useSelector<State, IDish>((state) => state.dish.entities?.[dishId])

  if (! dish) {
    return null
  }

  const { name, price } = dish

  return (
    <div
      className={classNames(className, styles.root, styles[theme])} 
    >
      <div className={styles.preview}>
        <img src="/images/dish.webp" />
      </div>

      <div className={styles.description}>
        <h4 className={styles.title}>{name}</h4>

        <div className={styles.price}>Price: <span>{price} $</span></div>

        {user && (
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