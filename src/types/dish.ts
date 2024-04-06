export type Dish = {
  id: string,
  name: string,
  price: number,
  ingredients: string[],
}

export type DishState = {
  ids: string[],
  entities: Record<string, Dish>
}