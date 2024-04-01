import { useCallback, useState } from "react"

type Args = {
  currentValue?: number,
  step?: number
}

export const useCounter = ({ currentValue = 0, step = 1 }: Args = {}) => {
  const [amount, setAmount] = useState(currentValue)

  const decrement = useCallback(
    () => setAmount((currentAmount: number) => currentAmount - step), 
    [step]
  )

  const increment = useCallback(
    () => setAmount((currentAmount: number) => currentAmount + step), 
    [step]
  )

  return { amount, setAmount, decrement, increment }
}