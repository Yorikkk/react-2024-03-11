import { type FC } from "react";

import { type Review as IReview } from "../../types/review";

import { Review } from "../review/component";

type Props = {
  reviews: IReview[]
}

export const Reviews: FC<Props> = ({ reviews }) => (
  <ul>
    {reviews.map((review) => (
      <li>
        <Review review={review} />
      </li>
    ))}
</ul>
)