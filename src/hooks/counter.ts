import { useCallback, useState } from "react"

type Args = {
  currentValue?: number,
  step?: number
}

export const useCounter = ({ currentValue = 0, step = 1 }: Args = {}) => {
  const [amount, setAmount] = useState(currentValue)

  const decrement = useCallback(() => setAmount(amount - step), [amount, step])
  const increment = useCallback(() => setAmount(amount + step), [amount, step])

  return { amount, setAmount, decrement, increment }
}