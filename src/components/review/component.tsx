import { type FC } from "react";

import { Review as IReview} from "../../types/review";
import { UserContainer } from "../user/container";

import styles from "./styles.module.scss"

type Props = {
  review: IReview
}

export const Review: FC<Props> = ({ review }) => {
  return (
    <div className={styles.root}>
      <UserContainer userId={review.userId} className={styles.user} />
      
      <div className={styles.text}>{review.text}</div>
    </div>
  )
}