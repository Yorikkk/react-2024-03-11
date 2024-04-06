import { DishState } from "./dish"
import { RestaurantState } from "./restaurant"
import { ReviewState } from "./review"
import { UserState } from "./user"

export type State = {
  user: UserState
  dish: DishState,
  review: ReviewState,
  restaurant: RestaurantState,
}