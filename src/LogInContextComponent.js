import React, { createContext, useState } from "react";

export const LogInContext = createContext(null);

export const LogInContextComponent = ({ children }) => {
  const [user, setUser] = useState();

  const value = { user, setUser };

  return (
    <LogInContext.Provider value={value}>{children}</LogInContext.Provider>
  );
};
