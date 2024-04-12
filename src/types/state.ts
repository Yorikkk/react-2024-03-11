import { DishState } from "../redux/entities/dish"
import { RestaurantState } from "../redux/entities/restaurant"
import { ReviewState } from "../redux/entities/review"
import { UserState } from "../redux/entities/user"
import { CartState } from "../redux/ui/cart"

export type State = {
  cart: CartState
  user: UserState
  dish: DishState,
  review: ReviewState,
  restaurant: RestaurantState,
}