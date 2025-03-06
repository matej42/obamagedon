// src/sections/SignOutView.tsx

"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { Button, Container, Typography, Popover, Box } from "@mui/material";
import { useRouter } from "next/navigation";

export default function SignOutView() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
      <Typography variant="h5" sx={{ mb: 3 }}>
        Naozaj sa chcete odhlásiť?
      </Typography>
      <Button variant="contained" onClick={handleClick}>
        Možnosti
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Box sx={{ p: 2 }}>
          <Button
            variant="text"
            onClick={() => {
              handleClose();
              signOut();
            }}
            sx={{ display: 'block', mb: 1 }}
          >
            Odhlásiť sa
          </Button>
          <Button
            variant="text"
            onClick={() => {
              handleClose();
              router.push('/profil'); // Adjust the path to your profile page
            }}
            sx={{ display: 'block' }}
          >
            Zobraziť profil
          </Button>
        </Box>
      </Popover>
    </Container>
  );
}
