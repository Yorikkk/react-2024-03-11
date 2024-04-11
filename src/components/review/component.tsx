import { type FC } from "react";
import { useSelector } from "react-redux";
import { State } from "../../types/state";
import { Review as IReview} from "../../types/review";
import { EntityId } from "@reduxjs/toolkit";
import { selectReviewById } from "../../redux/entities/review/selectors";

type Props = {
  reviewId: EntityId
}

export const Review: FC<Props> = ({ reviewId }) => {
  const review = useSelector<State, IReview>((state) => selectReviewById(state, reviewId));

  if (! review) {
    return null;
  }

  return (
    <span>{review.text}</span>
  )
}