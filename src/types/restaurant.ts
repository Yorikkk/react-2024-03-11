import { Dish } from "./dish";
import { Review } from "./review";

export type Restaurant = {
  id: string,
  name: string,
  menu: Dish[],
  reviews: Review[],
}