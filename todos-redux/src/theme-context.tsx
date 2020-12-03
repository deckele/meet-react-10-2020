import React, { createContext, FC, useContext, useState } from "react";

const themeConfig = {
  dark: {
    primary: "pink",
    background: "black",
  },
  light: {
    primary: "black",
    background: "white",
  },
};

type Theme = typeof themeConfig;

const themeContext = createContext({
  theme: themeConfig.light,
  toggleTheme: () => {},
});

export function useThemeContext() {
  return useContext(themeContext);
}

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<keyof Theme>("light");
  function toggleTheme() {
    setTheme((prev) => {
      if (prev === "light") return "dark";
      return "light";
    });
  }
  return (
    <themeContext.Provider value={{ theme: themeConfig[theme], toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};
