import { type FC } from "react";
import { EntityId } from "@reduxjs/toolkit";
import classNames from "classnames";

import { ReviewContainer } from "../review/container";

import styles from "./styles.module.scss"

type Props = {
  restaurantReviewIds: EntityId[]
}

export const Reviews: FC<Props> = ({ restaurantReviewIds }) => {
  return (
    <ul className={classNames(styles.root)}>
      {restaurantReviewIds.map((reviewId) => (
        <li key={reviewId}>
          <ReviewContainer reviewId={reviewId} />
        </li>
      ))}
  </ul>
  );
};