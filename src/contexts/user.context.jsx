import { createContext, useEffect, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase";

//user starting value
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

//Reducer, state brings previous values. We dont need it here.
const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Invalid action ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

//provider, to pass the values to all the components
//value is the value that we want to pass to the components
export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsuscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user);
      if (user) {
        createUserDocumentFromAuth(user);
      }
    });
    return unsuscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
