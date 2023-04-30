import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function NavBar() {
  const router = useRouter();
  const { data: session } = useSession();
  const basePath = router.basePath;

  const handleSignIn = () =>
    signIn("cognito", {
      callbackUrl: `${basePath}`,
    });

  const handleSignOut = () =>
    signOut({
      callbackUrl: `${basePath}`,
    });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              Digital Home
            </Link>
          </Typography>
          <Button
            color="inherit"
            type="submit"
            onClick={session ? handleSignOut : handleSignIn}
          >
            {session ? "Sign out" : "Sign in"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
