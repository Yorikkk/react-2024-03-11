import { FC, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EntityId } from "@reduxjs/toolkit";

import { Dish as IDish } from "../../types/dish";
import { selectDishById } from "../../redux/entities/dish/selectors";
import { selectCartDishAmount } from "../../redux/ui/cart/selectors";

import { State } from "../../types/state";
import { Counter } from "../counter/component";
import { UserContext } from "../../context/user";
import { ThemeContext } from "../../context/theme";
import { decrementDish, incrementDish } from "../../redux/ui/cart";

import { Dish } from "./component";

import styles from './styles.module.scss'

type Props = {
  dishId: EntityId,
  className?: string
}

export const DishContaier: FC<Props> = ({ dishId, className }) => {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const dish = useSelector<State, IDish>((state) => selectDishById(state, dishId))
  const amount = useSelector<State, number>((state) => selectCartDishAmount(state, dishId))

  const dispatch = useDispatch();

  const increment = () => dispatch(incrementDish(dishId))
  const decrement = () => dispatch(decrementDish(dishId))

  if (! dish) {
    return null;
  }

  return (
    <Dish
      dish={dish}
      theme={theme}
      className={className}
    >
      {user && (
        <div className={styles.order}>
          <span>Your order:</span>
        
          <Counter 
            amount={amount}
            increment={increment}
            decrement={decrement}
          />
        </div>
      )}
    </Dish>
  )

}