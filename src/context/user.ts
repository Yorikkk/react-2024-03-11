import React from "react";
import { User } from "../types/user";

type Context = {
  user: User | null,
  onChange: () => void
}

export const UserContext = React.createContext<Context>({ 
  user: null,
  onChange: () => {}
});