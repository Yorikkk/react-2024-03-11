import { FC } from "react"
import { Button } from "../button/component"
import { useSelector } from "react-redux"
import { State } from "../../types/state"
import { Restaurant } from "../../types/restaurant"

type Props = {
  isActive: boolean,
  restaurantId: string,
  onClick: () => void
}

export const RestaurantTab: FC<Props> = ({ restaurantId, isActive, onClick }) => {
  const restaurant = useSelector<State, Restaurant>((state) => state.restaurant.entities?.[restaurantId]);

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