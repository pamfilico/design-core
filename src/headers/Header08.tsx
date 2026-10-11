"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export interface Header08Props {
  brand: React.ReactNode;
  brandHref?: string;
  linkComponent?: React.ElementType;
  /** Signed-in state: shows the hamburger (below `md`) and the sign-out icon. */
  signedIn?: boolean;
  onMenuClick?: () => void;
  menuLabel?: string;
  /** Slot before the theme toggle (e.g. an install button). */
  actions?: React.ReactNode;
  /** Theme toggle; hidden without `onToggleTheme`. */
  themeMode?: "light" | "dark";
  onToggleTheme?: () => void;
  toDarkLabel?: string;
  toLightLabel?: string;
  /** Language select; hidden without options. */
  locales?: { value: string; label: string }[];
  locale?: string;
  localeLabel?: string;
  onLocaleChange?: (locale: string) => void;
  /** Text button (e.g. "Contact"); hidden without a label. */
  contactLabel?: React.ReactNode;
  onContact?: () => void;
  signInLabel?: string;
  signOutLabel?: string;
  onSignIn?: () => void;
  onSignOut?: () => void;
}

/**
 * Fixed app bar above the drawer: hamburger (signed in, below `md`), brand link that
 * grows, then actions slot, theme toggle, an outlined language select styled for the
 * coloured bar, a text contact button and a sign-in / sign-out icon with tooltip.
 */
export function Header08({
  brand,
  brandHref = "/",
  linkComponent = "a",
  signedIn = false,
  onMenuClick,
  menuLabel = "open menu",
  actions,
  themeMode = "light",
  onToggleTheme,
  toDarkLabel = "Switch to dark mode",
  toLightLabel = "Switch to light mode",
  locales = [],
  locale,
  localeLabel = "Language",
  onLocaleChange,
  contactLabel,
  onContact,
  signInLabel = "Sign in",
  signOutLabel = "Sign out",
  onSignIn,
  onSignOut,
}: Header08Props) {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        {signedIn && (
          <IconButton color="inherit" edge="start" onClick={onMenuClick} aria-label={menuLabel} sx={{ mr: 1, display: { md: "none" } }}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: "-0.02em" }}>
          <Link component={linkComponent} href={brandHref} color="inherit" underline="none">
            {brand}
          </Link>
        </Typography>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          {actions}
          {onToggleTheme && (
            <Tooltip title={themeMode === "light" ? toDarkLabel : toLightLabel}>
              <IconButton onClick={onToggleTheme} color="inherit" aria-label={themeMode === "light" ? toDarkLabel : toLightLabel}>
                {themeMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
            </Tooltip>
          )}
          {locales.length > 0 && (
            <FormControl
              variant="outlined"
              size="small"
              sx={{
                width: 140,
                color: "inherit",
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "currentColor", opacity: 0.5 },
                "& .MuiInputLabel-root": { color: "inherit", opacity: 0.9 },
                "& .MuiSelect-select, & .MuiSelect-icon": { color: "inherit" },
              }}
            >
              <InputLabel id="header08-locale-label">{localeLabel}</InputLabel>
              <Select
                labelId="header08-locale-label"
                value={locale ?? locales[0].value}
                label={localeLabel}
                onChange={(e) => onLocaleChange?.(e.target.value)}
              >
                {locales.map((o) => (
                  <MenuItem key={o.value} value={o.value}>
                    {o.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          {contactLabel && (
            <Button color="inherit" onClick={onContact} sx={{ textTransform: "none", fontWeight: 600, whiteSpace: "nowrap" }}>
              {contactLabel}
            </Button>
          )}
          {signedIn ? (
            <Tooltip title={signOutLabel}>
              <IconButton color="inherit" onClick={onSignOut} aria-label={signOutLabel}>
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title={signInLabel}>
              <IconButton color="inherit" onClick={onSignIn} aria-label={signInLabel}>
                <LoginIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header08;
