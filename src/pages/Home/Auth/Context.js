import { createContext, useState } from "react";

export const Users = createContext(null);

export const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return <Users.Provider value={{ auth, setAuth }}>{children}</Users.Provider>;
};
