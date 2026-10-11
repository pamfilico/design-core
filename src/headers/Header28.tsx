"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

export interface Header28Props {
  /** Logo at the left (hidden on xs). */
  logo?: React.ReactNode;
  onLogoClick?: () => void;
  /** Mark before the centred name (≈50px). */
  titleIcon?: React.ReactNode;
  title: React.ReactNode;
  signedIn?: boolean;
  /** Line under the title when signed in (e.g. "(204)"). */
  signedInDetail?: React.ReactNode;
  /** Two-part hint under the title when signed out; stacks on xs. */
  hint?: [React.ReactNode, React.ReactNode];
  signOutLabel?: string;
  onSignOut?: () => void;
  signInLabel?: string;
  /** When given, the sign-in icon opens this instructions dialog instead of calling `onSignIn`. */
  signInDialog?: { title: React.ReactNode; body: React.ReactNode; closeLabel?: React.ReactNode };
  onSignIn?: () => void;
}

/**
 * Fixed guest-facing bar: logo (from `sm`), a centred mark + h5 name with either a
 * signed-in detail line or a two-part hint, and a sign-in / sign-out icon with a
 * tooltip. Sign-in can open an instructions dialog.
 */
export function Header28({
  logo,
  onLogoClick,
  titleIcon,
  title,
  signedIn = false,
  signedInDetail,
  hint,
  signOutLabel = "Logout",
  onSignOut,
  signInLabel = "Login",
  signInDialog,
  onSignIn,
}: Header28Props) {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Box
              sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", cursor: onLogoClick ? "pointer" : undefined }}
              onClick={onLogoClick}
            >
              {logo}
            </Box>
            <Box sx={{ flexGrow: 0.9, display: "flex", justifyContent: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center", padding: 2 }}>
                {titleIcon && <Box sx={{ mr: "10px", display: "flex" }}>{titleIcon}</Box>}
                <Box display="flex" flexDirection="column" alignItems="flex-start">
                  <Typography variant="h5">{title}</Typography>
                  {signedIn ? (
                    signedInDetail && <Typography>{signedInDetail}</Typography>
                  ) : hint ? (
                    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center" }}>
                      <Typography>{hint[0]}</Typography>
                      <Typography sx={{ ml: { xs: 0, sm: 1 } }}>{hint[1]}</Typography>
                    </Box>
                  ) : null}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {signedIn ? (
              <Tooltip title={signOutLabel}>
                <IconButton onClick={onSignOut} aria-label={signOutLabel}>
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title={signInLabel}>
                <IconButton onClick={signInDialog ? () => setDialogOpen(true) : onSignIn} aria-label={signInLabel}>
                  <LoginIcon />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {signInDialog && (
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <DialogTitle>{signInDialog.title}</DialogTitle>
          <DialogContent dividers>
            <Typography>{signInDialog.body}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)} variant="outlined">
              {signInDialog.closeLabel ?? "Close"}
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}

export default Header28;
