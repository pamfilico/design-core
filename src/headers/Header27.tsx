import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export interface Header27Props {
  /** Large logo at the left (≈100px). */
  logo?: React.ReactNode;
  onLogoClick?: () => void;
  /** Small mark before the centred title (≈40px). */
  titleIcon?: React.ReactNode;
  title: React.ReactNode;
  /** Appended to the title after a dash (e.g. "Unit: 204"). */
  detail?: React.ReactNode;
  signedIn?: boolean;
  signOutLabel?: React.ReactNode;
  onSignOut?: () => void;
  signInLabel?: React.ReactNode;
  onSignIn?: () => void;
}

/**
 * Fixed bar for a single venue: big logo on the left, a centred h4 title with a small
 * mark and an optional "– detail" suffix, and a bold sign-in / sign-out text button
 * on the right.
 */
export function Header27({
  logo,
  onLogoClick,
  titleIcon,
  title,
  detail,
  signedIn = false,
  signOutLabel = "Logout",
  onSignOut,
  signInLabel = "Login",
  onSignIn,
}: Header27Props) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Box sx={{ display: "flex", alignItems: "center", cursor: onLogoClick ? "pointer" : undefined }} onClick={onLogoClick}>
            {logo}
          </Box>
          <Box sx={{ flexGrow: 0.9, display: "flex", justifyContent: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", padding: 2 }}>
              {titleIcon && <Box sx={{ mr: "10px", display: "flex" }}>{titleIcon}</Box>}
              <Typography variant="h4">
                {title}
                {detail ? <> - {detail}</> : null}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            sx={{ color: "inherit", my: 2, display: "block", fontWeight: "bold", ...(signedIn ? {} : { fontSize: "1rem" }) }}
            onClick={signedIn ? onSignOut : onSignIn}
          >
            {signedIn ? signOutLabel : signInLabel}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header27;
