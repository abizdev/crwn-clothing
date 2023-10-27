import { createContext, useEffect, useReducer } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
})



export const UserProvider = ({ children }) => {
  const [ { currentUser } , dispatch ] = useReducer(userReducer, INITIAL_STATE)
  console.log(currentUser);

  

  const value = { currentUser, setCurrentUser }

  
  
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}