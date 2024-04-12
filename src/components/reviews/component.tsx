import { useEffect, type FC } from "react";

import { Review } from "../review/component";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsByRestaurantId } from "../../redux/entities/review/thunks/get-reviews-by-restaurant-id";
import { EntityId } from "@reduxjs/toolkit";
import { selectRestaurantReviewIds } from "../../redux/entities/restaurant/selectors";
import { State } from "../../types/state";

type Props = {
  restaurantId: EntityId
}

export const Reviews: FC<Props> = ({ restaurantId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-expect-error TODO: Непонятно как типизировать
    dispatch(getReviewsByRestaurantId(restaurantId));
  }, [restaurantId]);

  const restaurantReviewIds = useSelector<State, EntityId[]>((state) => selectRestaurantReviewIds(state, restaurantId)) || [];

  if (! restaurantReviewIds?.length) {
    return null
  }

  return (
    <ul>
      {restaurantReviewIds.map((reviewId) => (
        <li key={reviewId}>
          <Review reviewId={reviewId} />
        </li>
      ))}
  </ul>
  );
};