import React, { type FC } from "react";

import { type IReview } from "../../types/review"

type Props = {
  review: IReview
}

export const Review: FC<Props> = ({ review }) => (
  <span>{review.text}</span>
)