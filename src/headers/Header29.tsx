"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import Badge from "@mui/material/Badge";
import CircularProgress from "@mui/material/CircularProgress";
import MenuIcon from "@mui/icons-material/Menu";

export interface Header29Crumb {
  label: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export interface Header29Link {
  label: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export interface Header29Props {
  /** First breadcrumb (underlined-on-hover link). */
  home: Header29Crumb;
  /** Further breadcrumbs, rendered as clickable chips. */
  crumbs?: Header29Crumb[];
  separator?: React.ReactNode;
  /** Slot right after the breadcrumbs. */
  children?: React.ReactNode;
  /** Text links on the right (desktop) and in the mobile drawer. */
  links?: Header29Link[];
  /** Disabled usage button with a count badge, e.g. "Billing 12/50" (desktop only). */
  usage?: { label: React.ReactNode; used: number; limit: number; loading?: boolean };
  signedIn?: boolean;
  signOutLabel?: React.ReactNode;
  onSignOut?: () => void;
  signInLabel?: React.ReactNode;
  onSignIn?: () => void;
  menuLabel?: string;
  linkComponent?: React.ElementType;
}

function linkProps(link: Header29Link, linkComponent: React.ElementType) {
  return link.href ? { component: linkComponent, href: link.href, onClick: link.onClick } : { onClick: link.onClick };
}

/**
 * Fixed workspace bar: below `md` a hamburger opens a drawer of the links with the
 * auth button at the bottom; an arrow-separated breadcrumb trail (a home link then
 * chips); a children slot; and from `md` the text links, a disabled usage button
 * with a coloured count badge (warning at 70%, error at 90%) and the auth button.
 */
export function Header29({
  home,
  crumbs = [],
  separator = "→",
  children,
  links = [],
  usage,
  signedIn = false,
  signOutLabel = "Logout",
  onSignOut,
  signInLabel = "Login",
  onSignIn,
  menuLabel = "menu",
  linkComponent = "a",
}: Header29Props) {
  const [open, setOpen] = React.useState(false);
  const authButton = (
    <Button sx={{ color: "inherit", my: 2, display: "block", fontWeight: "bold" }} onClick={signedIn ? onSignOut : onSignIn}>
      {signedIn ? signOutLabel : signInLabel}
    </Button>
  );
  const ratio = usage && usage.limit > 0 ? usage.used / usage.limit : 0;
  const badgeColor = usage?.loading ? "primary" : ratio >= 0.9 ? "error" : ratio >= 0.7 ? "warning" : "primary";

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label={menuLabel} onClick={() => setOpen(true)} sx={{ display: { xs: "block", md: "none" } }}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: 250, display: "flex", flexDirection: "column", height: "100%" }} role="presentation" onClick={() => setOpen(false)}>
            <List>
              {links.map((l, i) => (
                <Button key={i} sx={{ color: "text.primary", display: "block", fontWeight: "bold" }} {...linkProps(l, linkComponent)}>
                  {l.label}
                </Button>
              ))}
            </List>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ p: 2, color: "text.primary" }}>{authButton}</Box>
          </Box>
        </Drawer>
        <Breadcrumbs aria-label="breadcrumb" separator={separator} sx={{ color: "inherit" }}>
          <Link underline="hover" color="inherit" {...(home.href ? { component: linkComponent, href: home.href } : {})} onClick={home.onClick}>
            {home.label}
          </Link>
          {crumbs.map((c, i) => (
            <Chip
              key={i}
              label={c.label}
              onClick={c.onClick}
              {...(c.href ? { component: linkComponent, href: c.href, clickable: true } : {})}
              sx={{ color: "inherit", bgcolor: "action.selected" }}
            />
          ))}
        </Breadcrumbs>
        {children}
        <Box sx={{ flexGrow: 1 }} />
        {links.map((l, i) => (
          <Button key={i} sx={{ color: "inherit", fontWeight: "bold", display: { xs: "none", md: "block" } }} {...linkProps(l, linkComponent)}>
            {l.label}
          </Button>
        ))}
        {usage && (
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Badge badgeContent={usage.loading ? <CircularProgress size={16} /> : `${usage.used}/${usage.limit}`} color={badgeColor}>
              <Button sx={{ fontWeight: "bold", marginRight: 2, "&.Mui-disabled": { color: "inherit", opacity: 0.8 } }} disabled>
                {usage.label}
              </Button>
            </Badge>
          </Box>
        )}
        <Box sx={{ display: { xs: "none", md: "block" } }}>{authButton}</Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header29;
