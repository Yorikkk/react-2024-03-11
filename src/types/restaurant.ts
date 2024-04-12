import { EntityId } from "@reduxjs/toolkit"

export type Restaurant = {
  id: EntityId,
  name: string,
  menu: string[],
  reviews: string[],
}