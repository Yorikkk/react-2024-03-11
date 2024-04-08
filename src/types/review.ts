export type Review = {
  id: string,
  text: string,
  rating: number,
  userId: string,
}

export type ReviewState = {
  ids: string[],
  entities: Record<string, Review>
}