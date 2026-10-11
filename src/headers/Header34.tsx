"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import InstallMobileIcon from "@mui/icons-material/InstallMobile";

export interface Header52LocaleOption {
  value: string;
  label: string;
}

/** One entry of the sign-in chooser ("which sign-in?"). */
export interface Header52SignInOption {
  key: string;
  href: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  icon?: React.ReactNode;
}

export interface Header52Props {
  /** Logo / lockup on the left. */
  logo?: React.ReactNode;
  /** Href of the logo link (default "/"). */
  logoHref?: string;
  /** Optional slot rendered above the toolbar. */
  banner?: React.ReactNode;
  signedIn?: boolean;
  dashboardLabel: React.ReactNode;
  dashboardHref?: string;
  signOutLabel: React.ReactNode;
  onSignOut?: () => void;
  signInLabel: string;
  /** Sign-in doors shown in a menu of cards. With one option or none, the button links straight to `signInHref`. */
  signInOptions?: Header52SignInOption[];
  signInHref?: string;
  /** Drawer (phones) title, close label and the label of the appearance row. */
  menuLabel: string;
  closeMenuLabel: string;
  appearanceLabel: React.ReactNode;
  locales?: Header52LocaleOption[];
  locale?: string;
  localeLabel?: string;
  onLocaleChange?: (locale: string) => void;
  themeMode?: "light" | "dark";
  onToggleTheme?: () => void;
  toDarkLabel?: string;
  toLightLabel?: string;
  /** Install control, shown only when given. */
  onInstall?: () => void;
  installLabel?: string;
  linkComponent?: React.ElementType;
}

/**
 * Public top bar that stays usable on a phone: logo and Sign in at every width; on `md`+ the
 * settings (install, theme, language) and Dashboard / Sign out sit in the bar, below `md` they move
 * into a right-hand drawer behind a menu button. Sign in can open a chooser of sign-in doors.
 */
export function Header34(props: Header52Props) {
  const {
    logo,
    logoHref = "/",
    banner,
    signedIn = false,
    dashboardLabel,
    dashboardHref = "/dashboard",
    signOutLabel,
    onSignOut,
    signInLabel,
    signInOptions = [],
    signInHref = "/auth/login",
    menuLabel,
    closeMenuLabel,
    appearanceLabel,
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
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);

  const themeToggle = onToggleTheme && (
    <Tooltip title={themeMode === "light" ? toDarkLabel : toLightLabel}>
      <IconButton onClick={onToggleTheme} color="inherit" aria-label="toggle theme">
        {themeMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Tooltip>
  );

  const localeSelect = (sx: object) =>
    locales.length > 0 && (
      <FormControl variant="outlined" size="small" sx={sx}>
        <InputLabel id="header52-locale-label">{localeLabel}</InputLabel>
        <Select
          labelId="header52-locale-label"
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
    );

  const barSelectSx = {
    width: 120,
    color: "inherit",
    "& .MuiOutlinedInput-notchedOutline": { borderColor: "currentColor", opacity: 0.5 },
    "& .MuiInputLabel-root": { color: "inherit", opacity: 0.9 },
    "& .MuiSelect-select": { color: "inherit" },
    "& .MuiSvgIcon-root": { color: "inherit" },
  };

  const chooser = signInOptions.length > 1;

  return (
    <AppBar position="static" sx={{ flexDirection: "column", alignItems: "stretch" }}>
      {banner}
      <Toolbar sx={{ gap: 1 }}>
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Link component={linkComponent} href={logoHref} color="inherit" underline="none" sx={{ display: "inline-flex" }}>
            {logo}
          </Link>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, alignItems: "center" }}>
          {onInstall && (
            <Tooltip title={installLabel}>
              <IconButton color="inherit" onClick={onInstall} aria-label={installLabel} size="small" sx={{ minWidth: 44, minHeight: 44 }}>
                <InstallMobileIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
          {themeToggle}
          {localeSelect(barSelectSx)}
          {signedIn && (
            <>
              <Button color="inherit" component={linkComponent} href={dashboardHref}>
                {dashboardLabel}
              </Button>
              <Button color="inherit" onClick={onSignOut}>
                {signOutLabel}
              </Button>
            </>
          )}
        </Box>

        {!signedIn && (
          <>
            <Button
              color="inherit"
              startIcon={<LoginIcon />}
              aria-label={signInLabel}
              sx={{ minHeight: 44, minWidth: 44, whiteSpace: "nowrap" }}
              {...(chooser
                ? { onClick: (e: React.MouseEvent<HTMLElement>) => setAnchor(e.currentTarget) }
                : { component: linkComponent, href: signInOptions[0]?.href ?? signInHref })}
            >
              <Box component="span">{signInLabel}</Box>
            </Button>
            {chooser && (
              <Menu
                anchorEl={anchor}
                open={Boolean(anchor)}
                onClose={() => setAnchor(null)}
                slotProps={{ paper: { sx: { p: 1, width: 300, borderRadius: 2 } } }}
              >
                {signInOptions.map((d) => (
                  <Card key={d.key} variant="outlined" sx={{ mb: 1, overflow: "hidden", "&:last-of-type": { mb: 0 } }}>
                    <CardActionArea
                      component={linkComponent}
                      href={d.href}
                      onClick={() => setAnchor(null)}
                      sx={{ p: 1.5, display: "flex", gap: 1.5, alignItems: "flex-start", justifyContent: "flex-start", minHeight: 44 }}
                    >
                      {d.icon && <Box sx={{ mt: 0.25, color: "primary.main", display: "flex" }}>{d.icon}</Box>}
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                          {d.title}
                        </Typography>
                        {d.body && (
                          <Typography variant="caption" color="text.secondary">
                            {d.body}
                          </Typography>
                        )}
                      </Box>
                    </CardActionArea>
                  </Card>
                ))}
              </Menu>
            )}
          </>
        )}

        <IconButton
          color="inherit"
          onClick={() => setMenuOpen(true)}
          aria-label={menuLabel}
          sx={{ display: { xs: "inline-flex", md: "none" }, minWidth: 44, minHeight: 44 }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)} slotProps={{ paper: { sx: { width: 280 } } }}>
        <Stack direction="row" alignItems="center" sx={{ p: 1.5, pb: 1 }}>
          <Typography variant="overline" color="text.secondary" sx={{ flexGrow: 1 }}>
            {menuLabel}
          </Typography>
          <IconButton onClick={() => setMenuOpen(false)} aria-label={closeMenuLabel}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Divider />
        <List>
          {locales.length > 0 && <ListItem>{localeSelect({ width: "100%" })}</ListItem>}
          {themeToggle && (
            <ListItem secondaryAction={themeToggle}>
              <ListItemText primary={appearanceLabel} />
            </ListItem>
          )}
          {onInstall && (
            <ListItemButton onClick={onInstall} sx={{ minHeight: 44 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <InstallMobileIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={installLabel} />
            </ListItemButton>
          )}
          {signedIn && (
            <>
              <Divider sx={{ my: 1 }} />
              <ListItemButton component={linkComponent} href={dashboardHref} onClick={() => setMenuOpen(false)} sx={{ minHeight: 44 }}>
                <ListItemText primary={dashboardLabel} />
              </ListItemButton>
              <ListItemButton onClick={onSignOut} sx={{ minHeight: 44 }}>
                <ListItemText primary={signOutLabel} />
              </ListItemButton>
            </>
          )}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Header34;
