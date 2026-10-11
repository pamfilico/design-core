"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export interface Header61NavItem {
  label: React.ReactNode;
  href: string;
  active?: boolean;
}

export interface Header61Props {
  /** 32px logo tile on the left. */
  logo?: React.ReactNode;
  title: React.ReactNode;
  /** Click-only nav; the active item is a contained button. */
  items: Header61NavItem[];
  /** Signed-in user name shown before the sign-out button. */
  userName?: React.ReactNode;
  signOutLabel?: React.ReactNode;
  onSignOut?: () => void;
  position?: "sticky" | "static" | "fixed";
  linkComponent?: React.ElementType;
}

/**
 * Operator panel top bar on the default surface: logo tile, bold title, a wrapping row of small
 * nav buttons (active = contained), the user name and an error-coloured sign-out.
 */
export function Header43(props: Header61Props) {
  const { logo, title, items, userName, signOutLabel = "Log out", onSignOut, position = "sticky", linkComponent = "a" } = props;
  return (
    <AppBar position={position} color="default">
      <Toolbar sx={{ gap: 1, flexWrap: "wrap", py: 1 }}>
        {logo}
        <Typography sx={{ fontWeight: 800, mr: 2 }}>{title}</Typography>
        <Box component="nav" sx={{ display: "flex", gap: 0.5, flexWrap: "wrap", flexGrow: 1 }}>
          {items.map((n) => (
            <Button key={n.href} component={linkComponent} href={n.href} size="small" variant={n.active ? "contained" : "text"}>
              {n.label}
            </Button>
          ))}
        </Box>
        {userName && (
          <Typography variant="body2" color="text.secondary">
            {userName}
          </Typography>
        )}
        <Button size="small" color="error" onClick={onSignOut}>
          {signOutLabel}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header43;
