import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const AuthContex = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContex = () => useContext(AuthContex);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

  // Provider signin
  const providerSignIn = (provider) => {
    return signInWithPopup(auth, provider);
  };

  // Create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user Login
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user logout
  const logout = async () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // console.log(currentUser);
    });

    return unsubscribe; // always return unsubscribe as a variable
  }, [auth]);

  const authInfo = {
    user,
    loading,
    providerSignIn,
    createUser,
    userLogin,
    logout,
  };

  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
