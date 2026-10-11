"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

/** One card in the sign-in chooser. */
export interface Header65SignInOption {
  key: string;
  href: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  icon?: React.ReactNode;
}

export interface Header65Props {
  brand: React.ReactNode;
  brandHref?: string;
  /** Optional page title that replaces the brand from `sm` up. */
  pageTitle?: React.ReactNode;
  signedIn?: boolean;
  /** Signed in: opens the side navigation. */
  onMenuClick?: () => void;
  menuLabel?: string;
  /** Signed in: a small clickable status chip (e.g. a plan or trial state). */
  statusChip?: { label: React.ReactNode; color?: "primary" | "error" | "default" | "success" | "warning"; onClick?: () => void };
  themeMode?: "light" | "dark";
  /** Signed in: light/dark toggle, shown when given. */
  onToggleTheme?: () => void;
  toDarkLabel?: string;
  toLightLabel?: string;
  /** Signed out: the "Sign in ▾" button and the cards of its menu. */
  signInLabel: React.ReactNode;
  signInOptions: Header65SignInOption[];
  linkComponent?: React.ElementType;
}

/**
 * Primary app bar: a hamburger (signed in), the brand link (or a page title from `sm`), and on the
 * right either a status chip + theme toggle (signed in) or a "Sign in ▾" button opening a menu of
 * sign-in cards, one per kind of account.
 */
export function Header47(props: Header65Props) {
  const {
    brand,
    brandHref = "/",
    pageTitle,
    signedIn = false,
    onMenuClick,
    menuLabel = "open drawer",
    statusChip,
    themeMode = "light",
    onToggleTheme,
    toDarkLabel = "Switch to dark mode",
    toLightLabel = "Switch to light mode",
    signInLabel,
    signInOptions,
    linkComponent = "a",
  } = props;
  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);
  const close = () => setAnchor(null);

  return (
    <AppBar position="static">
      <Toolbar>
        {signedIn && (
          <IconButton color="inherit" aria-label={menuLabel} edge="start" onClick={onMenuClick} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link component={linkComponent} href={brandHref} color="inherit" underline="none">
            {pageTitle ? (
              <>
                <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
                  {pageTitle}
                </Box>
                <Box component="span" sx={{ display: { xs: "inline", sm: "none" } }}>
                  {brand}
                </Box>
              </>
            ) : (
              brand
            )}
          </Link>
        </Typography>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          {signedIn ? (
            <>
              {statusChip && (
                <Chip
                  label={statusChip.label}
                  color={statusChip.color ?? "primary"}
                  onClick={statusChip.onClick}
                  sx={{ cursor: "pointer" }}
                  size="small"
                />
              )}
              {onToggleTheme && (
                <Tooltip title={themeMode === "light" ? toDarkLabel : toLightLabel}>
                  <IconButton onClick={onToggleTheme} color="inherit" aria-label="toggle theme">
                    {themeMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                  </IconButton>
                </Tooltip>
              )}
            </>
          ) : (
            <>
              <Button color="inherit" onClick={(e) => setAnchor(e.currentTarget)} endIcon={<ExpandMoreIcon />} sx={{ textTransform: "none" }}>
                {signInLabel}
              </Button>
              <Menu
                anchorEl={anchor}
                open={Boolean(anchor)}
                onClose={close}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                slotProps={{ paper: { sx: { mt: 1.5, p: 1.5, minWidth: 280 } } }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {signInOptions.map((o) => (
                    <Card key={o.key} variant="outlined" sx={{ overflow: "hidden" }}>
                      <CardActionArea component={linkComponent} href={o.href} onClick={close} sx={{ display: "block", textAlign: "left" }}>
                        <CardContent sx={{ "&:last-child": { pb: 2 } }}>
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.5 }}>
                            {o.icon && <Box sx={{ display: "flex", color: "primary.main" }}>{o.icon}</Box>}
                            <Typography variant="subtitle1" fontWeight={600}>
                              {o.title}
                            </Typography>
                          </Box>
                          {o.body && (
                            <Typography variant="body2" color="text.secondary">
                              {o.body}
                            </Typography>
                          )}
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  ))}
                </Box>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header47;
