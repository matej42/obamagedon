import { createTheme } from '@mui/material/styles';

// Define the light theme palette
const lightPalette = {
  primary: {
    main: '#1e88e5', // calm blue
  },
  secondary: {
    main: '#00bcd4', // vibrant teal
  },
  background: {
    default: '#f4f6f8', // warm light background
    paper: '#ffffff', // subtle paper tone
  },
  text: {
    primary: '#212121', // dark gray text for readability
    secondary: '#616161', // medium gray text
  },
};

// Define the dark theme palette
const darkPalette = {
  primary: {
    main: '#1565c0', // deep blue
  },
  secondary: {
    main: '#008394', // bold turquoise
  },
  background: {
    default: '#121212', // neutral dark background
    paper: '#1e1e1e', // softer paper tone
  },
  text: {
    primary: '#e0e0e0', // light gray text
    secondary: '#bdbdbd', // softer gray text
  },
};

// Create the theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light', // Set the mode to 'light'
    ...lightPalette, // Add light palette colors
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif', // Set global font family
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#00bcd4', // pink color for links
          textDecoration: 'none', // No underline by default
          fontStyle: 'italic', // Cursive style for links
          '&:hover': {
            textDecoration: 'underline', // Underline on hover
            color: '#f50057', // Darker shade of blue on hover
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Set the mode to 'dark'
    ...darkPalette, // Add dark palette colors
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif', // Set global font family
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#ff4081', // Light pink color for links in dark mode
          textDecoration: 'none', // No underline by default
          fontStyle: 'italic', // Cursive style for links
          '&:hover': {
            textDecoration: 'underline', // Underline on hover
            color: '#f50057', // Lighter blue shade on hover in dark mode
          },
        },
      },
    },
  },
});