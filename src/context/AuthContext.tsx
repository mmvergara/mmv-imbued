import { User } from "firebase/auth";
import { createContext, useState, useEffect, useContext } from "react";
import { authFB } from "../firebase";

const AuthContext = createContext<User | null>(null);
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null!);
  useEffect(() => {
    authFB.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        return;
      }
      setUser(user);
      setLoading(false);
    });
  }, [user]);
  console.log(loading);

  return (
    <AuthContext.Provider value={user}>{!loading ? children : "LOADING..."}</AuthContext.Provider>
  );
};
