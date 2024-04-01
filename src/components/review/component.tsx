import { type FC } from "react";

import { type Review as IReview } from "../../types/review"

type Props = {
  review: IReview
}

export const Review: FC<Props> = ({ review }) => (
  <span>{review.text}</span>
)