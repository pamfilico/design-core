"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export interface Header12Item {
  label: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
}

export interface Header12Props {
  /** Business / site name shown next to the icon. */
  name: React.ReactNode;
  nameHref?: string;
  /** Small icon before the name (hidden on xs) and in the drawer band. */
  icon?: React.ReactNode;
  items: Header12Item[];
  /** Current path; exact match for `nameHref`, prefix match for the rest. */
  activeHref?: string;
  /** Caption at the bottom of the mobile drawer. */
  drawerFooter?: React.ReactNode;
  linkComponent?: React.ElementType;
  menuLabel?: string;
  closeLabel?: string;
}

/**
 * Sticky public-site header on the primary colour: icon + name link, icon text
 * buttons on desktop (active one tinted), and below `md` a hamburger that opens a
 * left drawer with a primary-coloured name band, an icon list whose active item has
 * a primary left border, and an optional footer caption.
 */
export function Header12({
  name,
  nameHref = "/",
  icon,
  items,
  activeHref,
  drawerFooter,
  linkComponent = "a",
  menuLabel = "open menu",
  closeLabel = "close menu",
}: Header12Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen((o) => !o);

  const isActive = (href: string) => {
    if (!activeHref) return false;
    if (href === nameHref) return activeHref === nameHref;
    return activeHref === href || activeHref.startsWith(`${href}/`);
  };

  return (
    <>
      <AppBar position="sticky" color="primary" sx={{ boxShadow: 2 }}>
        <Toolbar sx={{ minHeight: { xs: 56, sm: 64 } }}>
          {isMobile && (
            <IconButton color="inherit" aria-label={menuLabel} edge="start" onClick={toggle} sx={{ mr: 1 }}>
              <MenuIcon />
            </IconButton>
          )}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: 1 }}>
            {icon && <Box sx={{ display: { xs: "none", sm: "flex" } }}>{icon}</Box>}
            <Typography
              variant="h6"
              component={linkComponent}
              href={nameHref}
              sx={{
                color: "inherit",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: { xs: "1rem", sm: "1.25rem" },
                "&:hover": { opacity: 0.9 },
              }}
            >
              {name}
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
                      fontWeight: active ? 600 : 400,
                      bgcolor: active ? "action.selected" : "transparent",
                      borderRadius: 2,
                      px: 2,
                      "&:hover": { bgcolor: "action.focus" },
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
        open={open}
        onClose={toggle}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: "block", md: "none" }, "& .MuiDrawer-paper": { boxSizing: "border-box", width: 280 } }}
      >
        <Box sx={{ width: 280 }}>
          <Box
            sx={{
              bgcolor: "primary.main",
              color: "primary.contrastText",
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {icon}
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {name}
              </Typography>
            </Box>
            <IconButton onClick={toggle} sx={{ color: "inherit" }} size="small" aria-label={closeLabel}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
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
                      <ListItemIcon sx={{ color: active ? "primary.main" : "text.secondary", minWidth: 40 }}>{item.icon}</ListItemIcon>
                    )}
                    <ListItemText
                      primary={item.label}
                      slotProps={{
                        primary: { sx: { fontWeight: active ? 600 : 400, color: active ? "primary.main" : "text.primary" } },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          {drawerFooter && (
            <>
              <Divider sx={{ mt: 2 }} />
              <Box sx={{ p: 2, mt: "auto" }}>
                <Typography variant="caption" color="text.secondary" sx={{ display: "block", textAlign: "center" }}>
                  {drawerFooter}
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Drawer>
    </>
  );
}

export default Header12;
