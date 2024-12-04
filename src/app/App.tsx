// src/app/App.tsx

import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme"; // Import the theme

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
