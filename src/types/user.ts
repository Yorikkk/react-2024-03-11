export type User = {
  id: string
  name: string
}

export type UserState = {
  ids: string[],
  entities: Record<string, User>
}