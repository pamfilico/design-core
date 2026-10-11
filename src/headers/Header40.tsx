"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

export interface Header58Props {
  /** Square logo in the floating home tile (top-left). */
  logo?: React.ReactNode;
  homeHref?: string;
  /** Hide the home tile (e.g. when already on the home page). */
  hideHome?: boolean;
  /** Tooltip / aria label of the home tile. */
  homeLabel: string;
  /** Optional pill link on the right (e.g. "For business"); shown only to signed-out visitors. */
  promoLabel?: React.ReactNode;
  promoHref?: string;
  promoIcon?: React.ReactNode;
  /** Hide the promo pill even when signed out (focused flows). */
  hidePromo?: boolean;
  /** Signed-in user; shows an avatar with an account menu. Signed out shows a sign-in icon link. */
  user?: { name?: string; email: string; avatarUrl?: string } | null;
  signInLabel: string;
  signInHref?: string;
  signedInAsLabel: React.ReactNode;
  signOutLabel: string;
  onSignOut?: () => void;
  /** "fixed" to the viewport (original) or "absolute" inside a positioned parent. */
  position?: "fixed" | "absolute";
  linkComponent?: React.ElementType;
}

/**
 * Floating chrome with no bar: a translucent home tile with the logo at the top-left, and at the
 * top-right a promo pill plus an account pill (sign-in icon, or an avatar opening a
 * "signed in as" menu with Sign out). Sits above hero images.
 */
export function Header40(props: Header58Props) {
  const {
    logo,
    homeHref = "/",
    hideHome = false,
    homeLabel,
    promoLabel,
    promoHref = "#",
    promoIcon = <StorefrontOutlinedIcon fontSize="small" />,
    hidePromo = false,
    user,
    signInLabel,
    signInHref = "/sign-in",
    signedInAsLabel,
    signOutLabel,
    onSignOut,
    position = "fixed",
    linkComponent = "a",
  } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const glass = {
    backgroundColor: (t: { palette: { background: { paper: string } } }) => alpha(t.palette.background.paper, 0.85),
    backdropFilter: "blur(6px)",
    boxShadow: 1,
  } as const;
  const pillSx = { ...glass, borderRadius: 999, display: "flex", alignItems: "center" } as const;
  const email = user?.email ?? "";

  return (
    <>
      {!hideHome && (
        <Tooltip title={homeLabel}>
          <Box
            component={linkComponent}
            href={homeHref}
            aria-label={homeLabel}
            sx={{
              ...glass,
              position,
              top: 8,
              left: 8,
              zIndex: 1100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              p: 0.75,
              borderRadius: 2,
              overflow: "hidden",
              transition: "transform 200ms, box-shadow 200ms",
              "&:hover": { transform: "translateY(-1px)", boxShadow: 2 },
            }}
          >
            {logo}
          </Box>
        </Tooltip>
      )}

      <Box sx={{ position, top: 8, right: 8, zIndex: 1100, display: "flex", alignItems: "center", gap: 1 }}>
        {!user && !hidePromo && promoLabel && (
          <Box sx={pillSx}>
            <Button
              component={linkComponent}
              href={promoHref}
              size="small"
              startIcon={promoIcon}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                color: "text.primary",
                px: 1.5,
                py: 0.5,
                minWidth: 0,
                borderRadius: 999,
                "& .MuiButton-startIcon": { mr: 0.5 },
              }}
            >
              {promoLabel}
            </Button>
          </Box>
        )}
        <Box sx={{ ...pillSx, p: 0.25 }}>
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
      </Box>
    </>
  );
}

export default Header40;
