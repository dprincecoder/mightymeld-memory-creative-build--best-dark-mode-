/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const Context = createContext();

export const useDarkMmode = () => useContext(Context);

export const DarkMmodeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Context.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </Context.Provider>
  );
};
