"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import useMediaQuery from "@mui/material/useMediaQuery";
import { keyframes } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Header20, type Header20Item } from "./Header20.tsx";

const wiggle = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  50% { transform: rotate(-1deg); }
  75% { transform: rotate(1deg); }
`;

export interface Header16Link {
  label: React.ReactNode;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

export interface Header16NavItem extends Header16Link {
  /** When given, the button opens a dropdown of these links. */
  children?: Header16Link[];
}

export interface Header16LoginOption {
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  href: string;
}

export interface Header16BottomItem extends Header16Link {
  icon: React.ReactNode;
}

export interface Header16Props {
  /** Logo (about 50px); clicking it calls `onLogoClick`. */
  logo?: React.ReactNode;
  onLogoClick?: () => void;
  /** Toolbar start slot, e.g. a drawer menu button (see Header18 / Header19). */
  menu?: React.ReactNode;
  /** Transparent bar (default) or the solid primary bar. */
  transparent?: boolean;
  signedIn?: boolean;
  /** On the home page a signed-in user sees the highlight button + public links. */
  onHome?: boolean;
  /** Signed-in app navigation (text buttons, dropdowns for groups). */
  navItems?: Header16NavItem[];
  /** Wiggling call-to-action shown to a signed-in user on the home page. */
  highlight?: Header16Link;
  /** Public section links (stacked icon buttons). */
  publicItems?: Header20Item[];
  /** Hide the whole right-hand auth/tools group. */
  showAuth?: boolean;
  themeMode?: "light" | "dark";
  onToggleTheme?: () => void;
  toDarkLabel?: string;
  toLightLabel?: string;
  locales?: { value: string; label: string }[];
  locale?: string;
  localeLabel?: string;
  onLocaleChange?: (locale: string) => void;
  /** Extra right-side slot (e.g. an install icon). */
  actions?: React.ReactNode;
  signOutLabel?: React.ReactNode;
  onSignOut?: () => void;
  signInLabel?: React.ReactNode;
  onSignIn?: () => void;
  /** When given, sign-in opens a dropdown of cards (one per kind of account). */
  loginOptions?: Header16LoginOption[];
  /** Signed-in bottom navigation fixed to the bottom of the screen. */
  bottomItems?: Header16BottomItem[];
  linkComponent?: React.ElementType;
}

const navButtonSx = {
  my: 2,
  display: "block",
  fontWeight: "bold",
  whiteSpace: "nowrap",
  width: "auto",
} as const;

function linkProps(link: Header16Link, linkComponent: React.ElementType) {
  return link.href ? { component: linkComponent, href: link.href, onClick: link.onClick } : { onClick: link.onClick };
}

function Dropdown({ item, linkComponent }: { item: Header16NavItem; linkComponent: React.ElementType }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  return (
    <>
      <Button sx={navButtonSx} onClick={(e) => setAnchorEl(e.currentTarget)}>
        {item.label}
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        {item.children?.map((c, i) => (
          <MenuItem
            key={i}
            {...(c.href ? { component: linkComponent, href: c.href } : {})}
            onClick={() => {
              c.onClick?.();
              setAnchorEl(null);
            }}
            sx={{ color: c.active ? "secondary.main" : "primary.main", fontWeight: "bold" }}
          >
            {c.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

function LoginMenu({ label, options, linkComponent }: { label: React.ReactNode; options: Header16LoginOption[]; linkComponent: React.ElementType }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  return (
    <>
      <Button
        color="primary"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        endIcon={<ExpandMoreIcon />}
        sx={{ my: 2, fontWeight: "bold", textTransform: "none" }}
      >
        {label}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{ paper: { sx: { mt: 1.5, p: 1.5, minWidth: 280 } } }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {options.map((o, i) => (
            <Card key={i} variant="outlined" sx={{ overflow: "hidden" }}>
              <CardActionArea
                component={linkComponent}
                href={o.href}
                onClick={() => setAnchorEl(null)}
                sx={{ display: "block", textAlign: "left" }}
              >
                <CardContent sx={{ "&:last-child": { pb: 2 } }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.5, color: "primary.main" }}>
                    {o.icon}
                    <Typography variant="subtitle1" fontWeight={600} color="text.primary">
                      {o.title}
                    </Typography>
                  </Box>
                  {o.description && (
                    <Typography variant="body2" color="text.secondary">
                      {o.description}
                    </Typography>
                  )}
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Menu>
    </>
  );
}

/**
 * Fixed app/site header (transparent by default). Start: a drawer menu slot and the
 * logo. Desktop (`lg`+): signed-in users get text-button navigation with dropdown
 * groups; on the home page they get a wiggling call-to-action plus the public section
 * links; signed-out visitors get the public links. End: theme toggle, language select
 * (desktop), an actions slot and sign-out / sign-in (optionally a dropdown of account
 * cards). Optional signed-in bottom navigation.
 */
export function Header16({
  logo,
  onLogoClick,
  menu,
  transparent = true,
  signedIn = false,
  onHome = false,
  navItems = [],
  highlight,
  publicItems = [],
  showAuth = true,
  themeMode = "light",
  onToggleTheme,
  toDarkLabel = "Switch to dark mode",
  toLightLabel = "Switch to light mode",
  locales = [],
  locale,
  localeLabel = "Language",
  onLocaleChange,
  actions,
  signOutLabel = "Logout",
  onSignOut,
  signInLabel = "Login",
  onSignIn,
  loginOptions,
  bottomItems = [],
  linkComponent = "a",
}: Header16Props) {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  const desktop = signedIn ? (
    onHome ? (
      <>
        {highlight && (
          <Button sx={{ ...navButtonSx, animation: `${wiggle} 2s infinite` }} {...linkProps(highlight, linkComponent)}>
            {highlight.label}
          </Button>
        )}
        <Box sx={{ flexGrow: 1 }} />
        <Header20 items={publicItems} linkComponent={linkComponent} />
      </>
    ) : (
      navItems.map((item, i) =>
        item.children ? (
          <Dropdown key={i} item={item} linkComponent={linkComponent} />
        ) : (
          <Button key={i} sx={navButtonSx} {...linkProps(item, linkComponent)}>
            {item.label}
          </Button>
        ),
      )
    )
  ) : (
    <>
      <Box sx={{ flexGrow: 2 }} />
      <Header20 items={publicItems} linkComponent={linkComponent} />
    </>
  );

  return (
    <>
      <AppBar position="fixed" sx={transparent ? { backgroundColor: "transparent", color: "text.primary" } : undefined}>
        <Toolbar>
          {menu}
          {logo && (
            <Box onClick={onLogoClick} sx={{ display: "flex", alignItems: "center", cursor: onLogoClick ? "pointer" : undefined }}>
              {logo}
            </Box>
          )}
          {!isMobile && desktop}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", lg: "flex" }, flexGrow: 1 }} />
          {showAuth && (
            <Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 1 }}>
              {onToggleTheme && (
                <Tooltip title={themeMode === "light" ? toDarkLabel : toLightLabel}>
                  <IconButton onClick={onToggleTheme} color="inherit" aria-label={themeMode === "light" ? toDarkLabel : toLightLabel}>
                    {themeMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                  </IconButton>
                </Tooltip>
              )}
              {!isMobile && locales.length > 0 && (
                <FormControl variant="outlined" size="small" sx={{ width: 150, flexShrink: 0 }}>
                  <InputLabel id="header16-locale-label">{localeLabel}</InputLabel>
                  <Select
                    labelId="header16-locale-label"
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
              {actions}
              {signedIn ? (
                <Button sx={{ my: 2, display: "block", fontWeight: "bold" }} onClick={onSignOut}>
                  {signOutLabel}
                </Button>
              ) : loginOptions && loginOptions.length > 0 ? (
                <LoginMenu label={signInLabel} options={loginOptions} linkComponent={linkComponent} />
              ) : (
                <Button sx={{ my: 2, display: "block", fontWeight: "bold", fontSize: "1rem" }} onClick={onSignIn}>
                  {signInLabel}
                </Button>
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {signedIn && bottomItems.length > 0 && (
        <Box component="nav" sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: (t) => t.zIndex.appBar }}>
          <BottomNavigation showLabels>
            {bottomItems.map((b, i) => (
              <BottomNavigationAction
                key={i}
                label={b.label}
                icon={b.icon}
                {...(b.href ? { component: linkComponent, href: b.href } : {})}
                onClick={b.onClick}
                sx={{ padding: "4px", minWidth: "auto", color: b.active ? "primary.main" : "inherit" }}
              />
            ))}
          </BottomNavigation>
        </Box>
      )}
    </>
  );
}

export default Header16;
