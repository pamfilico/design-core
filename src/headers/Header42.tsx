"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

export interface Header60Props {
  /** Logo (max 40px high); clicking it calls `onHome`. */
  logo: React.ReactNode;
  /** Called by the logo and the back button (e.g. navigate home keeping the search). */
  onHome?: () => void;
  backLabel: React.ReactNode;
  /** Signed-in user → avatar with a "signed in as" menu; otherwise a sign-in icon link. */
  user?: { name?: string; email: string; avatarUrl?: string } | null;
  signInLabel: string;
  signInHref?: string;
  signedInAsLabel: React.ReactNode;
  signOutLabel: string;
  onSignOut?: () => void;
  linkComponent?: React.ElementType;
}

/**
 * Transparent, shadowless 70px results-page bar: logo, an outlined "Back to home" button and the
 * account control on the right. Below `sm` only the logo remains.
 */
export function Header42(props: Header60Props) {
  const {
    logo,
    onHome,
    backLabel,
    user,
    signInLabel,
    signInHref = "/sign-in",
    signedInAsLabel,
    signOutLabel,
    onSignOut,
    linkComponent = "a",
  } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const email = user?.email ?? "";

  const logoBox = (
    <Box
      onClick={onHome}
      sx={{
        height: 40,
        maxHeight: 40,
        maxWidth: 100,
        mr: 2,
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        transition: "transform 0.2s ease-in-out",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      {logo}
    </Box>
  );

  const barSx = { height: 70, backgroundColor: "transparent", boxShadow: "none" };

  if (isMobile) {
    return (
      <AppBar position="static" sx={barSx}>
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center", height: "100%", px: 2 }}>
          {logoBox}
          <Box sx={{ width: 40 }} />
        </Toolbar>
      </AppBar>
    );
  }

  return (
    <AppBar position="static" sx={barSx}>
      <Toolbar sx={{ alignItems: "center", height: "100%", px: 3, gap: 1 }}>
        {logoBox}
        <Button variant="outlined" onClick={onHome} sx={{ borderRadius: 2, textTransform: "none", fontWeight: "medium" }}>
          {backLabel}
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {user ? (
            <>
              <Tooltip title={email || signOutLabel}>
                <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} size="small" sx={{ p: 0.5 }}>
                  <Avatar src={user.avatarUrl} sx={{ width: 28, height: 28, fontSize: 14 }}>
                    {(email[0] || "?").toUpperCase()}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                slotProps={{ paper: { sx: { mt: 1, minWidth: 220 } } }}
              >
                <Box sx={{ p: 1.5, pb: 1, borderBottom: 1, borderColor: "divider" }}>
                  <Typography variant="caption" color="text.secondary">
                    {signedInAsLabel}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }} noWrap>
                    {email}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", p: 0.5 }}>
                  <Button
                    onClick={() => {
                      setAnchorEl(null);
                      onSignOut?.();
                    }}
                    startIcon={<LogoutIcon />}
                    sx={{ justifyContent: "flex-start", textTransform: "none" }}
                  >
                    {signOutLabel}
                  </Button>
                </Box>
              </Menu>
            </>
          ) : (
            <Tooltip title={signInLabel}>
              <IconButton component={linkComponent} href={signInHref} size="small" color="primary" sx={{ p: 0.75 }} aria-label={signInLabel}>
                <LoginIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header42;
