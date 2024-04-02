import { FC } from "react"
import { Button } from "../button/component"

type Props = {
  title: string,
  isActive: boolean,
  onClick: () => void
}

export const Tab: FC<Props> = ({ title, isActive, onClick }) => {
  return (
    <Button onClick={onClick} disabled={isActive} viewVariant="secondary" size="l">{title}</Button>
  )
}