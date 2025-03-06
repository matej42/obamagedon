"use client";

import * as React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Avatar,
  IconButton,
  Popover,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LogoutIcon from "@mui/icons-material/Logout";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useTheme } from "../components/ThemeProvider"; // Import the custom useTheme hook

export default function Navbar() {
  const [value, setValue] = React.useState("/");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const router = useRouter();
  const { data: session, status } = useSession();
  const { toggleTheme, isDarkMode } = useTheme(); // Use theme context

  const handleNavigation = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };

  const handleLogoutClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation(); // Prevent navigation
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "logout-popover" : undefined;

  // Define a type for navigation paths
  interface NavigationPath {
    label: string;
    value: string;
    icon: React.ReactElement;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void; // Optional onClick handler
  }

  // Non-authenticated navigation paths
  const nonAuthPaths: NavigationPath[] = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
    { label: "O nás", value: "../o-mne", icon: <InfoOutlinedIcon /> },
    { label: "Registrácia", value: "/auth/registracia", icon: <AppRegistrationIcon /> },
    { label: "Prihlásenie", value: "/auth/prihlasenie", icon: <LoginIcon /> },
  ];

  // Authenticated navigation paths
  const authPaths: NavigationPath[] = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
    { label: "Hľadať", value: "/hladanie", icon: <SearchIcon /> },
    { label: "Pridať", value: "/pridat", icon: <AddCircleIcon /> },
    {
      label: "Profil",
      value: "",
      onClick: handleLogoutClick,
      icon: session?.user?.image ? (
        <Avatar alt={session?.user?.name || "User"} src={session?.user?.image || undefined} />
      ) : (
        <Avatar>{session?.user?.name?.charAt(0) || "U"}</Avatar>
      ),
    },
  ];

  // Check session status
  if (status === "loading") {
    return <div>Loading...</div>; // You can replace this with a loading spinner or something else
  }

  // Decide which paths to use based on authentication status
  const navigationPaths = status === "authenticated" ? authPaths : nonAuthPaths;

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}>
      <BottomNavigation showLabels value={value} onChange={handleNavigation}>
        {navigationPaths.map((path) => (
          <BottomNavigationAction
            key={path.value}
            label={path.label}
            value={path.value}
            icon={path.icon}
            onClick={path.onClick} // This will be undefined for paths without an onClick
          />
        ))}
      </BottomNavigation>
      {/* Theme toggle button */}
      <IconButton
        onClick={toggleTheme}
        sx={{ position: "absolute", top: 10, right: 10 }}
      >
        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>

      {/* Popover for logout and profile options */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Box sx={{ p: 2 }}>
          <Button
            variant="text"
            onClick={() => {
              handleClose();
              signOut();
            }}
            sx={{ display: "block", mb: 1 }}
          >
            Odhlásiť sa
          </Button>
          <Button
            variant="text"
            onClick={() => {
              handleClose();
              router.push("/profil"); // Adjust the path to your profile page
            }}
            sx={{ display: "block" }}
          >
            Zobraziť profil
          </Button>
        </Box>
      </Popover>
    </Box>
  );
}