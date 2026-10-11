import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

export interface Header07Props {
  /** Wordmark text or logo node. */
  brand: React.ReactNode;
  /** True once the page has scrolled: the bar turns solid with a divider and shadow. */
  scrolled?: boolean;
  signedIn?: boolean;
  onSignIn?: () => void;
  onSignOut?: () => void;
  signInLabel?: string;
  signOutLabel?: string;
}

/**
 * Fixed landing-page bar that is transparent over the hero (contrast-text wordmark)
 * and turns into a paper bar with a divider and shadow once `scrolled` is true.
 * Right side: a sign-in / sign-out icon button.
 */
export function Header07({
  brand,
  scrolled = false,
  signedIn = false,
  onSignIn,
  onSignOut,
  signInLabel = "Sign in",
  signOutLabel = "Sign out",
}: Header07Props) {
  const fg = scrolled ? "primary.main" : "primary.contrastText";
  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 4 : 0}
      sx={{
        bgcolor: scrolled ? "background.paper" : "transparent",
        transition: "all 0.3s",
        borderBottom: scrolled ? 1 : 0,
        borderColor: "divider",
      }}
    >
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: 700, color: fg, letterSpacing: "0.5px", transition: "all 0.3s" }}
        >
          {brand}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          onClick={signedIn ? onSignOut : onSignIn}
          aria-label={signedIn ? signOutLabel : signInLabel}
          sx={{ color: fg, "&:hover": { bgcolor: "action.hover" } }}
        >
          {signedIn ? <LogoutIcon /> : <LoginIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header07;
