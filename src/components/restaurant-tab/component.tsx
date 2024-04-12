import { FC } from "react"
import { Button } from "../button/component"
import { useSelector } from "react-redux"
import { State } from "../../types/state"
import { Restaurant } from "../../types/restaurant"
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors"
import { EntityId } from "@reduxjs/toolkit"

type Props = {
  isActive: boolean,
  restaurantId: EntityId,
  onClick: () => void
}

export const RestaurantTab: FC<Props> = ({ restaurantId, isActive, onClick }) => {
  const restaurant = useSelector<State, Restaurant>((state) => selectRestaurantById(state, restaurantId));

  if (! restaurant) {
    return null;
  }

  const { name } = restaurant;

  return (
    <Button 
      onClick={onClick} 
      disabled={isActive} 
      viewVariant="secondary" 
      size="l"
    >
      {name}
    </Button>
  )
}