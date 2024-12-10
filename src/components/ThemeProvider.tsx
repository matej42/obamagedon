"use client"; // This needs to be a client component
import React, { createContext, useContext } from "react";
import { ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { rainbowPalette } from "../theme/theme";


// Create a Material-UI theme using the rainbow palette
const rainbowTheme = createTheme({
  palette: rainbowPalette,
});

// Create a context for the theme (no toggle functionality)
const ThemeContext = createContext({});

// Export a custom hook for easy access to theme context
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeContext.Provider value={{}}>
      <MUIThemeProvider theme={rainbowTheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
