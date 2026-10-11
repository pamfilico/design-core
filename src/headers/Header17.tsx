"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { keyframes } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

const wiggle = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  50% { transform: rotate(-1deg); }
  75% { transform: rotate(1deg); }
`;

export interface Header17Link {
  label: React.ReactNode;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

export interface Header17NavItem extends Header17Link {
  children?: Header17Link[];
}

export interface Header17Group {
  title: React.ReactNode;
  items: Header17Link[];
}

export interface Header17Props {
  logo?: React.ReactNode;
  onLogoClick?: () => void;
  signedIn?: boolean;
  onHome?: boolean;
  /** Desktop navigation for signed-in users (buttons, dropdowns for groups). */
  navItems?: Header17NavItem[];
  /** Wiggling call-to-action for a signed-in user on the home page. */
  highlight?: Header17Link;
  /** Public links (signed out, or home page). */
  publicItems?: Header17Link[];
  /** Mobile drawer groups (titled, indented items) for signed-in users. */
  drawerGroups?: Header17Group[];
  /** Mobile drawer group for signed-out visitors. */
  publicGroup?: Header17Group;
  signOutLabel?: React.ReactNode;
  onSignOut?: () => void;
  signInLabel?: React.ReactNode;
  onSignIn?: () => void;
  menuLabel?: string;
  linkComponent?: React.ElementType;
}

const navSx = { my: 2, display: "block", fontWeight: "bold", whiteSpace: "nowrap", width: "auto" } as const;

function linkProps(link: Header17Link, linkComponent: React.ElementType) {
  return link.href ? { component: linkComponent, href: link.href, onClick: link.onClick } : { onClick: link.onClick };
}

function Dropdown({ item, linkComponent }: { item: Header17NavItem; linkComponent: React.ElementType }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  return (
    <>
      <Button sx={{ ...navSx, color: "primary.contrastText" }} onClick={(e) => setAnchorEl(e.currentTarget)}>
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

/**
 * Fixed solid header. Below `sm` a hamburger opens a 250px drawer of titled groups
 * (indented items) with the auth button pinned at the bottom. From `sm` up: logo,
 * then text-button navigation (active in the secondary colour) with dropdown groups;
 * on the home page a signed-in user sees a wiggling call-to-action and the public
 * links. The auth text button sits at the far right.
 */
export function Header17({
  logo,
  onLogoClick,
  signedIn = false,
  onHome = false,
  navItems = [],
  highlight,
  publicItems = [],
  drawerGroups = [],
  publicGroup,
  signOutLabel = "Logout",
  onSignOut,
  signInLabel = "Login",
  onSignIn,
  menuLabel = "menu",
  linkComponent = "a",
}: Header17Props) {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);

  const authButton = (
    <Button
      sx={{ color: "inherit", my: 2, display: "block", fontWeight: "bold", ...(signedIn ? {} : { fontSize: "1rem" }) }}
      onClick={signedIn ? onSignOut : onSignIn}
    >
      {signedIn ? signOutLabel : signInLabel}
    </Button>
  );

  const publicButtons = publicItems.map((p, i) => (
    <Button key={i} sx={{ ...navSx, color: "inherit" }} {...linkProps(p, linkComponent)}>
      {p.label}
    </Button>
  ));

  const groups = signedIn ? drawerGroups : publicGroup ? [publicGroup] : [];

  return (
    <AppBar position="fixed">
      <Toolbar>
        {isMobile && (
          <>
            <IconButton edge="start" color="inherit" aria-label={menuLabel} onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
              <Box
                sx={{ width: 250, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh" }}
                role="presentation"
                onClick={() => setOpen(false)}
              >
                <List>
                  {groups.map((g, gi) => (
                    <React.Fragment key={gi}>
                      <ListItem sx={{ color: "secondary.main" }}>
                        <ListItemText primary={g.title} />
                      </ListItem>
                      {g.items.map((it, ii) => (
                        <ListItemButton key={ii} sx={{ pl: 4 }} selected={it.active} {...linkProps(it, linkComponent)}>
                          <ListItemText primary={it.label} />
                        </ListItemButton>
                      ))}
                    </React.Fragment>
                  ))}
                </List>
                <Box sx={{ p: 2, color: "text.primary" }}>{authButton}</Box>
              </Box>
            </Drawer>
          </>
        )}
        {logo && (
          <Box onClick={onLogoClick} sx={{ display: "flex", alignItems: "center", cursor: onLogoClick ? "pointer" : undefined }}>
            {logo}
          </Box>
        )}
        {!isMobile &&
          (signedIn ? (
            onHome ? (
              <>
                {highlight && (
                  <Button sx={{ ...navSx, color: "inherit", animation: `${wiggle} 2s infinite` }} {...linkProps(highlight, linkComponent)}>
                    {highlight.label}
                  </Button>
                )}
                <Box sx={{ flexGrow: 1 }} />
                {publicButtons}
              </>
            ) : (
              navItems.map((item, i) =>
                item.children ? (
                  <Dropdown key={i} item={item} linkComponent={linkComponent} />
                ) : (
                  <Button
                    key={i}
                    sx={{ ...navSx, color: item.active ? "secondary.main" : "primary.contrastText" }}
                    {...linkProps(item, linkComponent)}
                  >
                    {item.label}
                  </Button>
                ),
              )
            )
          ) : (
            publicButtons
          ))}
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }} />
        <Box sx={{ ml: "auto", display: "flex", alignItems: "center" }}>{authButton}</Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header17;
