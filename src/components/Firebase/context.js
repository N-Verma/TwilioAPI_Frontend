import React, {useState, useEffect,  createContext} from "react";
import { auth } from './firebase'
export const UserContext = createContext({user: null})
export default (props) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
    setUser(user)
})},[])
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  )
}