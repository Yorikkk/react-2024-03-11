import { useEffect, type FC } from "react";
import { useSelector } from "react-redux";
import { EntityId } from "@reduxjs/toolkit";

import { State } from "../../types/state";
import { getReviewsByRestaurantId } from "../../redux/entities/review/thunks/get-reviews-by-restaurant-id";
import { selectRestaurantReviewIds } from "../../redux/entities/restaurant/selectors";

import { Reviews } from "./component";
import { useAppDispatch } from "../../redux";

type Props = {
  restaurantId: EntityId
}

export const ReviewsContainer: FC<Props> = ({ restaurantId }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getReviewsByRestaurantId(restaurantId));
  }, [restaurantId]);

  const restaurantReviewIds = useSelector<State, EntityId[]>((state) => selectRestaurantReviewIds(state, restaurantId)) || [];

  if (! restaurantReviewIds?.length) {
    return null
  }

  return <Reviews restaurantReviewIds={restaurantReviewIds} />;
};