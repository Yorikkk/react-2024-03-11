import React from "react";
import { User } from "../types/user";

export const UserContext = React.createContext<User | null>(null);