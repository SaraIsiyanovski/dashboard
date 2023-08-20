import React, { createContext, useState } from "react";

export const MenuContext = createContext(null);
export const MenuContextComponent = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const value = { menuOpen, setMenuOpen };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
