import { createContext, useState } from "react";

//user starting value
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//provider, to pass the values to all the components
//value is the value that we want to pass to the components
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
