import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect } from "react";
import { auth } from "../fireBase";
import { getUser } from "../redux/createProductSlice";
import { useDispatch } from "react-redux";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContext = ({ children }) => {
    const dispatch = useDispatch()

      function registers(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
      }
      const googleProvider = new GoogleAuthProvider();
      async function sigInGoogle() {
        return await signInWithPopup(auth, googleProvider);
      }
      function logOutUser() {
          return signOut(auth);
        }
        function login(email, password) {
          return signInWithEmailAndPassword(auth, email, password);
        }
        function userDate() {
          return onAuthStateChanged(auth, (user) => {
        dispatch(getUser(user))
          })
        }
        useEffect(() => {
          userDate()
        },[])

  const values = { registers,sigInGoogle,logOutUser, login};
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
