import { EntityId } from "@reduxjs/toolkit";

export type Review = {
  id: EntityId,
  text: string,
  rating: number,
  userId: string,
}