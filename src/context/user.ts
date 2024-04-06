import React from "react";
import { User } from "../types/user";

type Context = {
  user: User | null,
  login: () => void,
  logout: () => void,
}

export const UserContext = React.createContext<Context>({ 
  user: null,
  login: () => {},
  logout: () => {},
});