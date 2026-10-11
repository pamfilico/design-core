"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export interface Header55NavItem {
  label: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
}

export interface Header55Props {
  /** Business / site name next to the icon; links to `homeHref`. */
  title: React.ReactNode;
  homeHref: string;
  /** Small icon shown before the title (from `sm`) and in the drawer header. */
  icon?: React.ReactNode;
  /** Nav buttons. The first item is treated as home (active only on an exact match). */
  items: Header55NavItem[];
  /** Current path; used to highlight the active item. */
  activeHref?: string;
  /** Caption at the bottom of the drawer (e.g. "Powered by …"). */
  drawerCaption?: React.ReactNode;
  menuLabel?: string;
  linkComponent?: React.ElementType;
}

/**
 * Sticky storefront bar on the default (paper) surface: icon + site name on the left and
 * icon buttons for each section on the right with a tinted active state. Below `sm` the buttons
 * move into a left drawer with a header, bordered active row and a caption at the bottom.
 */
export function Header37(props: Header55Props) {
  const { title, homeHref, icon, items, activeHref, drawerCaption, menuLabel = "open menu", linkComponent = "a" } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const isActive = (path: string) => {
    if (!activeHref) return false;
    if (path === homeHref) return activeHref === homeHref;
    return activeHref === path || activeHref.startsWith(`${path}/`);
  };

  const toggle = () => setDrawerOpen((o) => !o);

  return (
    <>
      <AppBar position="sticky" color="default">
        <Toolbar sx={{ minHeight: { xs: 56, sm: 64 } }}>
          {isMobile && (
            <IconButton color="inherit" aria-label={menuLabel} edge="start" onClick={toggle} sx={{ mr: 1 }}>
              <MenuIcon />
            </IconButton>
          )}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: 1 }}>
            {icon && <Box sx={{ display: { xs: "none", sm: "flex" }, color: "primary.main" }}>{icon}</Box>}
            <Typography
              variant="h6"
              component={linkComponent}
              href={homeHref}
              sx={{
                color: "text.primary",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: { xs: "1rem", sm: "1.25rem" },
                "&:hover": { opacity: 0.9 },
              }}
            >
              {title}
            </Typography>
          </Box>
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 1 }}>
              {items.map((item) => {
                const active = isActive(item.href);
                return (
                  <Button
                    key={item.href}
                    color="inherit"
                    component={linkComponent}
                    href={item.href}
                    startIcon={item.icon}
                    sx={{
                      color: active ? "primary.main" : "text.primary",
                      fontWeight: active ? 600 : 400,
                      bgcolor: (t) => (active ? alpha(t.palette.primary.main, 0.1) : "transparent"),
                      borderRadius: 2,
                      px: 2,
                      "&:hover": { bgcolor: (t) => alpha(t.palette.primary.main, 0.08) },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggle}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: "block", sm: "none" }, "& .MuiDrawer-paper": { boxSizing: "border-box", width: 280 } }}
      >
        <Box sx={{ width: 280 }}>
          <Box
            sx={{
              color: "text.primary",
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {icon && <Box sx={{ display: "flex", color: "primary.main" }}>{icon}</Box>}
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {title}
              </Typography>
            </Box>
            <IconButton onClick={toggle} sx={{ color: "text.primary" }} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
          <List sx={{ pt: 1 }}>
            {items.map((item) => {
              const active = isActive(item.href);
              return (
                <ListItem key={item.href} disablePadding>
                  <ListItemButton
                    component={linkComponent}
                    href={item.href}
                    onClick={toggle}
                    sx={{
                      py: 1.5,
                      bgcolor: active ? "action.selected" : "transparent",
                      borderLeft: active ? 4 : 0,
                      borderColor: "primary.main",
                      "&:hover": { bgcolor: "action.hover" },
                    }}
                  >
                    {item.icon && (
                      <ListItemIcon sx={{ color: active ? "primary.main" : "text.secondary", minWidth: 40 }}>
                        {item.icon}
                      </ListItemIcon>
                    )}
                    <ListItemText
                      primary={item.label}
                      slotProps={{
                        primary: { fontWeight: active ? 600 : 400, color: active ? "primary.main" : "text.primary" },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          {drawerCaption && (
            <>
              <Divider sx={{ mt: 2 }} />
              <Box sx={{ p: 2, mt: "auto" }}>
                <Typography variant="caption" color="text.secondary" sx={{ display: "block", textAlign: "center" }}>
                  {drawerCaption}
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Drawer>
    </>
  );
}

export default Header37;
