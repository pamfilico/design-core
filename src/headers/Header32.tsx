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
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import InstallMobileIcon from "@mui/icons-material/InstallMobile";

export interface Header50LocaleOption {
  value: string;
  label: string;
}

export interface Header50Props {
  /** Brand text or node in the left link. */
  brand: React.ReactNode;
  /** Href of the brand link (default "/"). */
  brandHref?: string;
  /** Optional slot rendered above the toolbar (e.g. a notice banner). */
  banner?: React.ReactNode;
  /** Signed-in state: shows the dashboard link and sign-out instead of sign-in. */
  signedIn?: boolean;
  dashboardLabel: React.ReactNode;
  dashboardHref?: string;
  signOutLabel: React.ReactNode;
  onSignOut?: () => void;
  signInLabel: React.ReactNode;
  signInHref?: string;
  /** Language select. Hidden when no options are given. */
  locales?: Header50LocaleOption[];
  locale?: string;
  localeLabel?: string;
  onLocaleChange?: (locale: string) => void;
  /** Theme toggle. Hidden when `onToggleTheme` is not given. */
  themeMode?: "light" | "dark";
  onToggleTheme?: () => void;
  toDarkLabel?: string;
  toLightLabel?: string;
  /** Install icon. Shown only when `onInstall` is given (i.e. installing is possible). */
  onInstall?: () => void;
  installLabel?: string;
  /** Component used for links (e.g. a router link). Defaults to "a". */
  linkComponent?: React.ElementType;
}

/**
 * Public top bar: brand link on the left; on the right an optional install icon, a light/dark
 * toggle, a language select and either Dashboard + Sign out (signed in) or Sign in.
 */
export function Header32(props: Header50Props) {
  const {
    brand,
    brandHref = "/",
    banner,
    signedIn = false,
    dashboardLabel,
    dashboardHref = "/dashboard",
    signOutLabel,
    onSignOut,
    signInLabel,
    signInHref = "/auth/login",
    locales = [],
    locale,
    localeLabel = "Language",
    onLocaleChange,
    themeMode = "light",
    onToggleTheme,
    toDarkLabel = "Switch to dark mode",
    toLightLabel = "Switch to light mode",
    onInstall,
    installLabel = "Install",
    linkComponent = "a",
  } = props;

  return (
    <AppBar position="static" sx={{ flexDirection: "column", alignItems: "stretch" }}>
      {banner}
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link component={linkComponent} href={brandHref} color="inherit" underline="none">
            {brand}
          </Link>
        </Typography>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          {onInstall && (
            <Tooltip title={installLabel}>
              <IconButton
                color="inherit"
                onClick={onInstall}
                aria-label={installLabel}
                size="small"
                sx={{ minWidth: 44, minHeight: 44 }}
              >
                <InstallMobileIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
          {onToggleTheme && (
            <Tooltip title={themeMode === "light" ? toDarkLabel : toLightLabel}>
              <IconButton onClick={onToggleTheme} color="inherit" aria-label="toggle theme">
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
                "& .MuiSelect-select": { color: "inherit" },
                "& .MuiSvgIcon-root": { color: "inherit" },
              }}
            >
              <InputLabel id="header50-locale-label">{localeLabel}</InputLabel>
              <Select
                labelId="header50-locale-label"
                value={locale ?? locales[0].value}
                label={localeLabel}
                onChange={(e) => onLocaleChange?.(e.target.value as string)}
              >
                {locales.map((o) => (
                  <MenuItem key={o.value} value={o.value}>
                    {o.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          {signedIn ? (
            <>
              <Button color="inherit" component={linkComponent} href={dashboardHref}>
                {dashboardLabel}
              </Button>
              <Button color="inherit" onClick={onSignOut}>
                {signOutLabel}
              </Button>
            </>
          ) : (
            <Button color="inherit" component={linkComponent} href={signInHref}>
              {signInLabel}
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header32;
