import { FC } from "react"

import { MAX_COUNTER_VALUE, MIN_COUNTER_VALUE } from "../../constants/constants"

type Props = {
  value: number,
  onChange: (value: number) => void,
  min?: number,
  max?: number
}

export const Counter: FC<Props> = ({ 
  value, 
  onChange, 
  min = MIN_COUNTER_VALUE, 
  max = MAX_COUNTER_VALUE 
}) => {
  return (
    <div>
      <button 
        onClick={() => onChange(value - 1)} 
        disabled={value === min}
      >-</button>

      {value}
      
      <button 
        onClick={() => onChange(value + 1)} 
        disabled={value === max}
      >+</button>
    </div>
  );
};