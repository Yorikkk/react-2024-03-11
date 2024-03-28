import React, { type FC } from "react";

import { type Restaurant as IRestaurant } from "../../types/restaurant";

import { Dishes } from "../dishes/component";
import { Reviews } from "../reviews/component";

type Props = {
  restaurant: IRestaurant
}

export const Restaurant: FC<Props> = ({ restaurant }) => {
  if (! restaurant) {
    return null;
  }

  const { name, menu, reviews } = restaurant;

  return (
    <div>
      {name}

      <h3>Меню</h3>
      <Dishes dishes={menu} />

      {!! menu.length && (
        <div>
          <h3>Отзывы</h3>
          <Reviews reviews={reviews} />
        </div>
      )}
    </div>
  )
};