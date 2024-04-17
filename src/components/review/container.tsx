import { type FC } from "react";
import { useSelector } from "react-redux";
import { EntityId } from "@reduxjs/toolkit";

import { State } from "../../types/state";
import { Review as IReview} from "../../types/review";
import { selectReviewById } from "../../redux/entities/review/selectors";

import { Review } from "./component";

type Props = {
  reviewId: EntityId
}

export const ReviewContainer: FC<Props> = ({ reviewId }) => {
  const review = useSelector<State, IReview>((state) => selectReviewById(state, reviewId));

  if (! review) {
    return null;
  }

  return <Review review={review} />
}