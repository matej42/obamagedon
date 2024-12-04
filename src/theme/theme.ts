// src/theme/theme.ts
import { createTheme } from "@mui/material/styles";

// Create your theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#4285F4', // Google Blue
    },
    secondary: {
      main: '#000000', // Default text color for GitHub button
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '12px 24px',
          fontWeight: 'bold',
          borderRadius: '8px',
          textTransform: 'none', // Prevent text from being capitalized
        },
      },
    },
  },
});

export default theme;
