import { createContext, useState, useContext } from "react";

const UserContext = createContext({});

export function useUser() {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  let [user, setUser] = useState(false);

  function setUserTrue() {
    setUser(true);
  }

  function setUserFalse() {
    setUser(false);
  }

  const value = {
    setUserTrue,
    setUserFalse,
    user,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
