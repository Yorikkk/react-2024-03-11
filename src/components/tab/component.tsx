import { FC } from "react"

type Props = {
  title: string,
  isActive: boolean,
  onClick: () => void
}

export const Tab: FC<Props> = ({ title, isActive, onClick }) => {
  return (
    <button onClick={onClick} disabled={isActive}>{title}</button>
  )
}