"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import Typography from "@mui/material/Typography";


export default function HomeLayout({ children }: { children: ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
  }, [status, router]);
  if (status === "loading") {
    // Show a loading message while checking session status
    return <Typography>Loading...</Typography>;
  }
  if (status === "unauthenticated") {
    // If unauthenticated, display a sign-in button and prevent access to home content
    return (
      <div>
        <Typography>You need to sign in to access this content fr fr no cap.</Typography>
      </div>
    );
  }
  // For authenticated users, render the children (the page content)
  return <>{children}</>;
}