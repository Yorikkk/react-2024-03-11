import { type FC } from "react";

import { Review } from "../review/component";

type Props = {
  reviewIds: string[]
}

export const Reviews: FC<Props> = ({ reviewIds }) => (
  <ul>
    {reviewIds.map((reviewId) => (
      <li key={reviewId}>
        <Review reviewId={reviewId} />
      </li>
    ))}
</ul>
)