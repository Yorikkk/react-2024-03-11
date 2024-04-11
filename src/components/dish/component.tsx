import { useContext, type FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { State } from "../../types/state";
import { selectDishById } from "../../redux/entities/dish/selectors";
import { selectCartDishAmount } from "../../redux/ui/cart/selectors";
import { decrementDish, incrementDish } from "../../redux/ui/cart";
import { type Dish as IDish } from "../../types/dish"
import { UserContext } from "../../context/user";
import { ThemeContext } from "../../context/theme";
import { MAX_COUNTER_VALUE, MIN_COUNTER_VALUE } from "../../constants/constants";

import { Button } from "../button/component";

import styles from './styles.module.scss'
import { EntityId } from "@reduxjs/toolkit";

type Props = {
  dishId: EntityId,
  className?: string
}

export const Dish: FC<Props> = ({ dishId, className }) => {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const dish = useSelector<State, IDish>((state) => selectDishById(state, dishId))
  const amount = useSelector<State, number>((state) => selectCartDishAmount(state, dishId))

  const dispatch = useDispatch();

  const increment = () => dispatch(incrementDish(dishId))
  const decrement = () => dispatch(decrementDish(dishId))

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