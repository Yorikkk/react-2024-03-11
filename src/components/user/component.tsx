import { FC } from "react"
import { User as IUser } from "../../types/user"
import classNames from "classnames"

type Props = {
  user: IUser,
  className?: string
}

export const User: FC<Props> = ({ user, className }) => {
  return (
    <div className={classNames(className)}>
      {user.name}
    </div>
  )
}