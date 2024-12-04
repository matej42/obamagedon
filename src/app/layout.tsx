// src/app/layout.tsx
"use client"; // Mark this component as client-side

import { Metadata } from "next";
import Navbar from "../components/Navbar";
import AuthProvider from "../components/AuthProvider";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme"; // Import the theme

export const metadata: Metadata = {
  title: "SnapZoška",
  description: "Created by students of SPŠE Zochova 9, Bratislava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
              <main style={{ flexGrow: 1 }}>
                {children}
              </main>
            </div>
            <Navbar />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
