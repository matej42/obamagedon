"use client";

import {
  Button,
  Container,
  Typography,
} from "@mui/material";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "@mui/material/styles"; // Import useTheme to access theme
import { buttonStyles } from "../theme/buttonStyles"; // Import the button styles

export default function SignInView() {
  const theme = useTheme(); // Get theme using useTheme hook

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
        p: 3,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      {/* Logo / Title */}
      <Typography variant="h5" sx={{ mb: 3 }}>
        Prihlásenie
      </Typography>

      {/* Google Sign Up Button with Rainbow Vertical Stripes */}
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={() => signIn("google")}
        sx={buttonStyles.googleButton} // Use googleButton styles from the separate object
      >
        Prihlásiť sa účtom Google
      </Button>

      {/* GitHub Sign Up Button with Reversed Rainbow Vertical Stripes */}
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GitHubIcon />}
        onClick={() => signIn("github")}
        sx={buttonStyles.githubButton} // Use githubButton styles from the separate object
      >
        Prihlásiť sa účtom GitHub
      </Button>
    </Container>
  );
}



      // {/* Facebook Sign Up */}
      // <Button
      //   variant="outlined"
      //   fullWidth
      //   startIcon={<FacebookIcon />}
      //   sx={{ mb: 4 }}
      // >
      //   Prihlásiť sa účtom Facebook
      // </Button>

      // {/* Divider */}
      // <Divider sx={{ width: "100%", mb: 2 }}>
      //   <Typography variant="body2">alebo</Typography>
      // </Divider>

      // {/* Email */}
      // <TextField
      //   margin="normal"
      //   fullWidth
      //   label="Email"
      //   type="email"
      //   variant="outlined"
      //   required
      //   defaultValue="your@email.com"
      // />

      // {/* Password */}
      // <TextField
      //   margin="normal"
      //   fullWidth
      //   label="Password"
      //   type="password"
      //   variant="outlined"
      //   required
      //   defaultValue="******"
      // />

      // {/* Checkbox */}
      // <FormControlLabel
      //   control={<Checkbox color="primary" />}
      //   label="Chcem dostávať novinky na email"
      //   sx={{ mt: 2 }}
      // />

      // {/* Sign Up Button */}
      // <Button
      //   variant="contained"
      //   fullWidth
      //   size="large"
      //   sx={{ mt: 2, mb: 1 }}
      // >
      //   Prihlásiť
      // </Button>