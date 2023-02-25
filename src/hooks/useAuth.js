import { createContext, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useSessionStorage } from "./useSessionStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useSessionStorage("token", null);

  const fakeAuth = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve("2342f2f1d131rf12"), 250);
    });

  const handleLogin = async () => {
    const token = await fakeAuth();
    setToken(token);
    const origin = location.state?.from?.pathname || "/";
    navigate(origin);
  };

  const handleLogout = () => {
    setToken(null);
    window.sessionStorage.clear();
  };

  const value = {
    token,
    login: handleLogin,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
