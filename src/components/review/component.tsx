import { type FC } from "react";
import { useSelector } from "react-redux";
import { State } from "../../types/state";
import { Review as IReview} from "../../types/review";

type Props = {
  reviewId: string
}

export const Review: FC<Props> = ({ reviewId }) => {
  const review = useSelector<State, IReview>((state) => state.review.entities?.[reviewId]);

  if (! review) {
    return null;
  }

  return (
    <span>{review.text}</span>
  )
}