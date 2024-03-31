import { useState } from "react"

type Args = {
  currentValue?: number,
  step?: number
}

export const useCounter = ({ currentValue = 0, step = 1 }: Args = {}) => {
  const [amount, setAmount] = useState(currentValue)

  const decrement = () => setAmount(amount - step)
  const increment = () => setAmount(amount + step)

  return { amount, setAmount, decrement, increment }
}