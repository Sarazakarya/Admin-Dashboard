import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const GlobalProvider = createContext();
export const GobalContext = ({ children }) => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          primary: {
            main: "#1976d2",
          },
        },
      }),
    [mode],
  );
  return (
    <GlobalProvider.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </GlobalProvider.Provider>
  );
};
const useThem = () => {
  return useContext(GlobalProvider);
};
export default useThem;
