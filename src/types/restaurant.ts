import { IDish } from "./dish";
import { IReview } from "./review";

export type IRestaurant = {
  id: string,
  name: string,
  menu: IDish[],
  reviews: IReview[],
}