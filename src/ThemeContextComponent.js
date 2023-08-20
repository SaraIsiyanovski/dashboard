import React, { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeContextComponent = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const classToBe = "middle" + " " + theme;
  const classToBe2 = `divs-${theme}`;
  const classToBe3 = "header" + " " + theme;
  const classToBe4 = `log-${theme}` + " " + "login";
  const classToBe5 = `dash-${theme}` + " " + "profile";
  const classToBe6 = "total-bag" + " " + `bag-${theme}`;
  const value = {
    theme,
    setTheme,
    classToBe,
    classToBe2,
    classToBe3,
    classToBe4,
    classToBe5,
    classToBe6,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
