import { EntityId } from "@reduxjs/toolkit"
import { FC } from "react"
import { useSelector } from "react-redux"

import { selectUserById } from "../../redux/entities/user/selectors"
import { State } from "../../types/state"
import { User as IUser } from "../../types/user"

import { User } from "./component"

type Props = {
  userId: EntityId,
  className?: string
}

export const UserContainer: FC<Props> = ({ userId, className }) => {
  const user = useSelector<State, IUser>((state) => selectUserById(state, userId))

  if (! user) {
    return null;
  }

  return <User user={user} className={className} />
}