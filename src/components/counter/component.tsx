import { FC } from "react"
import classNames from "classnames";

import { MAX_COUNTER_VALUE, MIN_COUNTER_VALUE } from "../../constants/constants"
import { Button } from "../button/component";

import styles from './styles.module.scss'

type Props = {
  amount: number,
  className?: string,
  increment: () => void,
  decrement: () => void,
}

export const Counter: FC<Props> = ({ amount, className, increment, decrement}) => {
  return (
    <div className={classNames(className, styles.root)}>
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
  );
};