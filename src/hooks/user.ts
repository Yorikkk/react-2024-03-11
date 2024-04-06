import { useCallback, useState } from "react";
import { User } from "../types/user";

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback(() => setUser({ name: 'Yury' }), [])

  const logout = useCallback(() => setUser(null), [])

  return { 
    user,

    login,
    logout,
  }
}