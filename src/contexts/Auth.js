import React, { createContext, useContext, useState } from "react";

const Context = createContext({});

export const AuthContext = () => useContext(Context);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = (email, password) => {
    if (email === "luz@noceda.com" && password === "owlH123")
      setIsLoggedIn(true);
  };

  const logOff = () => {
    setIsLoggedIn(false);
    console.warn("Logoff success!");
  };

  return (
    <Context.Provider value={{ isLoggedIn, logIn, logOff }}>
      {children}
    </Context.Provider>
  );
};
